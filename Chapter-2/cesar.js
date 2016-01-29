var input;
var inputWord = false;

while(inputWord === false) {
  input = prompt("단어를 입력하시면 시저 코드로 변환해 드립니다!(영소문자입력)");
  if(input === null){
    break;
  } else {
   var change = input.charCodeAt();
   change = String.fromCharCode(change - 2);
   alert(change);
  }
}
