const setup = () => {
    let jsonString = '{"voornaam":"Jan","familienaam":"Janssens","geboorteDatum":"1993-12-31T00:00:00.000Z","adres":{"straat":"Kerkstraat 13","postcode":"8500","gemeente":"Kortrijk"}}';
    let student1 = JSON.parse(jsonString);


    console.log("voornaam: " + student1["voornaam"]
        + "\nfamilienaam: " + student1["familienaam"]
        + "\ngeboorteDatum: " + student1["geboorteDatum"].toString()
        + "\nstraat: " + student1.adres["straat"]
        + "\npostcode: " + student1.adres["postcode"]
        + "\ngemeente: " + student1.adres["gemeente"]
    );
}

window.addEventListener("load", setup);