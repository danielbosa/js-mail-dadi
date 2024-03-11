// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const btnEmail = document.getElementById('btn-email');
let guestResult = document.getElementById('guest-result');

let emailList = ['danielbosa95@gmail.com','prova@gmail.com','danielbosa952@gmail.com','info@daniel.it'];

btnEmail.addEventListener("click", function() {
    let userMail = document.getElementById('usermail').value;
    let tempHTML = '';
    let guest = false;
    for (let i = 0; i < emailList.length; i++) {
        if (userMail.toLowerCase() === emailList[i].toLowerCase()) {
            guest = true;
        }
    };
    if (guest == true){
        tempHTML = `
        Indirizzo email trovato! :)
        `
    } else if (guest == false) {
        tempHTML = `
        Indirizzo email NON trovato!!!
        `
    };  
    guestResult.innerHTML= tempHTML;
});




// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


