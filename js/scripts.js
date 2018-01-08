$(document).ready(function() {
  var sentence;
  var charFirstAndLast;
  var charReverse;
  var newSentence;
  var newNewSentence;
  var encode;

  function takeSentence(sentence){
    alert("Your sentence is: " + sentence);
  };

  function firstLast(sentence){
    var firstChar = sentence.toUpperCase().charAt(0);
    var lastChar = sentence.toUpperCase().charAt(sentence.length - 1);
    return firstChar + lastChar;
  };

  function reverse(chars){
    var firstChar = chars.charAt(0);
    var lastChar = chars.charAt(1);
    return lastChar + firstChar;
  };

  function middleChar(sentence, newSentence){
    var letterCount = sentence.length;
    var middle = letterCount / 2;
    middle = Math.floor(middle);
    newSentence = sentence[middle]+newSentence;
    return newSentence;
  };

  function reverseSentence(newSentence){
    var text = "";
    for(i = newSentence.length-1; i > -1; i--){
      text += newSentence[i];
    }
    return text;
  };

  function start(){
    sentence = prompt("Please type a sentence: ");
    charFirstAndLast = firstLast(sentence);
    charReverse = reverse(charFirstAndLast);
    newSentence = sentence + charFirstAndLast;
    newNewSentence = middleChar(sentence, newSentence);
    encode = reverseSentence(newNewSentence);

  };


  $("#gif").click(function() {
      alert(sentence);
  });

  $("#pic").click(function() {
      alert(encode);
  });

  start();

});


// start();
