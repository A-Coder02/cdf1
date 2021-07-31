'use strict';
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btn = document.querySelectorAll('.btn-cake');
let CakeName = document.querySelector('.cake-modal-name');
let CakeNameS = document.querySelectorAll('.cake-crl-name');
let cakeModalImg = document.querySelector('.cake-modal-img');
let cakeImgs = document.querySelectorAll('.cake-img');

let cakePrices = document.querySelectorAll('.cake-price');
let cakePrice = document.querySelector('.modal-cake-price');

const showModal = function() {
		modal.classList.add('show-modal');
		overlay.classList.remove('hidden');
		CakeName.textContent = CakeNameS[i].textContent;
		console.log(CakeName.textContent);
}
const closeModal = function () {
	modal.classList.remove('show-modal');
	modal.classList.add('close-modal');
	overlay.classList.add('hidden');
}
for (let i = 0; i < btn.length; i++){
	btn[i].addEventListener('click', function() {
	modal.classList.add('show-modal');
		overlay.classList.remove('hidden');
		
		console.log(cakePrice);
		cakePrice.textContent = cakePrices[i].textContent;
		console.log(cakePrice);
		
		CakeName.textContent = CakeNameS[i].textContent;
		
		cakeModalImg.src = cakeImgs[i].src;
		console.log(cakeModalImg.src,'gg');
});
	
	
	
};


document.querySelector('.modalClose').addEventListener('click', closeModal);



document.querySelector('.overlay').addEventListener('click', closeModal);

document.addEventListener('keydown',function(e) {
	if(e.key === 'Escape' && modal.classList.contains('show-modal'))
	{
		closeModal();
	}
});

for(let n of cakePrices){
	console.log(n.textContent);
}

let OrderB = document.querySelector('.final-order');

OrderB.addEventListener('click', function(){
	let name = document.querySelector("#name").value;
	let number = document.querySelector("#number").value;
	let address = document.querySelector("#address").value;
	let Cakew = CakeName.textContent;
	let Cakep = cakePrice.textContent;				
	let Banner = document.querySelector('.banner');
	let BannerAdd = Banner.src;
	console.log(BannerAdd);
  let url = "https://wa.me/918975048440?text="; 
	
	let FinalURL = url + `Hey Cherry, %0a %0a I'm *${name}*. %0a I Want Delicious *${Cakew}(Price: *${Cakep}*)! %0a At *${address}*. %0a`;
	console.log(FinalURL);
	if(name&&number&&address){
	window.open(FinalURL, '_blank').focus();
	}
	else alert('Please Fill All Details!!!')
})





