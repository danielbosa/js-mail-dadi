// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const btnEmail = document.getElementById('btn-email');
let emailList = ['danielbosa95@gmail.com','prova@gmail.com','danielbosa952@gmail.com','info@daniel.it'];

btnEmail.addEventListener("click", function() {
    let userMail = document.getElementById('usermail').value;
    for (let i = 0; i < emailList.length; i++) {
        let guest = false;
        if (userMail === emailList[i]) {
            guest = true}
    }
    if (guest = true){
        console.log('bravo');
    }    
});




// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


