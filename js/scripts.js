//back-end logic (business)

function translator (userInput) {
  var vowels= ["a","e","i","o","u"];

  if (vowels.indexOf(userInput[0]) != -1 ) {
    return userInput + "ay";
  } else if (vowels.indexOf(userInput[1]) === -1) {
    var secondLetter = userInput[1];
    var firstLetter = userInput[0];
    var restOfWord = userInput.slice(2,userInput.length);
    return restOfWord + firstLetter + secondLetter + "ay";
  } else if (vowels.indexOf(userInput[0]) === -1) {
    var firstLetter = userInput[0];
    var restOfWord = userInput.slice(1,userInput.length);
    return restOfWord + firstLetter + "ay";
  }
};

//front-end logic (user interface)
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#user-string").val();
    var translation = translator(userInput);
    $("#output").text(translation);

  });
});
