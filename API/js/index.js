const API_URL = 'https://pokeapi.co/api/v2/pokemon';

const xhr = new XMLHttpRequest();


function onRequestHandler(){
    if(this.readyState === 4 && this.status === 200){

        const data = JSON.parse(this.response);
        console.log(data);

        const nom = document.querySelector("#app");
        const img = document.querySelector("#img");

        
        nom.innerHTML = data.name
        img.src = data.sprites.front_default;
        
    }
}

let number = prompt("NUM");

xhr.addEventListener('load', onRequestHandler);
xhr.open('GET', `${API_URL}/${number}`);
xhr.send();

//