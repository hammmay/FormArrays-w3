$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var monthInput = $("input#month").val();
    var colorInput = $("input#color").val();
    var animalInput= $("input#animal").val();
    var browserInput = $("input#browser").val();
      console.log(monthInput, colorInput, animalInput, browserInput);


    $(".month").text(monthInput);
    $(".color").text(colorInput);
    $(".animal").text(animalInput);
    $(".browser").text(browserInput);

// NOTE: Removed the show comand for now  $("#list").show();

    event.preventDefault();
  });
});
