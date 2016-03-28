var alphabet = [];
var i = 0;

var userInput = prompt("알파벳을 입력하면 정렬됩니다");
  for(i = 0; i < userInput.length; i++) {
    var inputAlphabet1 = userInput.charAt(i);
    var inputAlphabet2 = userInput.charCodeAt(i);
    alphabet.push(inputAlphabet2);
  }
  console.log(alphabet);

  for (var j = 0; j < alphabet.length; j++) {
    for (var i = 0; i < alphabet.length; i++) {
      var first = alphabet[i];
      var second = alphabet[i + 1];
      if (second < first) {
      var temp = alphabet[i];
      alphabet[i] = alphabet[i + 1];
      alphabet[i + 1] = temp;
      }
    }
  }
  for(var k = 0; k < alphabet.length; k++) {
    var l = alphabet[k];
    var result = String.fromCharCode(l);
    console.log(result);
  }
