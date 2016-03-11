var rock = "바위";
var scissors = "가위";
var paper = "보";

var input;
var firstAttack = false;

while(firstAttack === false) {
input = prompt("가위,바위,보!");
  if(input === null) {
    break;
  }

//1. 가위바위보로 선공격 정하기
//cpu : 0=가위, 1 = 바위, 2= 보
//유저 = 바위
  if(input == rock) {
    var cpu = Math.floor(Math.random() * 3);
    if(cpu === 0) {
      alert("컴퓨터가 졌습니다. 당신이 공격하세요.");
      firstAttack = true;
    } else if(cpu === 1) {
      alert("비겼습니다. 다시 가위바위보!");
    } else {
      alert("당신이 졌습니다. 컴퓨터가 먼저 공격합니다.");
      firstAttack = true;
    }
  }

//유저 = 가위
 if(input == scissors) {
   var cpu = Math.floor(Math.random() * 3);
   if(cpu === 2) {
     alert("컴퓨터가 졌습니다. 당신이 공격하세요.");
     firstAttack = true;
   } else if(cpu === 0) {
     alert("비겼습니다. 다시 가위바위보!");
   } else {
     alert("당신이 졌습니다. 컴퓨터가 먼저 공격합니다.");
     firstAttack = true;
   }
  }
//유저 = 보
 if(input == paper) {
   var cpu = Math.floor(Math.random() * 3);
   if(cpu === 1) {
     alert("컴퓨터가 졌습니다. 당신이 공격하세요.");
     firstAttack = true;
   } else if(cpu === 2) {
     alert("비겼습니다. 다시 가위바위보!");
   } else {
     alert("당신이 졌습니다. 컴퓨터가 먼저 공격합니다.");
     firstAttack = true;
   }
  }
}

//선을 정한 후 홀짝 시작

if(firstAttack === true) {
  input = prompt("1부터 100까지의 숫자 중 하나를 입력해주세요.");
}
