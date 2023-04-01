let totalCustomers = 0;
const customers = [];
let hostCustomer = customers[0];
let shipBoard = [
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
];
const shipsCustomers = [];

function locateBoat(board, size) {
  let result = false;
  let rigth = false;
  let left = false;
  let up = false;
  let down = false;

  while (!result) {
    let randomRow = Math.floor(Math.random() * 15);
    let randomColum = Math.floor(Math.random() * 30);
    let randomUbication = Math.round(Math.random());
    if (shipBoard[randomRow][randomColum] == 0) {
      let randomDown = randomRow + size;
      let randomUp = randomRow - size;
      let randomRigth = randomColum + size;
      let randomLeft = randomColum - size;
      if (randomUbication == 0) {
        console.log("Entra por primero horizontal");
        if (randomRigth >= 0 && randomRigth <= 29) {
          console.log("Entra por derecha");

          if (shipBoard[randomRow][randomColum + size] == 0) {
            rigth = true;
            for (i = randomColum; i < randomColum + size; i++) {
              if (shipBoard[randomRow][i] != 0) {
                rigth = false;
              }
            }
            if (rigth == true) {
              for (i = randomColum; i < randomColum + size; i++) {
                shipBoard[randomRow][i] = "H";
                board[randomRow][i] = "H";
              }
              result = true;
            }
          }
        } else if (randomLeft >= 0 && randomLeft <= 29) {
          console.log("Entra por izquierda");

          if (shipBoard[randomRow][randomColum - size] == 0) {
            left = true;
            for (i = randomColum; i < randomColum - size; i--) {
              if (shipBoard[randomRow][i] != 0) {
                left = false;
              }
            }
            if (left == true) {
              for (i = randomColum; i < randomColum - size; i--) {
                shipBoard[randomRow][i] = "H";
                board[randomRow][i] = "H";
              }
              result = true;
            }
          }
        } else if (randomDown >= 0 && randomDown <= 14) {
          console.log("Entra por abajo");
          if (shipBoard[randomRow + size][randomColum] == 0) {
            down = true;
            for (i = randomRow; i < randomRow + size; i++) {
              if (shipBoard[i][randomColum] != 0) {
                down = false;
              }
            }
            if (down == true) {
              for (i = randomRow; i < randomRow + size; i++) {
                shipBoard[i][randomColum] = "V";
                board[i][randomColum] = "V";
              }
              result = true;
            }
          }
        } else if (randomUp >= 0 && randomUp <= 14) {
          console.log("Entra por arriba");

          if (shipBoard[randomRow - size][randomColum] == 0) {
            up = true;
            for (i = randomRow; i < randomRow - size; i--) {
              if (shipBoard[i][randomColum] != 0) {
                up = false;
              }
            }
            if (up == true) {
              for (i = randomRow; i < randomRow - size; i--) {
                shipBoard[i][randomColum] = "V";
                board[i][randomColum] = "V";
              }
              result = true;
            }
          }
        }
      } else if (randomUbication == 1) {
        console.log("Entra por primero vertical");
        if (randomDown >= 0 && randomDown <= 14) {
          console.log("Entra por abajo");

          if (shipBoard[randomRow + size][randomColum] == 0) {
            down = true;
            for (i = randomRow; i < randomRow + size; i++) {
              if (shipBoard[i][randomColum] != 0) {
                down = false;
              }
            }
            if (down == true) {
              for (i = randomRow; i < randomRow + size; i++) {
                shipBoard[i][randomColum] = "V";
                board[i][randomColum] = "V";
              }
              result = true;
            }
          }
        } else if (randomUp >= 0 && randomUp <= 14) {
          console.log("Entra por arriba");

          if (shipBoard[randomRow - size][randomColum] == 0) {
            up = true;
            for (i = randomRow; i < randomRow - size; i--) {
              if (shipBoard[i][randomColum] != 0) {
                up = false;
              }
            }
            if (down == up) {
              for (i = randomRow; i < randomRow - size; i--) {
                shipBoard[i][randomColum] = "V";
                board[i][randomColum] = "V";
              }
              result = true;
            }
          }
        } else if (randomRigth >= 0 && randomRigth <= 29) {
          console.log("Entra por derecha");

          if (shipBoard[randomRow][randomColum + size] == 0) {
            rigth = true;
            for (i = randomColum; i < randomColum + size; i++) {
              if (shipBoard[randomRow][i] != 0) {
                rigth = false;
              }
            }
            if (rigth == true) {
              for (i = randomColum; i < randomColum + size; i++) {
                shipBoard[randomRow][i] = "H";
                board[randomRow][i] = "H";
              }
              result = true;
            }
          }
        } else if (randomLeft >= 0 && randomLeft <= 29) {
          console.log("Entra por izquierda");

          if (shipBoard[randomRow][randomColum - size] == 0) {
            left = true;
            for (i = randomColum; i < randomColum - size; i--) {
              if (shipBoard[randomRow][i] != 0) {
                left = false;
              }
            }
            if (left == true) {
              for (i = randomColum; i < randomColum - size; i--) {
                shipBoard[randomRow][i] = "H";
                board[randomRow][i] = "H";
              }
              result = true;
            }
          }
        }
      }
    }
  }
  printBoard(shipBoard);
  return board;
}

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

