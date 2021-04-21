const number = document.querySelector('.number');
const circleRight = document.querySelector('.circle-right');
const circleLeft = document.querySelector('.circle-left');

circleRight.addEventListener('click', function(){
	number.innerHTML++;
})

circleLeft.addEventListener('click', function(){
	number.innerHTML--;
})