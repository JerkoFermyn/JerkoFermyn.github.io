const setup = () => {
    document.getElementById("substring").addEventListener("click", substringMetSpaties)
}
const substringMetSpaties = (inputText) => {
    let input = document.getElementById('inputText').value.replace(/\s/g, '');
    let characters = input.split('');
    let spacedCharacters = characters.join(' ');

    console.log(spacedCharacters);
}
window.addEventListener("load", setup);