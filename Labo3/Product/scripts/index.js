const setup = () => {
    btnHerbereken.addEventListener("click", herbereken);
    function herbereken() {
        var rows = document.getElementsByTagName('tr');
        var totaal = 0;

        for (var i = 1; i < rows.length - 1; i++) { // starten bij 1 om de eerste rij met de hoofdingen over te slaan, en -1 om de rij met de totaal niet mee te nemen
            var cells = rows[i].getElementsByTagName('td');
            var prijs = parseFloat(cells[1].innerText);
            var aantal = parseInt(cells[2].getElementsByTagName('input')[0].value);
            var btw = parseFloat(cells[3].innerText) / 100;
            var subtotaal = prijs * aantal + prijs * aantal * btw;
            cells[4].innerText = subtotaal.toFixed(2); // afronden tot 2 decimalen
            totaal += subtotaal;
        }

        rows[5].getElementsByTagName('td')[1].innerText = totaal.toFixed(2); // vul het totaal in
    }
}

window.addEventListener("load", setup);