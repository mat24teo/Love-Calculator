const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {

    if (this.readyState === this.DONE) {
      
        const love = JSON.parse(this.response);

        document.querySelector("#n1").innerHTML = love.fname
        document.querySelector("#n2").innerHTML = love.sname

    
        document.querySelector("#app").innerHTML = love.percentage
        document.querySelector("#app").innerHTML = love.percentage

        

        

        if(love.percentage>85){
            document.querySelector('#img').src="./img/Amor.jpg";

        if(love.percentage<85 && love.percentage>50){
            document.querySelector('#img').src="./img/Buen amor.jpg";
        }

        if(love.percentage<50){
            document.querySelector('#img').src="./img/MAl amor.jpg";
        }


    }
}

})

let nom1 = prompt("Nombre ");
let nom2 = prompt("Nombre ");



xhr.open('GET', "https://love-calculator.p.rapidapi.com/getPercentage?sname="+nom1+"&fname="+nom2);
xhr.setRequestHeader('X-RapidAPI-Key', 'bfaa1dd641mshe9ba6534ae25cfep1105a9jsn184c3af213a8');
xhr.setRequestHeader('X-RapidAPI-Host', 'love-calculator.p.rapidapi.com');

xhr.send(data);