console.log('js ok');

// ^ MILESTONE 1 - Creo 5 numeri casuali da 1 a 50 e li inserisco in pagina, una volta generati faccio partire un timer di 30 sec.
// ^ MILESTONE 2 - Dopo 30 secondi il timer scompare e attraverso 5 prompt chiedo all'utente quali numeri ha visto
// ^ MILESTONE 3 - Dopo che sono state registrare le 5 risposte verifico quali numeri sono stati individuati

// ! =================
// ! RECUPERO ELEMENTi
// ! =================

const display = document.getElementById('display');

// ? =================
// ? FUNZIONI GENERALI
// ? =================

// Funzione per generare numeri casuali
 const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 // Funzione per generare 5 numeri casuali da 1 a 50
 const getRandomNumbers = () => {
    let casualNumbers = [];
    for(let i = 0; i < 5; i++) {
        casualNumbers.push(getRandomNumber(1, 50));
    }
    return casualNumbers;
 }

 // ~ ==================
 // ~ FUNZIONI TEMPORALI
 // ~ ==================

 let seconds = 30;
 display.innerText = seconds;

 const countDown = setInterval(() => {
    display.innerText = --seconds;
    if(seconds === 0) {
        display.innerText = '';
        alert('TEMPO SCADUTO');
        clearInterval(countDown);
    }
 }, 1000)





 






