let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht

const toonGeselecteerdePersoon = () => {
    const voornaam  = document.getElementById("txtVoornaam");
    const familienaam  = document.getElementById("txtFamilienaam");
    const geboorteDatum = document.getElementById("txtGeboorteDatum");
    const email = document.getElementById("txtEmail");
    const kinderen = document.getElementById("txtAantalKinderen");

    let selectedIndex = document.getElementById("lstPersonen").value;
    let geselecteerdePersoon = personen[selectedIndex];
    voornaam.value = geselecteerdePersoon.pVoornaam;
    familienaam.value = geselecteerdePersoon.pFamielienaam;
    geboorteDatum.value = geselecteerdePersoon.pGeboortedatum;
    email.value = geselecteerdePersoon.pEmail;
    kinderen.value = geselecteerdePersoon.pKinderen;
}
const bewaarBewerktePersoon = () => {
    if(valideer()){
        console.log("Klik op de knop bewaar");

        const voornaam  = document.getElementById("txtVoornaam");
        const familienaam  = document.getElementById("txtFamilienaam");
        const geboorteDatum = document.getElementById("txtGeboorteDatum");
        const email = document.getElementById("txtEmail");
        const kinderen = document.getElementById("txtAantalKinderen");

        // valideer alle input data en controleer of er geen errors meer zijn

        const select= document.getElementById("lstPersonen");

        if(select.selectedIndex !==-1){
            let selectIndex = select.selectedIndex;

            console.log(selectIndex);
            console.log(personen[selectIndex].pVoornaam);
            personen[selectIndex].pVoornaam = document.getElementById("txtVoornaam").value;
            personen[selectIndex].pFamielienaam = document.getElementById("txtFamilienaam").value;
            personen[selectIndex].pGeboortedatum = document.getElementById("txtGeboorteDatum").value;
            personen[selectIndex].pEmail = document.getElementById("txtEmail").value;
            personen[selectIndex].pKinderen = document.getElementById("txtAantalKinderen").value;
            console.log(personen[selectIndex].pVoornaam);

            select.options[selectIndex].text = document.getElementById("txtVoornaam").value + " " + document.getElementById("txtFamilienaam").value;
        }else{
            let pVoornaam = voornaam.value;
            let pFamielienaam = familienaam.value;
            let pGeboortedatum = geboorteDatum.value;
            let pEmail = email.value;
            let pKinderen = kinderen.value;
            let nieuwePersoon = {pVoornaam: pVoornaam, pFamielienaam: pFamielienaam, pGeboortedatum: pGeboortedatum, pEmail: pEmail, pKinderen: pKinderen};
            personen.push(nieuwePersoon);

            let option = document.createElement("option");
            option.text = pVoornaam + " " + pFamielienaam;
            option.setAttribute("value", personen.length - 1 + "");
            select.appendChild(option);
        }
    }

};
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    const voornaam  = document.getElementById("txtVoornaam");
    const familienaam  = document.getElementById("txtFamilienaam");
    const geboorteDatum = document.getElementById("txtGeboorteDatum");
    const email = document.getElementById("txtEmail");
    const kinderen = document.getElementById("txtAantalKinderen");

    voornaam.value = "";
    familienaam.value = "";
    geboorteDatum.value = "";
    email.value = "";
    kinderen.value = "";

    const selectElement = document.getElementById("lstPersonen");
    selectElement.selectedIndex = -1;

};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let keuzelijst = document.getElementById("lstPersonen");
    keuzelijst.addEventListener('change',toonGeselecteerdePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);