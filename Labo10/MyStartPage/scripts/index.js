let aantal = 3;
let commands = [];

const setup = () => {
	document.getElementById("search").addEventListener("click",zoeken);

    let array = JSON.parse(localStorage.getItem("ArrayCommands"));
    console.log(array)
    if(array != null){
        for(let i = 0; i < array.length; i++){
            const newColHistory = document.createElement('div');
            newColHistory.classList.add('col-md-4');
            const newCardHistroy = document.createElement('div');
            newCardHistroy.classList.add('card');
            const newCardBodyHistory = document.createElement('div');
            newCardBodyHistory.classList.add('card-body');
            const newCardTitleHistory = document.createElement('h5');
            newCardTitleHistory.classList.add('card-title');
            const newCardTextHistory = document.createElement('p');
            newCardTextHistory.classList.add('card-text');
            const newCardLinkHistory = document.createElement('a');
            newCardLinkHistory.classList.add('btn');
            newCardLinkHistory.setAttribute('target', '_blank');

            if (aantal === 3){
                aantal = 1;

                const container = document.getElementById("container");
                const newRowHistroy = document.createElement('div');
                newRowHistroy.classList.add('row');
                newRowHistroy.classList.add('whitespaceBetweenRows');

                container.appendChild(newRowHistroy);
                newRowHistroy.appendChild(newColHistory);
                newColHistory.appendChild(newCardHistroy);
                newCardHistroy.appendChild(newCardBodyHistory);
                newCardBodyHistory.appendChild(newCardTitleHistory);
                newCardBodyHistory.appendChild(newCardTextHistory);
                newCardBodyHistory.appendChild(newCardLinkHistory);
            }else{
                aantal ++;

                let rowsHistroy = document.getElementsByClassName('row');
                let lastRowsHistroy = rowsHistroy.item(rowsHistroy.length-1);

                lastRowsHistroy.appendChild(newColHistory);
                newColHistory.appendChild(newCardHistroy);
                newCardHistroy.appendChild(newCardBodyHistory);
                newCardBodyHistory.appendChild(newCardTitleHistory);
                newCardBodyHistory.appendChild(newCardTextHistory);
                newCardBodyHistory.appendChild(newCardLinkHistory);
            }
            newCardTitleHistory.innerText = array[i].title;
            newCardTextHistory.innerText = array[i].text;
            newCardLinkHistory.innerText = 'Go!'
            newCardLinkHistory.setAttribute('href', array[i].href);

            switch (array[i].title) {
                case "Google":
                    newCardHistroy.classList.add('custom-cardGoogle')
                    newCardLinkHistory.classList.add('buttonOrange');
                    break
                case "Youtube":
                    newCardHistroy.classList.add('custom-cardYoutube');
                    newCardLinkHistory.classList.add('buttonBlack');
                    break
                case "Instagram":
                    newCardHistroy.classList.add('custom-cardInstagram');
                    newCardLinkHistory.classList.add('buttonOrange');
                    break
                case "Twitter":
                    newCardHistroy.classList.add('custom-cardTwitter');
                    newCardLinkHistory.classList.add('buttonBlack');
                    break
            }
        }
    }
}

const valideer = () =>{
    const zoekopdracht = document.getElementById('zoekopdracht').value.trim().toLowerCase();

    if (zoekopdracht.substring(0,1)){
        const secondChar = zoekopdracht.substring(1,2); // Het 2e teken
        if (secondChar === 'g' || secondChar === 'y' || secondChar === 'i' || secondChar === 't'){
            if(zoekopdracht.length > 3){
                if (zoekopdracht.substring(2,3) === ' '){
                    return true;
                }else {
                    window.alert("Unkown command prefix");
                    return false;
                }
            }else{
                window.alert("Invalid command");
            }
        }else {
            window.alert("Unkown command prefix");
            return false;
        }
    }else{
        window.alert("Invalid command")
        return false;
    }

}

