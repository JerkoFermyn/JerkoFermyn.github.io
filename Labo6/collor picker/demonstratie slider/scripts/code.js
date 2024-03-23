const setup = () => {
	const styleElement = document.createElement('style');
	styleElement.textContent = `
        #colorSquare {
            width: 100px;
            height: 100px;
        }
    `;
	document.head.appendChild(styleElement);

	let sliders = document.getElementsByClassName("slider");
	sliders[0].addEventListener("change", update);
	sliders[0].addEventListener("input", update);
	sliders[1].addEventListener("change", update);
	sliders[1].addEventListener("input", update);
	sliders[2].addEventListener("change", update)
	sliders[2].addEventListener("input", update);
	let colorSquareid = document.getElementById("colorSquare");
	let verwijderid = document.getElementById("verwijder");
	document.getElementById("save").addEventListener("click",kotje)
	if (colorSquareid){
		colorSquareid.addEventListener("click",setColorFromSquare)
	}
	if(verwijderid){
		verwijderid.addEventListener("click",del)
	}
}

const update = () => {

	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");
	let rood=sliders[0].value;
	let groen=sliders[1].value;
	let blauw=sliders[2].value;
	colorDemos[0].style.backgroundColor= 'rgb('+ rood + ',' + groen + ',' + blauw + ')';
}
const kotje = () =>{
	let aantal = 0;
	const div = document.createElement('div');
	div.setAttribute('id', 'colorSquare');
	const button = document.createElement("button");
	button.setAttribute('id', 'verwijder');
	button.textContent = 'x';
	document.body.appendChild(div);
	div.appendChild(button)

	let sliders = document.getElementsByClassName("slider");
	let rood=sliders[0].value;
	let groen=sliders[1].value;
	let blauw=sliders[2].value;
	let colorSquare = document.getElementById("colorSquare");
	colorSquare.style.backgroundColor = 'rgb('+ rood + ',' + groen + ',' + blauw + ')';
}
const setColorFromSquare = () => {
	let colorSquare = document.getElementById("colorSquare");
	let colorDemos=document.getElementsByClassName("colorDemo");
	colorDemos[0].style.backgroundColor = colorSquare.style.backgroundColor;
	update();
}
const del = () =>{
	document.getElementById("colorSquare").remove()
}
window.addEventListener("load", setup);