const setup = () => {
    document.getElementById("button").addEventListener("click", gemeente)
}

const gemeente = () => {
    const gemeentes = [];
    let stopString = "";
    while (stopString !== "stop"){
    let person = prompt("Please enter a city", "Geef een geemente in");
    if(person !== "stop"){
        gemeentes.push(person)
    }else{
        stopString = "stop";
    }
    }

    gemeentes.sort();

    console.log(gemeentes)
    for (let i = 0; i < gemeentes.length; i++){
        let dropdown = document.getElementById("gemeente");
        let option = document.createElement("option")
        option.text = gemeentes[i];
        dropdown.add(option);
    }
}

window.addEventListener("load", setup);