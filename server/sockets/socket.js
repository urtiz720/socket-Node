const { io } = require('../server');

//Cuando un usuario se conecta al server
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido..'
    })

    //Cliente se desconecta de la aplicacion
    client.on('disconnect', () => {
        console.log('Usuario desconcectado');
    });

    //Escuchar
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);
        client.broadcast.emit('enviarMensaje', data);

        //console.log(mensaje);
        // ``if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salio bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Algo va mal'
        //     });
        // }``
    })
});