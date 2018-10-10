var socket = io();

//Escuchar informacion
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//Cuando perdemos conexion con el servidor
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Luis',
    mensaje: 'Hola'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});