/*

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri

Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/


document.querySelector(".btnSubmit").addEventListener("click", function() { // Al click del bottone

    const containerWinner = document.querySelector(".container_result .winner"); // Seleziono nel dom il container winner dentro al container
    const containerNumber = document.querySelector(".container_result .number"); // Seleziono nel dom il container number dentro al container
    const select = document.querySelector(".select") // Seleziono nel dom l'input select
    const inputGenerator = parseInt(document.querySelector(".inputNumber").value); // Seleziono nel dom l'input number, con il parse int rendo il numero un intero

    let valueSelect = select.options[select.selectedIndex].text; // Prende gli elementi dentro la select

    let numberGenerator = Math.floor(Math.random() * 5) + 1; // Genero un numero da 1 a 5

    const somma = inputGenerator + numberGenerator; // Somma i due numeri

    // Stabiliamo se la somma è pari o dispari
    function isPari(num) {
        return num % 2 === 0;
    }

    const sommaPari = isPari(somma);

    // Dichiaro il vincitore
    valueSelect = select.options[select.selectedIndex].text;
    if ((valueSelect === "Pari" && sommaPari) || (valueSelect === "Dispari" && !sommaPari)) {
        containerWinner.innerHTML = `
            <h1>Hai vinto!</h1>
        `;
    } else {
        containerWinner.innerHTML = `
            <h1>Hai perso!</h1>
        `;
    }

    containerNumber.innerHTML = `
        <h2>Il player ha scelto: ${inputGenerator}, ${valueSelect}</h2>
        <h2>Il computer ha scelto: ${numberGenerator}</h2>
    `;

})