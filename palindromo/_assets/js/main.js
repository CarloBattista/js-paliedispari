/*

Chiedere all’utente di inserire una parola

Creare una funzione per capire se la parola inserita è palindroma

*/

document.querySelector(".btnSubmit").addEventListener("click", function () { // Al click del bottone

    const container = document.querySelector(".container_result"); // Seleziono nel dom il container

    const inputText = document.querySelector(".inputText").value; // Seleziono nel dom l'input text
    console.log(inputText)

    const inputLowerCase = inputText.toLowerCase().replace(/ /g, ""); // Converto la parola in minuscolo e rimuovo gli spazi
    console.log(inputLowerCase)

    // Verifico se la parola invertita è uguale alla parola originale
    let isPalindroma = true;
    console.log(isPalindroma)

})