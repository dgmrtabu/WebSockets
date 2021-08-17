const lblOnline = document.querySelector("#lblOnLine");
const lblOffline = document.querySelector("#lblOffLine");

const txtMensaje = document.querySelector("#txtMensaje");
const btnEnviar = document.querySelector("#btnEnviar");

const socket = io();

socket.on("connect", () => {
    //console.log("Conectado");
    lblOffline.style.display = "none";
    lblOnline.style.display = "";
});

socket.on("disconnect", () => {
    //console.log("Desconectado del servidor");
    lblOffline.style.display = "";
    lblOnline.style.display = "none";
});

socket.on('enviar-mensaje', (payload) => {
    console.log(payload);

});

btnEnviar.addEventListener('click', () => {

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123ABC',
        fecha: new Date().getTime()
    };

    socket.emit('enviar-mensaje', payload, (id) => {

        console.log('Desede el server', id);

    });


});