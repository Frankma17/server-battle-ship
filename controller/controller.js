/** Sockets controller ,
 * This class implements all methods of listen and emit cliente messages
 */
//Connected customers counter
const totalCustomers = 0;
//Connected customers list
const customers = [];
//Host of the game
let hostCustomer;
//Customer turn for attack
let customerTurn;
//Allow more connections or not
const acceptConnections = true;
//Order to play list
const customersTurn = [...customers];
//Create a blank board
const shipBoard = [];
//Ships customers list
const shipsCustomers = [];
/**
 * Function for alocated the ships inthin the general board and the customer board                                               nbbn bvvvvvv
 * @param {Board to alocate ships} board
 * @param {Ship size} size
 * @returns Board with the ships
 */
function locateBoat(board, size) {
  //Verification alocation variables
  let result = false;
  let rigth = false;
  let left = false;
  let up = false;
  let down = false;
  //Rrepeat until ship is located
  while (!result) {
    //Generate random row and column to alocated ship
    let randomRow = Math.floor(Math.random() * 15);
    let randomColum = Math.floor(Math.random() * 30);
    //Generate randow number to init the ubication - First vertical(1) or horizontal(0)
    let randomUbication = Math.round(Math.random());
    //Check avaliabily of random position
    if (shipBoard[randomRow][randomColum] == 0) {
      //Positions with the random position and the size for all directions
      let randomDown = randomRow + size;
      let randomUp = randomRow - size;
      let randomRigth = randomColum + size;
      let randomLeft = randomColum - size;
      //First horizontal
      if (randomUbication == 0) {
        //Verify positions within the board
        if (randomRigth >= 0 && randomRigth <= 29) {
          //Verify final position for ship alocated
          if (shipBoard[randomRow][randomColum + size] == 0) {
            rigth = true;
            //Check all positions between the start coordinate and the end coordinate
            for (i = randomColum; i < randomColum + size; i++) {
              if (shipBoard[randomRow][i] != 0) {
                rigth = false;
              }
            }
            //Alocated the vertical or horizontal ship
            if (rigth == true) {
              for (i = randomColum; i < randomColum + size; i++) {
                shipBoard[randomRow][i] = "H";
                board[randomRow][i] = "H";
              }
              result = true;
            }
          }
        } //Verify positions within the board
        else if (randomLeft >= 0 && randomLeft <= 29) {
          //Verify final position for ship alocated
          if (shipBoard[randomRow][randomColum - size] == 0) {
            left = true;
            //Check all positions between the start coordinate and the end coordinate
            for (i = randomColum; i > randomLeft; i--) {
              if (shipBoard[randomRow][i] != 0) {
                left = false;
              }
            }
            //Alocated the vertical or horizontal ship
            if (left == true) {
              for (i = randomColum; i > randomLeft; i--) {
                shipBoard[randomRow][i] = "H";
                board[randomRow][i] = "H";
              }
              result = true;
            }
          }
        } //Verify positions within the board
        else if (randomDown >= 0 && randomDown <= 14) {
          //Verify final position for ship alocated
          if (shipBoard[randomRow + size][randomColum] == 0) {
            down = true;
            //Check all positions between the start coordinate and the end coordinate
            for (i = randomRow; i < randomRow + size; i++) {
              if (shipBoard[i][randomColum] != 0) {
                down = false;
              }
            }
            //Alocated the vertical or horizontal ship
            if (down == true) {
              for (i = randomRow; i < randomRow + size; i++) {
                shipBoard[i][randomColum] = "V";
                board[i][randomColum] = "V";
              }
              result = true;
            }
          }
        } //Verify positions within the board
        else if (randomUp >= 0 && randomUp <= 14) {
          //Verify final position for ship alocated
          if (shipBoard[randomRow - size][randomColum] == 0) {
            up = true;
            //Check all positions between the start coordinate and the end coordinate
            for (i = randomRow; i < randomRow - size; i--) {
              if (shipBoard[i][randomColum] != 0) {
                up = false;
              }
            }
            //Alocated the vertical or horizontal ship
            if (up == true) {
              for (i = randomRow; i < randomRow - size; i--) {
                shipBoard[i][randomColum] = "V";
                board[i][randomColum] = "V";
              }
              result = true;
            }
          }
        }
      }
      //First vertical
      else if (randomUbication == 1) {
        //Verify positions within the board
        if (randomDown >= 0 && randomDown <= 14) {
          //Verify final position for ship alocated
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
        } //Verify positions within the board
        else if (randomUp >= 0 && randomUp <= 14) {
          //Verify final position for ship alocated
          if (shipBoard[randomRow - size][randomColum] == 0) {
            up = true;
            //Check all positions between the start coordinate and the end coordinate
            for (i = randomRow; i < randomRow - size; i--) {
              if (shipBoard[i][randomColum] != 0) {
                up = false;
              }
            }
            //Alocated the vertical or horizontal ship
            if (down == up) {
              for (i = randomRow; i < randomRow - size; i--) {
                shipBoard[i][randomColum] = "V";
                board[i][randomColum] = "V";
              }
              result = true;
            }
          }
        } //Verify positions within the board
        else if (randomRigth >= 0 && randomRigth <= 29) {
          //Verify final position for ship alocated
          if (shipBoard[randomRow][randomColum + size] == 0) {
            rigth = true;
            //Check all positions between the start coordinate and the end coordinate
            for (i = randomColum; i < randomColum + size; i++) {
              if (shipBoard[randomRow][i] != 0) {
                rigth = false;
              }
            }
            //Alocated the vertical or horizontal ship
            if (rigth == true) {
              for (i = randomColum; i < randomColum + size; i++) {
                shipBoard[randomRow][i] = "H";
                board[randomRow][i] = "H";
              }
              result = true;
            }
          }
        } //Verify positions within the board
        else if (randomLeft >= 0 && randomLeft <= 29) {
          console.log("Entra por izquierda");
          if (shipBoard[randomRow][randomColum - size] == 0) {
            left = true;
            //Check all positions between the start coordinate and the end coordinate
            for (i = randomColum; i > randomColum - size; i--) {
              if (shipBoard[randomRow][i] != 0) {
                left = false;
              }
            }
            //Alocated the vertical or horizontal ship
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
/**
 * Function for print a ships board
 * @param {*} board
 */
function printBoard(board) {
  let concatArray = [];
  board.forEach((element) => {
    concatArray = concatArray.concat(element);
  });
  let output = "";
  for (let i = 0; i < concatArray.length; i++) {
    output += concatArray[i];
    if ((i + 1) % 30 === 0) {
      console.log(output);
      output = "";
    } else {
      output += " ";
    }
  }
  if (output !== "") {
    console.log(output);
  }
}
/**
 * Function for delete a customer of all aplication lists
 * @param {Id of the customer to be delete } id
 */
function deleteById(id) {
  //Ask index to delete of customers and shipsCustomers list
  const index = customers.findIndex((customer) => customer.id === id);
  if (index !== -1) {
    customers.splice(index, 1);
    shipsCustomers.splice(index, 1);
  }
  //Ask index to delete of customersTurn
  const indexTurn = customersTurn.findIndex((customer) => customer.id === id);
  if (indexTurn !== -1) {
    customersTurn.splice(index, 1);
  }
}
/**
 * Function for register a attack
 * @param {Horizontal position of the ship board atack} x
 * @param {Vertical position of the ship board atack} y
 * @param {General socket for send message to all customers} io
 * @returns Result of attack - True of false if successful or un successful
 */
function attack(x, y, io) {
  let result = false;
  //Verify the shop in the board
  if (shipBoard[x][y] != "0") {
    result = true;
    shipBoard[x][y] = "0";
    //Change the data in the position
    shipsCustomers.forEach((element) => {
      element.board[x][y] = "0";
    });
    //Validate if the attack generate a loser
    customers.forEach((element) => {
      validateLoser(element.id, io);
    });
    //Validate if the attack generate a winner
    if (customers.length == 1) {
      acceptConnections = true;
      //Send message of the winner to all customers
      io.emit("send-winner", customers[0]);
    }
  }
  return result;
}
/**
 * Function for validate if exist a loser after an attack
 * @param {Customer id to validate} id
 * @param {General socket for send message to all customers} io
 */
function validateLoser(id, io) {
  //Ask the index of the customer to validate
  const index = shipsCustomers.findIndex((customer) => customer.id === id);
  if (index !== -1) {
    //Check if the customer board is empty
    if (isZeros(shipsCustomers[index].board)) {
      const specificCustomer = io.sockets.sockets.get(id);
      const payload = {
        loser: true,
      };
      //Send message of loser to the customer loser
      specificCustomer.emit("send-loser", payload);
      //Delete the customer loser of the game
      deleteById(id);
    }
  }
}
/**
 * Function for verify if all data of the matrix are zeros
 * @param {Matrix to validate} arrayOfArrays
 * @returns True or false is the matrix is empty or not
 */
function isZeros(arrayOfArrays) {
  let allZeros = true;
  //Check if all data of the matrix are zeros
  arrayOfArrays.forEach(function (array) {
    if (!array.every((element) => element == 0)) {
      allZeros = false;
    }
  });
  return allZeros;
}
/**
 * Principal controller of the sockets in the application
 * @param {Socket of customer} socket
 * @param {General socket for send message to all customers} io
 */
const socketController = (socket, io) => {
  //Accept new connection on the server
  if (acceptConnections) {
    //Accept the customer connection and add to the list
    console.log("Cliente conectado", socket.id);
    totalCustomers += 1;
    //Socket listening to the disconnect event
    socket.on("disconnect", () => {
      //Shoe the customer disconnection
      console.log("Cliente desconectado", socket.id);
      //Delete customer
      deleteById(socket.id);
      //Emit to all customers the list of customers
      io.emit("send-customers", customers);
      //Get the host customer
      hostCustomer = customers[0];
      //Emit to all customers the host of the game
      io.emit("send-host", hostCustomer);
    });
    //Socket listening to the customer-register event
    socket.on("customer-register", (payload, callback) => {
      //Get the customer data to register
      const customer = {
        id: payload.id,
        name: payload.name,
      };
      //Add customer to customersList
      customers.push(customer);
      //Emit to all customers the list of customers
      io.emit("send-customers", customers);
      //Get the host customer
      hostCustomer = customers[0];
      //Emit to all customers the host of the game
      io.emit("send-host", hostCustomer);
    });
    //Socket listening to the send-atack event
    socket.on("send-atack", (payload) => {
      //Check if the attack is valid
      if (payload.attack.x !== "N") {
        //Get the result of the attack
        let result = attack(payload.attack.y, payload.attack.x, io);
        //Create the object to send result
        dataAtack = {
          user: payload.user,
          attack: payload.attack,
          result: result,
        };
        //Emit to all customers the result of attack
        io.emit("result-attack", dataAtack);
      }
      //Delete the firstCustomer of the customersTurn
      customersTurn.shift();
      //Check if all customers atacked and reload the list
      if (customersTurn.length == 0) {
        customersTurn = [...customers];
      }
      //Get the new turn of customers
      customerTurn = customersTurn[0];
      //Emit to all customers the turn of attack
      io.emit("turn-atack", customerTurn);
    });
    //Socket listening to the start-game event
    socket.on("start-game", (payload) => {
      //Change the acceptConnections
      acceptConnections = false;
      //Verify true option to start game
      if (payload == true) {
        //Verify total customers of the game
        if (totalCustomers <= 15) {
          //Create a empty board
          const emptyBoard = [];
          for (let i = 0; i < 15; i++) {
            let row = new Array(30).fill(0);
            shipBoard.push(row);
          }
          //Initializer the general board in zeros
          shipBoard = emptyBoard;
          //Generate ships for each customer
          customers.forEach((customer) => {
            //Get the id of customer
            const specificCustomer = io.sockets.sockets.get(customer.id);
            //Inializer the specific board in zeros
            const emptyBoard = [];
            for (let i = 0; i < 15; i++) {
              let row = new Array(30).fill(0);
              shipBoard.push(row);
            }
            //Alocated the ships in the customer board and general board
            let board = locateBoat(emptyBoard, 2);
            board = locateBoat(board, 2);
            board = locateBoat(board, 3);
            board = locateBoat(board, 3);
            //Create de shipCustomer object
            const shipCustomer = {
              id: customer.id,
              name: customer.name,
              board: board,
            };
            //Add the object of customer ships
            shipsCustomers.push(shipCustomer);
            //Send to specific customer the ships board
            specificCustomer.emit("send-my-board", board);
          });
        }
        //Verify total customers of the game
        if (totalCustomers > 15 && totalCustomers <= 30) {
          //Create a empty board
          const emptyBoard = [];
          for (let i = 0; i < 15; i++) {
            let row = new Array(30).fill(0);
            shipBoard.push(row);
          }
          //Initializer the general board in zeros
          shipBoard = emptyBoard;
          //Generate ships for each customer
          customers.forEach((customer) => {
            //Get the id of customer
            const specificCustomer = io.sockets.sockets.get(customer.id);
            //Inializer the specific board in zeros
            const emptyBoard = [];
            for (let i = 0; i < 15; i++) {
              let row = new Array(30).fill(0);
              shipBoard.push(row);
            }
            //Alocated the ships in the customer board and general board
            let board = locateBoat(emptyBoard, 3);
            board = locateBoat(board, 2);
            //Create de shipCustomer object
            const shipCustomer = {
              id: customer.id,
              name: customer.name,
              board: board,
            };
            //Add the object of customer ships
            shipsCustomers.push(shipCustomer);
            //Send to specific customer the ships board
            specificCustomer.emit("send-my-board", board);
          });
        }
      }
      //Generate the turns of customers
      customersTurn = [...customers];
      //Get the first turn
      customerTurn = customersTurn[0];
      //Emit to all customers the turn of attack
      io.emit("turn-atack", customerTurn);
    });
  }
  //Deny a new conenction on the server
  else {
    //Create a message to send
    const message = {
      msg: "Ops ! , Lo siento pero la partida ya ha iniciado . Tal vez tengas mejor suerte la próxima vez",
    };
    //Send socket message of no access to the game
    socket.emit("no-access", message);
    //Disconnect client of the server
    socket.disconnect();
  }
};
//Export socketController to use on the server
module.exports = {
  socketController,
};
