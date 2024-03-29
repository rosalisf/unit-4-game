// Set the random number values

// Make gems clickable and give them a random value

// $('#container').html('<h1>hello</h1>')

let counter = 0;
let win = 0;
let lose = 0;
let goal = Math.floor(Math.random() * 91) + 10;

// event listener for 4 buttons
$(document).on("click", ".gem", function() {
  console.log("working");
  const randomValue = parseInt($(this).attr("randomValue"));
  counter += randomValue;
  $("#counter").html(counter);

  // Have the number of wins and losses recorded on the page
  if (counter === goal) {
    win++;
    counter = 0;
    goal = Math.floor(Math.random() * 91) + 10;
    $("#win").text(win);
    $("#counter").text(counter);
    $("#goal").text(goal);
  } else if (counter > goal) {
    lose++;

    $("#lose").text(lose);
    counter = 0;
    goal = Math.floor(Math.random() * 91) + 10;
    $("#counter").text(counter);
    $("#goal").text(goal);
  }
});

// function reset (){
//   counter = 0;
//     goal = Math.floor(Math.random() * 91) + 10;
//     $("#counter").text(counter);
//     $("#goal").text(goal);
// }

// This makes the button for each crystal count by their number value

const crystals = ["pink", "green", "yellow", "blue"];

// creates 4 new crystals
for (let i = 0; i < crystals.length; i++) {
  const newButton = $("<img>");
  newButton.addClass("gem");
  newButton.attr("randomvalue", Math.ceil(Math.random() * 50));

  if (crystals[i] === "green") {
    newButton.attr("src", "images/green_gem.gif");
  }

  if (crystals[i] === "pink") {
    newButton.attr("src", "images/pink_gem.gif");
  }

  if (crystals[i] === "yellow") {
    newButton.attr("src", "images/yellow_gem.gif");
  }

  if (crystals[i] === "blue") {
    newButton.attr("src", "images/blue_gem.gif");
  }
  $("#container").append(newButton);
}

//Generate goal number between 10 and 100 & Have a set goal everytime the player refreshes page

$("#goal").text(goal);
// Have the number of wins and losses recorded on the page
