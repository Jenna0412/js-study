var colas = ["cola","cola","cola","cola","cola"];
var i = 0;
var count = colas.length;

function colaVendingMachine() {
  for(i = 0; i < count; i++) {
    var cost = prompt("콜라는 100원입니다. 금액을 투입해주세요.");
    if(cost === null) {
      break;
    }
    if(cost < 100) {
      alert("금액이 부족합니다.");
    }
    if(cost >= 100) {
      colas.pop();
      alert("콜라를 뽑았습니다. 거스름돈 : " + (cost-100));
      cost = cost - 100;
      console.log(colas);
    }
  }
  if(colas.length === 0) {
    alert("콜라 품절");
  }
}

var buyCola = colaVendingMachine();
