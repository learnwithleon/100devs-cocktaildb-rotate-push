//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

class Cocktail {
    constructor(name, img, inst) {
        this.name = name
        this.img = img
        this.inst = inst
    }
}


document.querySelector('button').addEventListener('click', getDrinks)
document.querySelector('button').addEventListener('click', clearSlides)

function clearSlides() {
    document.getElementById("swiper-wrapper").innerHTML = ""
}
function getDrinks() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?'
    let search = document.querySelector('input').value
    let searchURL = url + `s=${search}`
    fetch(searchURL)
    .then(res => res.json())
    .then(data => handleData(data))
    .catch(err => {
        alert('see console for error')
        console.log(`$error ${err}`)
    })
}

function handleData(data) {
    let drinksData = data.drinks
    let drinks = []
    drinksData.forEach(d => {
        drinks.push(new Cocktail(d.strDrink, d.strDrinkThumb, d.strInstructions))
    })
    makeSlides(drinks)
}

function makeSlides(drinks) {
    console.log('making drinks')
    const wrapper = document.getElementById("swiper-wrapper")
    drinks.forEach(d => {
        console.log(`making ${d.name}`)
        let slide = document.createElement('div')
        let name = document.createElement('h2')
        name.innerText = d.name
        name.setAttribute('class', 'slide-text')
        slide.appendChild(name)
        slide.setAttribute('class', 'swiper-slide')
        slide.style.background = `url(${d.img})`
        slide.style.backgroundSize = '100%'
        slide.style.backgroundRepeat = 'no-repeat'
        wrapper.appendChild(slide)
    })
    makeCarousel()
}

function makeCarousel() {
    let swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
}
