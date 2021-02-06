//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
let drink = '';
let drinkResults = document.querySelector('.container.drinkResults');
const getCocktailButton = document.querySelector('#drinkQuery');
const cocktailInput = document.querySelector('input');
const carousel = document.querySelector('.carousel');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');

let slideIndex = 1;


leftBtn.addEventListener('click',()=>{

    let percent = carousel.style.right;

    if(percent == '' || percent == '0%'){
        
    }else{
        carousel.style.right = `${parseInt(percent)-100}%`
    }
})

rightBtn.addEventListener('click',()=>{
    let percent = carousel.style.right;
    let numOfPages = Math.floor(carousel.childElementCount/3)
    if(percent == '' ){
        carousel.style.right = `100%`
    }else if(numOfPages*100 <= parseInt(percent)){

    }else{
        carousel.style.right = `${parseInt(percent)+100}%`
    }

    
})


getCocktailButton.addEventListener('click',()=>{
    drink = cocktailInput.value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then((response)=>{
            return response.json()
        })
        .then((data)=> {

            data.drinks.forEach((drink,index)=>{
                createDrinkElement(index, drink.strDrink, drink.strDrinkThumb, drink.strInstructions);
                createSlideShowElement(index,data.drinks.length, drink.strDrink, drink.strDrinkThumb, drink.strInstructions)
            })
            showSlides(slideIndex);
            
        })
        setInterval(()=>{
            plusSlides(1)
        }, 5000)
})



let createDrinkElement = (id,name,imgURL,instructions)=>{
    let container = document.createElement('DIV');
    let img = document.createElement('IMG');
    let header = document.createElement('H2');
    let instructionsHeader = document.createElement('H3');
    let instructionsText = document.createElement('P');

    

    img.className = `drink-${id}-img`
    img.src = imgURL;
    img.alt = 'drink-img';

    header.className = 'drink-header'
    header.innerHTML = `${name}`

    instructionsHeader.className = 'drink-instructions-header';
    instructionsHeader.innerHTML = `Instructions`;

    instructionsText.innerHTML = `${instructions}`

    container.className = 'container drink';
    container.id = `drink-${id}`
    container.appendChild(header);
    container.appendChild(img);
    container.appendChild(instructionsHeader);
    container.appendChild(instructionsText);

    carousel.appendChild(container);



}


const createSlideShowElement = (id,totalElements,name,imgURL,instructions)=>{
    const slideShow = document.getElementById('slideshow');
    let slide = document.createElement('DIV');
    let slideNumber = document.createElement('DIV');
    let slideIMG = document.createElement('IMG');
    let slideCaption = document.createElement('DIV');

    slide.className = 'mySlides fade';

    slideNumber.className = 'numbertext';
    slideNumber.innerHTML = id;

    slideIMG.src = imgURL;
    slideIMG.alt = `drink-${id}-img`;
    slideIMG.style.width = '100%';

    slideCaption.className = 'text';
    slideCaption.innerHTML = name;


    slide.appendChild(slideNumber);
    slide.appendChild(slideIMG);
    slide.appendChild(slideCaption);
    
    slideShow.appendChild(slide);


}
window.addEventListener('DOMContentLoaded', ()=>{
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    console.log(prev,next)
    prev.addEventListener('click',()=>{
        console.log('hello');
        plusSlides(-1)
    })
    next.addEventListener('click',()=>{
        plusSlides(1)
    })

})


///////

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  console.log('hello')
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}