const setup = () => {
    const verjaardag = new Date('2005-08-24');
    const vandaag = new Date();
    const aantalDagen = (vandaag.getTime() - verjaardag.getTime()) / (1000 * 60 * 60 * 24);
    console.log("u leeft al " + Math.floor(aantalDagen) + " dagen");
}

window.addEventListener("load", setup);