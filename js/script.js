index = 0
let num_drinks = 0
let data = {} 
let state = 'play'

function fetchData(){
  base_url = "https://thecocktaildb.com/api/json/v1/1/search.php?s="
  drink = "margarita"
  
  input = document.querySelector('input')
  drink_input = input.value
  
  url = base_url + drink_input
  
   fetch( url )
    .then( res => res.json() )
    .then( data_res => {
        data = data_res
        num_drinks = data.drinks.length        
     })
     .catch( err => {
        console.log(`error ${err} `)
      })
}

function setImage(){
   
  drink = data.drinks[index]
  
  // Drink's Name
  name = drink.strDrink
  
  h2 = document.querySelector('h2')
  h2.innerText = name
  
  
  
  // Drink's Image
  img_url = drink.strDrinkThumb
  img = document.querySelector('img')
  img.src = img_url
  
  //Counter
  counter = (index+1) + "/" + num_drinks
  document.querySelector('h5').innerText = counter 
}

function nextImage(){
  if( index >= num_drinks  )
    index = 0
  
  setImage()
  index++

}

var interval
function searchDrink(){
  index = 0
  fetchData()
    
  interval = setInterval(nextImage, 2500)
  
  showControls()
}


function stopCarousel(){
  if( state == 'play'){
    clearInterval(interval)
    stop.innerText = 'Play'
    state = 'stop'
  }
  else if( state == 'stop'){
    interval = setInterval(nextImage, 2500)
    stop.innerText = 'Stop'
    state = 'play'
  }
}

function showControls(){
  stop.style.display = "inline-block"
  next.style.display = "inline-block"
}

boton = document.querySelector('button')
boton.addEventListener('click', searchDrink)

next = document.getElementById('next')
next.addEventListener('click', nextImage)

stop = document.getElementById('stop')
stop.addEventListener('click', stopCarousel)

