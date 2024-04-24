

const storeSliderValues = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    localStorage.setItem("rood", red);
    localStorage.setItem("groen", green);
    localStorage.setItem("blauw", blue);
};

const restoreSliderValues = () => {
    document.getElementById("sldRed").value = localStorage.getItem("rood");
    document.getElementById("sldGreen").value = localStorage.getItem("groen");
    document.getElementById("sldBlue").value = localStorage.getItem("blauw");

};

const storeSwatches = () => {
    let elements = document.getElementsByClassName("swatch");
    let storeSwatches = [];
    for(let i = 0; i < elements.length; i++){
        Swatch = {
            rood: elements[i].getAttribute("data-red"),
            groen: elements[i].getAttribute("data-green"),
            blauw: elements[i].getAttribute("data-blue")
        };
        storeSwatches.push(Swatch);
    }
    let JSONStoreSwatches = JSON.stringify(storeSwatches);
    console.log(storeSwatches);
    localStorage.setItem("ArraySwatches",JSONStoreSwatches);
};

const restoreSwatches = () => {
    let array = JSON.parse(localStorage.getItem("ArraySwatches"));
    console.log(array)
    for(let i = 1; i < array.length; i++){
        let rood = array[i].rood;
            let groen = array[i].groen;
            let blauw = array[i].blauw;
        addSwatchComponent(rood,groen,blauw);
    }
};
