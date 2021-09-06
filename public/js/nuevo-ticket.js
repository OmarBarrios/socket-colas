
// Referencias html
const lblNuevoTicket = document.querySelector('#lblNuevoTicket');
const btnCrear = document.querySelector('button');


const socket = io();


socket.on('ultimo-ticket', (ultimo) => {
    lblNuevoTicket.innerText = 'Ticket' + ultimo;
    console.log(ultimo);
})

socket.on('connect', () => {
    // console.log('Conectado');

    btnCrear.disabled = false;

});

socket.on('disconnect', () => {
    // console.log('Desconectado del servidor');

    btnCrear.disabled = true;
});





btnCrear.addEventListener( 'click', () => {

    socket.emit( 'siguiente-ticket', null, ( ticket ) => {
       lblNuevoTicket.innerText = ticket;
    });

});