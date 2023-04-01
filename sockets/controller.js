
let totalCustomers = 0;
const customers = [];
let hostCustomer = customers[0];
const socketController=(socket,io) =>{

    console.log('Cliente conectado', socket.id)
    totalCustomers +=1;

    socket.on('disconnect', ()=>{
        console.log('Cliente desconectado' , socket.id );
        deleteById(socket.id);
        console.log('El usuario se eliminó con éxito');
        console.log('La lista de usuarios es : ')
        console.log(customers);
        io.emit('send-customers',customers);
        hostCustomer = customers[0] 
        io.emit('send-host',hostCustomer);
    });

    socket.on('customer-register',(payload,callback)=>{
        const customer = {
            id : payload.id,
            name:  payload.name
        }
        console.log('El usuario se agregó con éxito');
        console.log(customer);
        customers.push(customer);
        console.log('La lista de usuarios es : ')
        console.log(customers);
        io.emit('send-customers',customers);
        hostCustomer = customers[0]
        io.emit('send-host',hostCustomer);
    });



    socket.on('enviar-mensaje',(payload, callback)=>{
        console.log('Recibir el mensaje del client')
        console.log(payload);
        const id = 1214
        callback(id)
        //Emitir mensaje a todos menos al cliente que lo lanza
        socket.broadcast.emit('enviar-mensaje',payload);
    });

    socket.on('start-game',(payload)=>{
        console.log('Recibir el mensaje de inicio')
        console.log(payload);
    });
}

function deleteById(id) {
    const index = customers.findIndex(customer => customer.id === id);
    if (index !== -1) {
        customers.splice(index, 1);
    }
}

module.exports = {
    socketController
}