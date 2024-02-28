'use strict'
const GI = {
	createElement (tag, atributes) {
		// let element = document.getElementById(tag);
        // element.style =atributes;
		return document.createElement(tag)
	}
}


const to_do = [
    'Alimentar al perro',
    'Estudiar para prueba escrita',
    'Pagar taxes',
    'Pasear a perro',
    'Comprar entradas para el cine',
]

function crearElementos(){
    const boxList = document.getElementById('list');
    to_do.forEach((item)=>{
        boxList.innerHTML =GI.createElement('input','checked');
    });

}
crearElementos();