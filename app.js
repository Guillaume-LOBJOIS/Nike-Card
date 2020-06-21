var container = document.querySelector('.container');
var card = document.createElement('div');
var divTopPart = document.createElement('div')
var circle = document.createElement('div');
var nikeBackground = document.createElement('h1');
var img = document.createElement("img");
var title = document.createElement('h1');
var divDownPart = document.createElement('div');
var sizeText = document.createElement('p');
var divSize = document.createElement('div')
var colorText = document.createElement('p');
var divColor = document.createElement('div')
var buyButton = document.createElement('button')
container.appendChild(card).className = 'card';
card.appendChild(divTopPart).className='divTopPart'
divTopPart.appendChild(circle).className = 'circle';
divTopPart.appendChild(nikeBackground).className = 'textBackground';
divTopPart.appendChild(title).className = 'nikeTitle';
card.appendChild(divDownPart).className = 'divDownPart';
divSize.appendChild(sizeText).className = 'sizeText';
divDownPart.appendChild(divSize).className = 'divSize';
divColor.appendChild(colorText).className = 'colorText';
divDownPart.appendChild(divColor).className = 'divColor';
card.appendChild(img).className = 'imgShoes';
divDownPart.appendChild(buyButton).className = 'buyButton';
img.src = 'https://i.imgur.com/eCbLmFV.png';

createNikeTextBackground();
createNikeTitle();
createSizePart();
createColorTextPart();
createTextInButton();
card.addEventListener('mouseenter',animationUp)
card.addEventListener('mouseleave',animationDown)

function createNikeTextBackground(){
    nikeBackground.innerHTML='NIKE';
}
function createNikeTitle(){
    title.innerHTML='Nike Shoes';
}
function createTextInButton(){
    buyButton.innerHTML = 'Buy Now';
}
function createSizePart(){
    sizeText.innerHTML='Size :'
    for(var size = 40; size < 43 ; size++){
        console.log(size);
        var sizeValue = document.createElement('p');
        sizeValue.innerHTML = size;
        divSize.appendChild(sizeValue).className = 'sizeValue';
 }
}
function createColorTextPart(){
    colorText.innerHTML='Color :'
    for(var value = 0; value < 3; value++){
        console.log(value);
        var colorCircle = document.createElement('div');
        divColor.appendChild(colorCircle).className = 'colorCircle'+value;
        console.log(colorCircle.className);

    }
}
function animationUp(){
circle.style.clipPath= 'circle(250px at 40% 10%)';
img.style.top='20%';
title.style.top='50%';
divSize.style.top='60%';
divColor.style.top='75%';
buyButton.style.top='87%';
}
function animationDown(){
    circle.style.clipPath= 'circle(220px at 80% 20%)';
    img.style.top='40%';
    title.style.top='80%';
    divSize.style.top='120%';
    divColor.style.top='190%';
    buyButton.style.top='250%';
}