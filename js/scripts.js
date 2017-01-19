//back-end logic (business)

function translator (userInput) {
  // var userSplit = userInput.split(" ");
  var vowels= ["a","e","i","o","u"];

  // console.log(userInput[0]);
  if (vowels.indexOf(userInput[0]) != -1 ) {
    return userInput + "ay";
  }

  if (vowels.indexOf(userInput[0]) === -1) {
    var firstLetter = userInput[0];
    var restOfWord = userInput.slice(1,userInput.length);
    return restOfWord + firstLetter + "ay";
  }

  // for (i = 0; i < userSplit.length; i += 1) {
  //   for(j=0; j<vowels.length; j++) {
  //     if (userSplit[i] === vowels[j]) {
  //     var breakPoint = vowels[j];
  //     var newSentence = userSplit.slice(breakPoint) + userSplit.slice(0,breakPoint);
  //     return newSentence;
  //
  //     }
  //   }
  // }
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
