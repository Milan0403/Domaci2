let sumAll = 0;

function addFilm(element){
	let mainEl = element.closest('.single-item');
	let price = mainEl.querySelector('h3 span').innerText;
	let total = document.querySelector('#total');
	price = parseInt(price);
	sumAll += price;

	element.innerText = 'Watched';
	element.setAttribute('disabled','true');
	mainEl.setAttribute('class','watched');

	total.innerText = `Total spent : $${sumAll}`
}