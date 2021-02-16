var carousel = $(".carousel"),
  currdeg = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e) {
  if (e.data.d == "n") {
    currdeg = currdeg - 60;
  }
  if (e.data.d == "p") {
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY(" + currdeg + "deg)",
    "-moz-transform": "rotateY(" + currdeg + "deg)",
    "-o-transform": "rotateY(" + currdeg + "deg)",
    transform: "rotateY(" + currdeg + "deg)",
  });
}

let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

document.querySelector("#getDrink").addEventListener("click", getList);

function getList(params) {
  console.log("Getting List");
  const drinkName = document.querySelector("#drink").value;
  //   console.log(drinkName);
  url += drinkName;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      for (let index = 0; index < 6; index++) {
        const itemToModify = String.fromCharCode("a".charCodeAt(0) + index);
        // console.log(itemToModify);
        const element = data.drinks[index];
        // console.log(element);
        const drinkName = element.strDrink;
        const imgURL = element.strDrinkThumb;
        const header = document.createElement("p");
        header.innerText = drinkName;
        let img = document.createElement("img");
        img.src = imgURL;
        console.log(header);
        // console.log(`.item .${itemToModify}`);

        document.querySelector(`.item.${itemToModify}`).appendChild(img);
        document.querySelector(`.item.${itemToModify}`).appendChild(header);
      }
    });
}

var $el = $(".item");
var elHeight = $el.outerHeight();
var elWidth = $el.outerWidth();

var $wrapper = $(".item");

$wrapper.resizable({
  resize: doResize,
});

function doResize(event, ui) {
  var scale, origin;

  scale = Math.min(ui.size.width / elWidth, ui.size.height / elHeight);

  $el.css({
    transform: "translate(-50%, -50%) " + "scale(" + scale + ")",
  });
}

var starterData = {
  size: {
    width: $wrapper.width(),
    height: $wrapper.height(),
  },
};
doResize(null, starterData);
fitty("p");
