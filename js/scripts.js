//Dice Roll Randomizer
// function roll(min, max) {
//   return Math.random() * (max - min) + min;
// }
var player1 = {
  totalPts: 0,
  turnPts: 0
}

function rollDice() {
  let rollNum = Math.floor(Math.random() * 6) + 1;
  if (rollNum != 1) {
    player1.turnPts += rollNum;
    document.getElementById("p1-turn-points").innerHtml = player1.turnPts;
  }
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
