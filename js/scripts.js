//Dice Roll Randomizer
// function roll(min, max) {
//   return Math.random() * (max - min) + min;
// }
function rollDice(){
  return Math.floor(Math.random() * 6) + 1;
  document.getElementById("p1-roll-img").src = "img/dice" + rollDice() + ".png";
}

function EventListeners() {
  $("#p1-roll").on("click", function() {
    $("#p1-turn-points").text(rollDice());
  })
}



//Fontend Business
$(document).ready(function(event) {
  EventListeners();
  event.preventDefault();
})
