"use strict"

const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;
console.log(htmlElement);
console.log(headElement);
console.log(bodyElement);


const button = document.querySelector('.form__line');
document.addEventListener("click", searchButton);
function searchButton(event){
   if(event.target.closest('.form__button')){
      button.classList.toggle('_active');
   }
   if (!event.target.closest('.form__line')){
      button.classList.remove('_active');
   }
}
document.addEventListener("click", counter);
function counter(event){
   if(event.target.closest('.counter')){
      button.classList.toggle('_active');
   }
   if (!event.target.closest('.form__line')){
      button.classList.remove('_active');
   }
}
const textItem = document.querySelector('.form__input');
const textLimit = textItem.getAttribute('maxlength');
const textCounter = document.querySelector('.counter span');
textCounter.innerHTML = textLimit;
textItem.addEventListener("keyup", textSetCounter);
textItem.addEventListener("keydown", function (event){
   if(event.repeat)  textSetCounter();
});

function  textSetCounter(){
   const textResult = textLimit - textItem.value.length;
   textCounter.innerHTML = textResult;

}
document.addEventListener('keyup', function (event){
   if (event.code ==='Escape'){
      button.classList.remove('_active');
   }
})