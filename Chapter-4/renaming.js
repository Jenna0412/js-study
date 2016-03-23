var username = [];
var i = 0;

var userInput = prompt("이름을 입력하세요.");
  for(i = 0; i < userInput.length; i++) {
    var inputName = userInput.charAt(i);
    username.push(inputName);
  }
  console.log(i);
  console.log(username);

  for(i = 0; i < username.length; i++) {
    username[i] = "*";
  }
  console.log(username);