const zoeken = () =>{
    if(valideer()){
        const zoekopdracht = document.getElementById('zoekopdracht').value.trim()

        const newCol = document.createElement('div');
        newCol.classList.add('col-md-4');
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        const newCardBody = document.createElement('div');
        newCardBody.classList.add('card-body');
        const newCardTitle = document.createElement('h5');
        newCardTitle.classList.add('card-title');
        const newCardText = document.createElement('p');
        newCardText.classList.add('card-text');
        const newCardLink = document.createElement('a');
        newCardLink.classList.add('btn');
        newCardLink.setAttribute('target', '_blank');

        let deel1Link;
        let deel2Link = zoekopdracht.substring(3,zoekopdracht.length);
        switch (zoekopdracht.substring(0,2)) {
            case "/g":
                deel1Link = "Google";
                newCard.classList.add('custom-cardGoogle')
                newCardTitle.innerText = "Google";
                newCardLink.classList.add('buttonOrange');
                deel2Link.replace(/ /g, '%2B');
                newCardLink.setAttribute('href', "https://www.google.com/search?q="+deel2Link);
                break
            case "/y":
                deel1Link = "Youtube";
                newCard.classList.add('custom-cardYoutube');
                newCardTitle.innerText = "Youtube";
                newCardLink.classList.add('buttonBlack');
                deel2Link.replace(/ /g, '%2B');
                newCardLink.setAttribute('href', "https://www.youtube.com/results?search_query="+deel2Link);
                break
            case "/i":
                deel1Link = "Instagram";
                newCard.classList.add('custom-cardInstagram');
                newCardTitle.innerText = "Instagram";
                newCardLink.classList.add('buttonOrange');
                deel2Link.replace(/ /g, '%20');
                newCardLink.setAttribute('href', "https://www.instagram.com/explore/tags/"+deel2Link+"/");
                break
            case "/t":
                deel1Link = "Twitter";
                newCard.classList.add('custom-cardTwitter');
                newCardTitle.innerText = "Twitter";
                newCardLink.classList.add('buttonBlack');
                deel2Link.replace(/ /g, '%20');
                newCardLink.setAttribute('href', "https://twitter.com/hashtag/"+deel2Link);
                break
        }

        newCardText.innerText = deel2Link;
        newCardLink.innerText = 'Go!'

        if (aantal === 3){
            const container = document.getElementById("container");
            aantal = 1;
            const newRow = document.createElement('div');
            newRow.classList.add('row');
            newRow.classList.add('whitespaceBetweenRows');

            container.appendChild(newRow);
            newRow.appendChild(newCol);
            newCol.appendChild(newCard);
            newCard.appendChild(newCardBody);
            newCardBody.appendChild(newCardTitle);
            newCardBody.appendChild(newCardText);
            newCardBody.appendChild(newCardLink);
        }else{
            aantal ++;

            let rows = document.getElementsByClassName('row');
            let lastRows = rows.item(rows.length-1);

            lastRows.appendChild(newCol);
            newCol.appendChild(newCard);
            newCard.appendChild(newCardBody);
            newCardBody.appendChild(newCardTitle);
            newCardBody.appendChild(newCardText);
            newCardBody.appendChild(newCardLink);
        }

        if (localStorage.getItem("ArrayCommands") !== null){
            let array = JSON.parse(localStorage.getItem("ArrayCommands"));
            for(let i = 0; i < array.length; i++){
                commands.push(array[i])
            }
        }
            Command = {
                title: deel1Link,
                text: deel2Link,
                url: newCardLink.getAttribute("href")
            };
            commands.push(Command);
        let JSONStoreCommands = JSON.stringify(commands);
        console.log(commands);
        localStorage.setItem("ArrayCommands",JSONStoreCommands);

    }
    document.getElementById("zoekopdracht").value="";
}

window.addEventListener("load", setup);