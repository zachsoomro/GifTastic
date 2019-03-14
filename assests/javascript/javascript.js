$(document).ready(function() {
  //Initial array containing elements to be converted to buttons
  var pets = [
    "dog",
    "cat",
    "hamster",
    "fish",
    "parrot",
    "lizard",
    "bunny",
    "turtle"
  ];
  console.log(pets);
  // var api= "https://api.giphy.com/v1/gifs/search";
  renderButtons();
  function renderButtons() {
    $("#buttonRow").empty();
    for (var i = 0; i < pets.length; i++) {
      // setting var button for new buttons
      var button = $("<button>");
      button.addClass("pet");
      button.attr("data-name", pets[i]);
      // attaching values from var pets to var button
      button.data("pets", pets[i]);
      // adds text to var button
      button.text(pets[i]);
      $("#buttonRow").append(button);
    }
  }
  //adds User input to button array
  $("#addPet").on("click", function(event) {
    event.preventDefault();
    var pet = $("#userInput")
      .val()
      .trim();
    pets.push(pet);
    renderButtons();
  });
  renderButtons();
});
//code for playing and pausing gifs
// function playGif() {
//   var state = $(this).attr("data-state");
//   // console.log(state);
//   if (state == "still") {
//     $(this).attr("src", $(this).data("animate"));
//     $(this).attr("data-state", "animate");
//   } else {
//     $(this).attr("src", $(this).data("still"));
//     $(this).attr("data-state", "still");
//   }
// }
//API url + input + key (KEY Not working)
$("button").on("click", function() {
  var petButton = $(this).val;
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    pets +
    "&api_key=PhM1GV2VdnjTi3VVisJ3MJZQFnpmg7Rq&limit=10";

  //Appending GIPHY using AJAX call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var results = response.data;
    for (var i = 0; i < results.length; i++) {
      var gifDiv = $("<div>");
      //Creating text for Ratings
      var p = $("<p>").text("Ratings: " + results[i].rating);
      var petGif = $("<img>");
      petGif.attr("src", result[i].images.fixed_height.url);
      gifDiv.append(p);
      gifDiv.append(petGif);
      $("#Gifs").prepend(gifDiv);
    }
  });
});
