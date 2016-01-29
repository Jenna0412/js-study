var yymmdd;
var inputyymmdd = false;

while (inputyymmdd === false) {
  yymmdd = prompt("년월일 8자리를 공백 없이 입력하세요.");

  if(yymmdd === null) {
    break;
  }
  if(yymmdd > 0){

    var yy = yymmdd.substring(0,4);
    var mm = yymmdd.substring(4,6);
    var dd = yymmdd.substring(6,8);

    alert(yy + "년" + mm + "월" + dd + "일");
  }
}
