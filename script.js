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

let agentNumber;
let userNumber;
let diceResult

const btnDice = document.getElementById('btn-dice');

btnDice.addEventListener("click", function() {
    agentNumber = RndNumberGen(1, 6);
    userNumber = RndNumberGen(1, 6);

    let tempHTML = '';
    let diceResult = document.getElementById('dice-result');

    if(agentNumber > userNumber){
        tempHTML = `
            Hai perso :(
        `
    } else if (agentNumber < userNumber) {
        tempHTML = `
            Hai vinto!!!
        `
    } else {
        tempHTML = `
            Pareggio
        `
    }

    diceResult.innerHTML = tempHTML;
    console.log(tempHTML);
});



/*
btnDice.addEventListener("click", function() {
    agentNumber = RndNumberGen(1, 6);
    userNumber = RndNumberGen(1, 6);

    let tempHTML = '';
    const diceResult = document.createElement('div');
    diceResult.setAttribute('id', 'dice-result');
    diceResult.className = 'my-3';

    if(agentNumber > userNumber){
        tempHTML = `
            Hai perso :(
        `
    } else if (agentNumber < userNumber) {
        tempHTML = `
            Hai vinto!!!
        `
    } else {
        tempHTML = `
            Pareggio
        `
    }

    diceResult.innerHTML = tempHTML;
    const container = document.querySelector('#dice-game');
    container.append(diceResult);
});
*/

/*
btnDice.addEventListener("click", function() {
    agentNumber = RndNumberGen(1, 6);
    userNumber = RndNumberGen(1, 6);
    let tempHTML = '';
    
    if(agentNumber > userNumber){
        tempHTML = `
        <div id="dice-result" class="my-3">
            Hai perso
        </div>
        `
    } else if (agentNumber < userNumber) {
        tempHTML = `
        <div id="dice-result" class="my-3">
            Hai vinto!!!
        </div>
        `
    } else {
        tempHTML = `
        <div id="dice-result" class="my-3">
            Pareggio
        </div>
        `
    }

    const container = document.querySelector('#dice-game');
    container.insertAdjacentHTML("beforeend", tempHTML);
});
*/