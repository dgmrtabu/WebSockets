const lblOnline = document.querySelector("#lblOnLine");
const lblOffline = document.querySelector("#lblOffLine");

const txtMensaje = document.querySelector("#txtMensaje");
const btnEnviar = document.querySelector("#btnEnviar");

const socket = io();

socket.on("connect", () => {
  console.log("Conectado");
  lblOffline.style.display = "none";
  lblOnline.style.display = "";
});

socket.on("disconnect", () => {
  console.log("Desconectado del servidor");
  lblOffline.style.display = "";
  lblOnline.style.display = "none";
});
