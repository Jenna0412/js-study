var rock = "바위";
var scissors = "가위";
var paper = "보";

var input;
var firstAttack = false;
var userFirst = false;

 while(firstAttack === false) {
  input = prompt("선 공격을 정합니다. 가위,바위,보!");
   if(input === null) {
     break;
   }

 //1. 가위바위보로 선공격 정하기
 //cpu : 0=가위, 1 = 바위, 2= 보
 //유저 = 바위
   if(input == rock) {
     var cpu = Math.floor(Math.random() * 3);
     if(cpu === 0) {
       alert("컴퓨터가 가위를 내서 졌습니다. 당신이 공격하세요.");
       console.log(cpu);
       firstAttack = true;
       userFirst = true;
     } else if(cpu === 1) {
       alert("비겼습니다. 다시 가위바위보!");
       console.log(cpu);
     } else {
       alert("컴퓨터가 보를 내서 이겼습니다. 컴퓨터가 먼저 공격합니다.");
       console.log(cpu);
       firstAttack = true;
     }
   }

 //유저 = 가위
  if(input == scissors) {
    var cpu = Math.floor(Math.random() * 3);
    if(cpu === 2) {
      alert("컴퓨터가 보를 내서 졌습니다. 당신이 공격하세요.");
      console.log(cpu);
      firstAttack = true;
      userFirst = true;
    } else if(cpu === 0) {
      alert("비겼습니다. 다시 가위바위보!");
      console.log(cpu);
    } else {
      alert("컴퓨터가 주먹을 내서 이겼습니다. 컴퓨터가 먼저 공격합니다.");
      console.log(cpu);
      firstAttack = true;
    }
   }
 //유저 = 보
  if(input == paper) {
    var cpu = Math.floor(Math.random() * 3);
    if(cpu === 1) {
      alert("컴퓨터가 주먹을 내서 졌습니다. 당신이 공격하세요.");
      console.log(cpu);
      firstAttack = true;
      userFirst = true;
    } else if(cpu === 2) {
      alert("비겼습니다. 다시 가위바위보!");
      console.log(cpu);
    } else {
      alert("컴퓨터가 가위를 내서 이겼습니다. 컴퓨터가 먼저 공격합니다.");
      console.log(cpu);
      firstAttack = true;
    }
   }
 }

 //2.선을 정한 후 홀짝 시작
 //유저 공격
 // cpu : 0 = 짝, 1 = 홀
 if(firstAttack === true && userFirst === true) {
   input = prompt("1부터 100까지의 숫자 중 하나를 입력해주세요.");
   //유저 = 짝
    if(input % 2 === 0){
      var cpu = Math.floor(Math.random() * 2);
      if(cpu ===1 && input % 2 === 0) {
        alert("컴퓨터는 홀입니다. 당신이 이겼습니다.");
        console.log(cpu);
      } else {
        alert("컴퓨터는 짝입니다. 당신이 졌습니다.");
        console.log(cpu);
      }
    }
    //유저 = 홀
     if(input % 2 !== 0){
       var cpu = Math.floor(Math.random() * 2);
       if(cpu ===0 && input % 2 !== 0) {
         alert("컴퓨터는 짝입니다. 당신이 이겼습니다.");
         console.log(cpu);
       } else {
         alert("컴퓨터는 홀입니다. 당신이 졌습니다.");
         console.log(cpu);
       }
     }
  }
   //컴퓨터 공격
   if(firstAttack === true && userFirst === false) {
     input = prompt("컴퓨터가 선택한 숫자가 홀인지 짝인지 맞춰 보세요.");
     var even = "짝";
     var odd = "홀";
      if(input === even || input === odd){
        var cpu = Math.floor(Math.random() * 100) + 1;
        if(cpu % 2 === 0 && input === even || cpu % 2 !== 0 && input === odd) {
          alert("컴퓨터는 " + cpu + "이므로, 당신이 이겼습니다.");
          console.log(cpu);
        } else {
          alert("컴퓨터는 " + cpu + "이므로, 당신이 졌습니다.");
          console.log(cpu);
        }
      }
    }
