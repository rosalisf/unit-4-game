// Set the random number values

// Make gems clickable and give them a random value

// This makes a button that counts how many times you click it

// $('#container').html('<h1>hello</h1>')

var counter = 0;

// event listener for 4 buttons
$(document).on("click", ".gem", function() {
  console.log("working");
  var randomValue = parseInt($(this).attr("randomValue"));
  counter += randomValue;
  $("#counter").html(counter);
});

// This makes a button for each crystal count by their number value

var crystals = ["pink", "green", "yellow", "blue"];

// creates 4 new crystals
for (let i = 0; i < crystals.length; i++) {
  var newButton = $("<img>");
  newButton.addClass("gem");
  newButton.attr("randomvalue", Math.ceil(Math.random() * 12));
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

// Have a set goal everytime the game ends/resets

// Have the number of wins and losses recorded on the page
