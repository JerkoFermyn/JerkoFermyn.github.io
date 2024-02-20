/*window.onload = function() {
    let pElement = document.getElementById("txtOutput");
    pElement.innerHTML = "Welkom!";
};*/

document.addEventListener("DOMContentLoaded", function() {
    // Wacht tot de DOM volledig is geladen voordat de code wordt uitgevoerd
    function voerUit() {
        let pElement = document.getElementById("txtOutput");
        pElement.innerHTML = "Welkom!";
    }

    document.getElementById("changeButton").addEventListener("click", voerUit);
});
