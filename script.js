console.log('js ok');

// ^ MILESTONE 1 - Creo 5 numeri casuali da 1 a 50 e li inserisco in pagina, una volta generati faccio partire un timer di 30 sec.
// ^ MILESTONE 2 - Dopo 30 secondi il timer scompare e attraverso 5 prompt chiedo all'utente quali numeri ha visto
// ^ MILESTONE 3 - Dopo che sono state registrare le 5 risposte verifico quali numeri sono stati individuati

// ! =================
// ! RECUPERO ELEMENTI
// ! =================

const display = document.getElementById('display');
const numbers = document.getElementById('number');
const title = document.querySelector('.mt-3');

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
        console.log(casualNumbers);
    }
    return casualNumbers;
 }
 
 numbers.innerText = getRandomNumbers();
 
 // ~ ========================================       
 // ~ FUNZIONI TEMPORALI & PROGRAMMA EFFETTIVO
 // ~ ========================================

 
// Creo un timer di 30 e modifico le scritte in pagina
 let seconds = 30;
 display.innerText = seconds;
 
 const countDown = setInterval(() => {
     display.innerText = + --seconds;
     if(seconds === 0) {
         title.innerText = 'TEMPO SCADUTO!!';
         display.innerText = '';
         numbers.innerText = '';
         clearInterval(countDown);

         // Chiedo all'utente quali numeri ha visualizzato
         let userAnswers = [];
         for (let i = 0; i < 5; i++) {
         let numberInsert = prompt("Inserisci un numero che hai visto:");
         userAnswers.push(parseInt(numberInsert));
         }

        // Verifica se i numeri inseriti dall'utente sono gli stessi generati dalla funzione
        const correctAnswers = [];
        for (let guess of userAnswers) {
            if (userAnswers.includes(guess)) correctAnswers.push(guess);
        }

        // Stampo il risultato
        if(correctAnswers.length === 5){
            console.log('Hai indovinato tutti i numeri')
        } else {
            console.log(`Hai indovinato ${correctAnswers.length} numeri! (${correctAnswers})`);
        }

        }
    }, 1000)












 






