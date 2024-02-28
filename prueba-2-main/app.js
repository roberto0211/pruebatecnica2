'use strict'
const GI = {
    createElement(tag) {
        const liElement = document.createElement('li');

        const checkElement = document.createElement('input');
        checkElement.type = 'checkbox';
        const text = document.createElement('span');
        text.innerText = tag
        
        liElement.appendChild(checkElement);
        liElement.appendChild(text);
        console.log(text)
        checkElement.addEventListener('change', function() {
            if (checkElement.checked) {
                text.style.textDecoration = 'line-through';
                text.style.color = 'gray';
            } else {
                text.style.textDecoration = 'none';
                text.style.color = 'initial';
            }
        });

        return liElement;
    }
};
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
        boxList.appendChild(GI.createElement(item));
    });

}
crearElementos();