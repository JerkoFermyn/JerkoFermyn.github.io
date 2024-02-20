document.addEventListener("DOMContentLoaded", function() {

    function berekenSubstring() {
    let word = document.getElementById("inputWord").value;
    let startIndex = parseInt(document.getElementById("startIndex").value);
    let endIndex = parseInt(document.getElementById("endIndex").value);

    // Controleer of de ingevoerde waarden geldig zijn
    if (isNaN(startIndex) || isNaN(endIndex) || startIndex < 0 || endIndex > word.length || startIndex > endIndex) {
        alert("Ongeldige indexen.");
        return;
    }

    // Neem de substring van het woord
    let substring = word.substring(startIndex, endIndex + 1);

    // Toon de substring in het output tekstvak
    document.getElementById("output").value = substring;
}

// Voeg een event listener toe aan de knop

document.getElementById("btnShowSubstring").addEventListener("click", berekenSubstring);
});