var colas = ["콜라","콜라","콜라","콜라","콜라"];
var i = 0;

console.log("콜라를 뽑습니다.");
for (i = 0; i < colas.length; i++) {
  colas.pop(i);
  console.log("콜라를 뽑았어요. 콜라가 "+ colas.length + "개 남았어요.");
}

if(colas.length === 0){
  console.log("콜라가 매진되었어요.");
}
