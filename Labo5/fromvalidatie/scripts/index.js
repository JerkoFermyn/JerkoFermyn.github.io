const setup = () => {
    document.getElementById("valideer").addEventListener("click", validateForm)
}
const validateForm= () => {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value.trim();
    let birthdate = document.getElementById("birthdate").value.trim();
    let email = document.getElementById("email").value.trim();
    let children = document.getElementById("children").value.trim();

    let isValid = true;

    // Voornaam validatie
    if (firstName.length > 30) {
        document.getElementById("firstName").style.borderColor = "red";
        document.getElementById("firstNameError").innerText = "Max. 30 karakters";
        isValid = false;
    } else {
        document.getElementById("firstName").style.borderColor = "";
        document.getElementById("firstNameError").innerText = "";
    }

    // Familienaam validatie
    if (lastName === "" || lastName.length > 50) {
        document.getElementById("lastName").style.borderColor = "red";
        document.getElementById("lastNameError").innerText = lastName === "" ? "Verplicht veld" : "Max. 50 karakters";
        isValid = false;
    } else {
        document.getElementById("lastName").style.borderColor = "";
        document.getElementById("lastNameError").innerText = "";
    }

    // Geboortedatum validatie
    let birthdatePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (birthdate === "" || !birthdate.match(birthdatePattern)) {
        document.getElementById("birthdate").style.borderColor = "red";
        document.getElementById("birthdateError").innerText = birthdate === "" ? "Verplicht veld" : "Formaat is niet jjjj-mm-dd";
        isValid = false;
    } else {
        document.getElementById("birthdate").style.borderColor = "";
        document.getElementById("birthdateError").innerText = "";
    }

    // Email validatie
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !email.match(emailPattern)) {
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("emailError").innerText = email === "" ? "Verplicht veld" : "Geen geldig e-mailadres";
        isValid = false;
    } else {
        document.getElementById("email").style.borderColor = "";
        document.getElementById("emailError").innerText = "";
    }

    // Aantal kinderen validatie
    if (children === "" || parseInt(children) < 0 || parseInt(children) >= 99) {
        document.getElementById("children").style.borderColor = "red";
        document.getElementById("childrenError").innerText = parseInt(children) < 0  ? "Is geen positief getal" : "Is te vruchtbaar";
        isValid = false;
    } else {
        document.getElementById("children").style.borderColor = "";
        document.getElementById("childrenError").innerText = "";
    }

    if (isValid) {
        alert("Proficiat!");
    }
}
window.addEventListener("load", setup);