const setup = () => {
    document.getElementById("substring").addEventListener("click", maakStringMetSpaties)
}
const maakStringMetSpaties = (inputText, inputwoord) => {
    let woord   = document.getElementById('inputwoord').value.trim();
    let tekst = document.getElementById('inputText').value;
    if (tekst.indexOf(woord) !== -1) {
        console.log("De tekst bevat het woord '" + woord + "'.");
    } else {
        console.log("De tekst bevat het woord '" + woord + "' niet.");
    }
}
window.addEventListener("load", setup);