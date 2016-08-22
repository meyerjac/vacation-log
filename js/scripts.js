function Place(city, country, time, landmark, length) {
  this.city = city;
  this.country = country;
  this.timeVisited = time;
  this.landmark = landmark;
  this.lengthOfStay = length;
}
Place.prototype.all = function() {
  return this.city + ", " + this.country;
}

// user interface logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedCity = $("input#new-city-name").val();
    var inputtedCountry = $("input#new-country-name").val();
    var inputtedTime = $("input#new-time").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedLength = $("input#new-length").val();


    var newPlace = new Place(inputtedCity, inputtedCountry, inputtedTime, inputtedLandmark, inputtedLength);


// this is where the new places show up in bullet form
    $("ul#places").append("<li><span class='place'>" + newPlace.all() + "</span></li>");

  $(".place").last().click(function() {
  $("#show-place").show();
  $("#show-place h2").text(newPlace.city);
  $(".city").text(newPlace.city);
  $(".country").text(newPlace.country);
  $(".time").text(newPlace.timeVisited);
  $(".landmark").text(newPlace.landmark);
  $(".length").text(newPlace.lengthOfStay);

});
//what does this do??
    $("input#new-city-name").val("");
    $("input#new-country-name").val("");
    $("input#new-time").val("");
    $("input#new-landmark").val("");
    $("input#new-length").val("");
  });
});
