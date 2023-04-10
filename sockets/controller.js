let totalCustomers = 0;
const customers = [];
let hostCustomer ;
let customerTurn;
let customersTurn = [...customers];
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
            for (i = randomColum; i > randomLeft; i--) {
              if (shipBoard[randomRow][i] != 0) {
                left = false;
              }
            }
            if (left == true) {
              for (i = randomColum; i > randomLeft; i--) {
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
            for (i = randomColum; i >  randomColum - size; i--) {
              if (shipBoard[randomRow][i] != 0) {
                left = false;
              }
            }
            if (left == true) {
              for (i = randomColum; i > randomColum - size; i--) {
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

  socket.on("send-atack", (payload) => {
    if (payload.attack.x !== 'N') {
        let result = attack(payload.attack.y, payload.attack.x, io);
    //Emitir mensaje a todos menos al cliente que lo lanza
        dataAtack={
            user: payload.user,
            attack: payload.attack,
            result : result
        }
        io.emit("result-attack", dataAtack);
    }
    customersTurn.shift();
    if(customersTurn.length == 0 ){
      customersTurn = [...customers];
    }
    hostCustomer = customersTurn[0];
    io.emit("turn-atack", hostCustomer);
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
          // board = locateBoat(board, 2);


          console.log(`Tablero del usuario ${customer.name}`);
          printBoard(board);
          const shipCustomer = {
            id: customer.id,
            name: customer.name,
            board: board,
          };
          shipsCustomers.push(shipCustomer);
          specificCustomer.emit("send-my-board", board);
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
    customersTurn = [...customers];
    console.log(customersTurn);
    customerTurn = customersTurn[0];
    io.emit("turn-atack", customerTurn);
  });
};

function deleteById(id) {
  const index = customers.findIndex((customer) => customer.id === id);
  if (index !== -1) {
    customers.splice(index, 1);
    shipsCustomers.splice(index,1);
  }

  const indexTurn = customersTurn.findIndex((customer) => customer.id === id);
  if (indexTurn !== -1) {
    customersTurn.splice(index,1);
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
    customersTurn.shift();
    if (customers.length == 0) {
      customersTurn = [...customers];
    }
    customerTurn = customersTurn[0];
    io.emit("turn-atack", customerTurn);
    if(customers.length == 1){
      io.emit("send-winner", customers[0]);
    }

  }
  return result;
}

function validateLoser(id,io) {
  const index = shipsCustomers.findIndex((customer) => customer.id === id);
  if (index !== -1) {
    console.log("El tablero a validar es")
    console.log(shipsCustomers[index].board)
    console.log("El resultado de la validación es ")
    console.log(isZeros(shipsCustomers[index].board))
    if (isZeros(shipsCustomers[index].board)) {
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

function isZeros(arrayOfArrays) {
  let allZeros = true;
  arrayOfArrays.forEach(function(array) {
    if (!array.every(element => element == 0)) {
      allZeros = false;
    }
  });
  return allZeros;
}



module.exports = {
  socketController,
};
