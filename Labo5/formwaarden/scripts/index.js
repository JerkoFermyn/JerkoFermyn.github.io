const setup = () => {
    document.getElementById("toonresultaat").addEventListener("click", resultaat)
}

const resultaat = () => {
    if (document.getElementById("roker").checked){
        console.log("is een roker");
    }else{
        console.log("is geen roker");
    }
    let moedertaal = document.getElementsByName("moedertaal");
    let i = 0;
    let gevonden = false;
    while(i < moedertaal.length && gevonden === false){
        if(moedertaal[i].checked === true){
            console.log("moedertaal is " + moedertaal[i].value)
            gevonden = true
        }
    }
    if(gevonden ===false){
        console.log("moedertaal is niet ingevuld");
    }

    let dropdown = document.getElementById("buurland");
    console.log("favoriete buurland is " + dropdown.value)

    let bestelling = document.getElementById("bestelling");
    let bestellingTekst ="bestelling bestaat uit";
    for (let i = 0; i < bestelling.length; i++){
        if (bestelling[i].selected===true){
            bestellingTekst = bestellingTekst + " " + bestelling[i].value
        }
    }
    console.log(bestellingTekst)


}

window.addEventListener("load", setup);