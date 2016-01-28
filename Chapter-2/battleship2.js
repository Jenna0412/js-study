var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

var isUserInputLocation1 = false;
var isUserInputLocation2 = false;
var isUserInputLocation3 = false;

while (isSunk === false) {
  guess = prompt("준비,조준,발사!(0에서 6까지 중 추측한 숫자를 입력하세요.):");

   if(guess === null) {
     break;
   }
   if (guess < 0 || guess > 6) {
      alert("올바른 방 번호를 입력하세요!");
    } else {
     guesses = guesses + 1;

     // 전함이 있는곳을 찔렀는지 확인
     // 있으면?
     if (guess == location1 || guess == location2 || guess == location3) {
       // -> 이미 맞췄었는지 확인
       if ((guess == location1 && isUserInputLocation1 === true) || (guess == location2 && isUserInputLocation2 === true) || (guess == location3 && isUserInputLocation3 === true)) {
        alert("이미 명중시킨 전함입니다.");
        hits = hits + 0;
         // ---> 이미 맞춘곳: 이미 맞췄음
       } else {
         // ---> 처음: hit 명중
         if(guess == location1 && isUserInputLocation1 === false) {
           alert("명중!");
         }
         if(guess == location2 && isUserInputLocation2 === false) {
           alert("명중!");
         }
         if(guess == location3 && isUserInputLocation3 === false) {
           alert("명중!");
         }
         hits = hits +1;

         if(guess == location1) {
           isUserInputLocation1 = true;
         }
         if(guess == location2) {
           isUserInputLocation2 = true;
         }
         if(guess == location3) {
           isUserInputLocation3 = true;
         }

         if(hits == 3) {
            isSunk = true;
            alert("전함 침몰!");
         }
      }
   } else {
       // 없으면?
       //-> 실패
       alert("실패");
      }
   }
}

if(isSunk === true) {
var stats = "여러분은 전함을 격침시키기 위해 " + guesses + "번 발사했습니다." +
            "따라서 명중률은 " + (3/guesses) + "입니다.";
alert(stats);
}
