// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const gameSection = document.getElementById('dice-game');

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
        Indirizzo email trovato!
        Buona fortuna :)
        `;
        gameSection.className = `text-center mt-4`;
        document.getElementById('db-input-group').className = `d-none`;
        btnEmail.className = `d-none`;
        userMail.className = `d-none`;
    } else if (guest == false) {
        tempHTML = `
        Indirizzo email NON trovato!!!
        Prova con prova@gmail.com
        `
    };  
    guestResult.innerHTML= tempHTML;
});


// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let agentNumber;
let userNumber;
let diceResult;
let tempHTML = '';
let tempHTMLUser = '';
let tempHTMLAgent = '';

const btnDice = document.getElementById('btn-dice');

let sfere = ['sfera-1','sfera-2','sfera-3','sfera-4','sfera-5','sfera-6'];

//inserimento sezione immagini sfere del drago
// div user
const userContainer = document.createElement('div');
userContainer.setAttribute('id','user-dice-result');
// div agent
const agentContainer = document.createElement('div');
agentContainer.setAttribute('id','agent-dice-result');

btnDice.addEventListener("click", function() {
    //estraggo numeri
    agentNumber = RndNumberGen(1, 6);
    userNumber = RndNumberGen(1, 6);

    let diceResult = document.getElementById('dice-result');
    
    //confronto numeri
    if(agentNumber > userNumber){
        tempHTML = `
            Hai perso :(
        `;
    } else if (agentNumber < userNumber) {
        tempHTML = `
            Hai vinto!!!
        `
    } else {
        tempHTML = `
            Pareggio
        `
    }

    //costruisco div con immagine dinamica
    tempHTMLUser = `
        <div>Tuo risultato</div>
        <img class="img-fluid" src="img/${sfere[userNumber - 1]}.png" alt="">
    `;
    tempHTMLAgent = `
        <div>Risultato del banco</div>
        <img class="img-fluid" src="img/sfera-${agentNumber}.png" alt="">
    `;
    diceResult.innerHTML = tempHTML;

    userContainer.innerHTML = tempHTMLUser;
    agentContainer.innerHTML = tempHTMLAgent;
    const container = document.querySelector('#dice-result-images');
    container.append(userContainer, agentContainer);

    window.scrollTo(0, 100000);

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