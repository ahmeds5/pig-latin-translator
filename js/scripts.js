//back-end logic (business)






//front-end logic (user interface)
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#user-string").val();
    var translation = translator(userInput);
    $("#output").text(translation);
  });
})
