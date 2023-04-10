
const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");
const txtMensaje = document.querySelector("#txtMensaje");
const btnEnviar = document.querySelector("#btnEnviar");
const btnStart = document.querySelector("#btnStart");
const btnEnviarAtaque = document.querySelector("#btnEnviarAtaque");
const txtPositionX = document.querySelector("#txtPositionX");
const txtPositionY = document.querySelector("#txtPositionY");


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

socket.on("send-my-board", (payload) => {
    if (payload != null) {
        console.log("El tablero personal del juego es ")

        printBoard(payload);
    }
  });

  socket.on("send-ship-board", (payload) => {
    if (payload != null) {
        console.log("El tablero general del juego es")
        printBoard(payload);
    }
  });

  socket.on("send-winner", (payload) => {
    if (payload != null) {
        console.log("El ganador del juego es ")
        console.log(payload)
    }
  });

  socket.on("send-loser", (payload) => {
    if (payload != null) {
        if(payload.loser==true){
            console.log("Gracias por jugar , te han hundido todos los barcos")
        }
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

btnEnviarAtaque.addEventListener("click", () => {
    console.log('Ataque enviado')
    const x = txtPositionX.value;
    const y = txtPositionY.value;

    const payload = {
      x: x,
      y: y,
    };
  
    socket.emit("send-atack", payload);
  });

  socket.on("result-attack", (payload) => {
    if (payload != null) {
        console.log("El resultado de tu ataque es ")
        console.log(payload)
    }
  });

function printBoard(board) {
    console.log(`El tablero es`);
    let concatArray = [];
    board.forEach((element) => {
      concatArray = concatArray.concat(element); // Asigna el resultado de la concatenación a la variable
    });
    let output = ""; // Variable para acumular los elementos
    for (let i = 0; i < concatArray.length; i++) {
      output += concatArray[i]; // Agrega el elemento actual a la variable de salida
      if ((i + 1) % 30 === 0) {
        console.log(output); // Imprime la línea de salida cada 30 elementos
        output = ""; // Reinicia la variable de salida para la siguiente línea
      } else {
        output += " "; // Agrega un espacio después del elemento, excepto en el último elemento de la línea
      }
    }
    if (output !== "") {
      console.log(output); // Imprime la última línea, si es que quedaron elementos pendientes
    }
  }

btnStart.addEventListener("click", () => {
    socket.emit("start-game", true);
  });