/*$(document).ready(function() {
  $("h2").click(function() {
    // FIRST FUNCTION
    function takeSentence() {
      var sentence = prompt("Type a sentence: ")
      alert("Your sentence is: " sentence);
    };

    function firstLast(sentence) {
      var firstChar = sentence.toUpperCase().charAt(0);
      var lastChar = sentence.toUpperCase().charAt(sentence.length - 1);
      alert(firstChar + lastChar);
      return firstChar + lastChar;
    };

    takeSentence();
    firstLast(sentence);

  });

});
*/
function takeSentence(sentence){
  alert("Your sentence is: " + sentence);
};

function firstLast(sentence){
  var firstChar = sentence.toUpperCase().charAt(0);
  var lastChar = sentence.toUpperCase().charAt(sentence.length - 1);
  alert(firstChar + lastChar);
  return firstChar + lastChar;
}

function reverse(chars){
  var firstChar = chars.charAt(0);
  var lastChar = chars.charAt(1);
  alert(lastChar + firstChar);
  return lastChar + firstChar;
}

var sentence = prompt("Please type a sentence: ");
takeSentence(sentence);
var charFirstAndLast = firstLast(sentence);
var charReverse = reverse(charFirstAndLast);
