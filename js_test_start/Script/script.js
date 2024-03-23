const Setup = () =>{
    document.getElementById("ei").addEventListener("click", Kip);
    document.getElementById("tekstLetter").addEventListener("input", TellLetter);
}
const Kip = () =>{
    let waardeEi = document.getElementById("ei").value;
    const optie1 = "Met een ei";
    const optie2 = "Zonder een ei"
    if(waardeEi === optie1){
        document.getElementById("note").innerText = "Hierboven, een kip " + optie1.toLowerCase()
        document.getElementById("img").classList.add("img.with-egg");
    }else{
        if(waardeEi === optie2){
            document.getElementById("note").innerText = "Hierboven, een kip " + optie2.toLowerCase()
            document.getElementById("img").classList.add("img");
        }
    }
}

const TellLetter = () =>{
   let letters = document.getElementById("note").split("");
   let aantal = 0;
   let letterGelijk = document.getElementById("tekstLetter").value;
   for (let i = 0; i < letters.length; i++){
       if(aantal[i] === letterGelijk){
           aantal++;
       }
   }
   document.getElementById("note").innerText = document.getElementById("note").innerText + "\n Letter " + letterGelijk + " komt " + aantal + " keer voor in bovenstaande zin";
}
window.addEventListener("load", Setup);
