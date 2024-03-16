const setup = () => {
    document.getElementById("trigrams").addEventListener("click", deEnHet)
}
const deEnHet = () => {
    let text =  "Gisteren zat de jongen op de stoep en at de helft van de appel";
    const myText =  text.split(" ");
    let leegeString = "";
    for(let i = 0; i < myText.length; i++){
        if(myText[i] === "de"){
            leegeString = leegeString + "het ";
        }
        else{
            if(myText[i] === "De"){
                leegeString = leegeString + "Het ";
            }
            else{
                leegeString = leegeString + myText[i] + " ";
            }
        }
    }
    console.log(leegeString)
}
window.addEventListener("load", setup);