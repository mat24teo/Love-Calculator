const data = 'text=After%20living%20abroad%20for%20such%20a%20long%20time%2C%20seeing%20my%20family%20was%20the%20best%20present%20I%20could%20have%20ever%20wished%20for.';

const xhr = new XMLHttpRequest();

function onRequestHandler(){
	if(this.readyState === this.DONE){
		//
		// 1 = OPENED , abriendo
		// 2 = HEADERS_RECEIVED , llamando a la function
		// 3 = LOADING , cargando
		// 4 = DONE , completado
	}
}

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.response);
	}
});

xhr.open('POST', 'https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/');
xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
xhr.setRequestHeader('X-RapidAPI-Key', 'ee573bb170mshb359990c1c9ced5p174115jsn4133801914c7');
xhr.setRequestHeader('X-RapidAPI-Host', 'twinword-emotion-analysis-v1.p.rapidapi.com');

xhr.send(data);