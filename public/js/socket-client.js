const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");
const txtMensaje = document.querySelector("#txtMensaje");
const btnEnviar = document.querySelector("#btnEnviar");
const btnStart = document.querySelector("#btnStart");

const customerList = document.querySelector("#customer-list");

const socket = io();

btnStart.style.display = "none";

//Escuchar algun evento
socket.on("connect", () => {
  lblOffline.style.display = "none";
  lblOnline.style.display = "";
});

socket.on("disconnect", () => {
  lblOffline.style.display = "";
  lblOnline.style.display = "none";
  console.log("Estas desconectado");
});

socket.on("enviar-mensaje", (payload) => {
  console.log(payload);
});

socket.on("send-host", (payload) => {
  if (payload != null) {
    if (payload.id == socket.id) {
      btnStart.style.display = "";
    }

    console.log(`El host es ${payload.name}`);
  }
});

socket.on("send-customers", (payload) => {
  if (payload.length != 0) {
    while (customerList.firstChild) {
      customerList.removeChild(customerList.firstChild);
    }
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.classList.add("active");
    li.textContent = "Listado de usuarios";
    customerList.appendChild(li);

    payload.forEach((customer) => {
      const li = document.createElement("li");
      li.classList.add("list-group-item");
      li.textContent = `${customer.name}`;
      customerList.appendChild(li);
    });
    console.log(payload);
  }
});

btnEnviar.addEventListener("click", () => {
  const name = txtMensaje.value;
  const payload = {
    id: socket.id,
    name: name,
  };
  console.log(name);

  socket.emit("customer-register", payload, (id) => {
    console.log(id);
  });
});


btnStart.addEventListener("click", () => {
    socket.emit("start-game", true);
  });