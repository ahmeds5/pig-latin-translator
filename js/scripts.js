//back-end logic (business)

var translator = function(userInput) {
  userInput.forEach(function(word) {
    word.match(/[^a-zA-Z\d\s:]/g);
    console.log(word);

  })
}



//front-end logic (user interface)
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#user-string").val().split(" ");
    var translation = translator(userInput);
    $("#output").text(translation);
  });
})
