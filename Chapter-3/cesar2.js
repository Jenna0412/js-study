input = prompt("암호화는 1번, 복호화는 2번을 입력하세요.");
  if(input < String.fromCharCode(49) || input > String.fromCharCode(50)) {
    alert("잘못된 번호입니다!");
  }
   while(input == 1) {
   enc = prompt("암호화할 단어를 영대문자로 입력하세요.");
    if(enc === null) {
      break;
    }
    if(enc < String.fromCharCode(64) || enc > String.fromCharCode(91)) {
      alert("영대문자로만 입력해 주세요!");
    } else {
//글자를 숫자로 변환 후 코드값을 변경하여 다시 글자로 변환하여 보여준다.
//글자를 글자 하나하나씩 쪼개어 변환한다.
    for(i = 0; i < enc.length; i++) {
        var pw = enc.charCodeAt(i);

          if(pw < 91 || pw > 65) {
              pw = pw - 2;
            }
          if(pw == 63 || pw == 64) {
              pw = pw + 26;
            }
          pw = String.fromCharCode(pw);
          console.log(pw);
          alert(pw);
    }

   }

  }

  while(input == 2) {
  dec = prompt("복호화할 단어를 영대문자로 입력하세요.");
   if(dec === null) {
     break;
   }
   if(dec < String.fromCharCode(64) || dec > String.fromCharCode(91)) {
     alert("영대문자로만 입력해 주세요!");
   } else {

   for(i = 0; i < dec.length; i++) {
       var pw = dec.charCodeAt(i);

         if(pw < 90 || pw > 64) {
             pw = pw + 2;
           }
         if(pw == 91 || pw == 92) {
             pw = pw - 26;
           }
         pw = String.fromCharCode(pw);
         console.log(pw);
         alert(pw);
   }

  }

 }
