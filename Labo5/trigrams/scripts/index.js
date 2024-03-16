const setup = () => {
    document.getElementById("trigrams").addEventListener("click", trigrams)}
const trigrams = () => {
    let Text = "onoorbaar";
    for(let i = 0; i < Text.length-2; i++){
        console.log(Text.substring(i, i+3))
    }
}
window.addEventListener("load", setup);