const socketController = (socket, io) => {
  console.log("Cliente conectado", socket.id);
  totalCustomers += 1;
  socket.on("disconnect", () => {
    console.log("Cliente desconectado", socket.id);
    deleteById(socket.id);
    console.log("El usuario se eliminó con éxito");
    console.log("La lista de usuarios es : ");
    console.log(customers);
    io.emit("send-customers", customers);
    hostCustomer = customers[0];
    io.emit("send-host", hostCustomer);
  });

  socket.on("customer-register", (payload, callback) => {
    const customer = {
      id: payload.id,
      name: payload.name,
    };
    console.log("El usuario se agregó con éxito");
    console.log(customer);
    customers.push(customer);
    console.log("La lista de usuarios es : ");
    console.log(customers);
    io.emit("send-customers", customers);
    hostCustomer = customers[0];
    io.emit("send-host", hostCustomer);
  });

  socket.on("enviar-mensaje", (payload, callback) => {
    console.log("Recibir el mensaje del client");
    console.log(payload);
    const id = 1214;
    callback(id);
    //Emitir mensaje a todos menos al cliente que lo lanza
    socket.broadcast.emit("enviar-mensaje", payload);
  });

  socket.on("send-atack", (payload) => {
    console.log("Recibir el mensaje de ataque del cliente");
    console.log(payload);
    let result = attack(payload.x, payload.y, io);
    //Emitir mensaje a todos menos al cliente que lo lanza
    socket.emit("result-attack", result);
    io.emit("send-ship-board", shipBoard);
    printBoard(shipBoard);
  });

  socket.on("start-game", (payload) => {
    if (payload == true) {
      if (totalCustomers <= 15) {
        let emptyBoard = [
          [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
          ],
          [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
          ],
          [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
          ],
          [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
          ],
          [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
          ],
          [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
          ],
          [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
          ],
          [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
          ],
          [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
          ],
          [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
          ],
          [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
          ],
          [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
          ],
          [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
          ],
          [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
          ],
          [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
          ],
        ];
        shipBoard = emptyBoard;
        customers.forEach((customer) => {
          const specificCustomer = io.sockets.sockets.get(customer.id);
          let emptyBoard = [
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
          ];
          let board = locateBoat(emptyBoard, 2);
          //board = locateBoat(board, 3);
          //board = locateBoat(board, 2);
          //board = locateBoat(board, 2);
          console.log(`Tablero del usuario ${customer.name}`);
          printBoard(board);
          const shipCustomer = {
            id: customer.id,
            name: customer.name,
            board: board,
          };
          shipsCustomers.push(shipCustomer);
          specificCustomer.emit("send-my-board", board);
          io.emit("send-ship-board", shipBoard);      
        });
      }
      if (totalCustomers > 15 && totalCustomers <= 30) {
        customers.forEach((customer) => {
          const specificCustomer = io.sockets.sockets.get(customer.id);
          let emptyBoard = [
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0,
            ],
          ];
          let board = locateBoat(emptyBoard, 3);
          board = locateBoat(board, 2);
          console.log("Tablero del usuario");
          printBoard(board);
          const shipCustomer = {
            id: customer.id,
            name: customer.name,
            board: board,
          };
          shipsCustomers.push(shipCustomer);
          specificCustomer.emit("send-my-board", board);
          io.emit("send-ship-board", shipBoard);
        });
      }
    }
  });
};

function deleteById(id) {
  const index = customers.findIndex((customer) => customer.id === id);
  if (index !== -1) {
    customers.splice(index, 1);
    shipsCustomers.splice(index,1);
  }
}

function attack(x, y, io) {
  let result = false;
  if (shipBoard[x][y] != "0") {
    result = true;
    shipBoard[x][y] = "0";
    shipsCustomers.forEach((element) => {
      element.board[x][y] = "0";
    });
    customers.forEach((element) => {
      validateLoser(element.id,io);
    });
    if (customers.length == 1) {
      io.emit("send-winner", customers[0]);
    }
  }
  return result;
}

function validateLoser(id,io) {
  console.log("Entra a validar perdedor")

  const index = shipsCustomers.findIndex((customer) => customer.id === id);
  if (index !== -1) {
    const array1 = Array(15).fill(Array(30).fill(0)); // Crear una matriz de 15x30 llena de ceros
    console.log(`El tablero del usario ${shipsCustomers[index].name} en comparación loser es --- `)
    printBoard(shipsCustomers[index].board);
    console.log(`El tablero vacio en comparación loser es --- `)
    printBoard(array1);
    console.log(`El resultado de la comparación es ${sonMatricesIguales(shipsCustomers[index].board,array1)}`)
    if (sonMatricesIguales(shipsCustomers[index].board,array1)) {
      console.log("Entra a loser")
      const specificCustomer = io.sockets.sockets.get(id);
      const payload = {
        loser : true
      }
      specificCustomer.emit("send-loser", payload);
      deleteById(id);
    }
  }
}

function sonMatricesIguales(matriz1, matriz2) {
  if (matriz1.length !== matriz2.length) {
    console.log('No son iguales en longitud')
    return false;
  }
  for (let i = 0; i < matriz1.length; i++) {
    if (matriz1[i].length != matriz2[i].length) {
      console.log('No son iguales en contenido 1  ')

      return false;
    }
    for (let j = 0; j < matriz1[i].length; j++) {
      if (matriz1[i][j] != matriz2[i][j]) {
        console.log('No son iguales en contenido 2 ')

        return false;
      }
    }
  }
  return true;
}



module.exports = {
  socketController,
};
