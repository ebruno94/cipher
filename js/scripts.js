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

function middleChar(sentence, newSentence){
  var letterCount = sentence.length;
  var middle = letterCount / 2;
  middle = Math.floor(middle);
  alert(middle);
  newSentence = sentence[middle]+newSentence;
  alert(newSentence);
  return newSentence;
}

function reverseSentence(newSentence){
  var text = "";
  for(i = newSentence.length-1; i > -1; i--){
    text += newSentence[i];
  }
  alert(text);
}

function start(){
  var sentence = prompt("Please type a sentence: ");
  takeSentence(sentence);
  var charFirstAndLast = firstLast(sentence);
  var charReverse = reverse(charFirstAndLast);
  var newSentence = sentence + charFirstAndLast;
  alert(newSentence);
  var newNewSentence = middleChar(sentence, newSentence);
  reverseSentence(newNewSentence);

}


$(document).ready(function() {
  $("gif").click(function() {
    // FIRST FUNCTION
    function takeSentence() {
      var sentence = prompt("Type a sentence: ")
      alert("Your sentence is: " sentence);
    };
  });

  $("pic").click(function() {
    function firstLast(sentence) {
      var firstChar = sentence.toUpperCase().charAt(0);
      var lastChar = sentence.toUpperCase().charAt(sentence.length - 1);
      alert(firstChar + lastChar);
      return firstChar + lastChar;
    };
  });

});


start();
