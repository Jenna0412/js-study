var numbers = [1,2,3,4,5,6,7,8,9,10];

function suffleNumber() {
  for (var j = 0; j < numbers.length; j++) {
    for (var i = 0; i < numbers.length; i++) {
      var suffle1 = numbers[i];
      var suffle2 = numbers[Math.floor(Math.random() * numbers.length)];
      if (suffle1 != suffle2) {
        numbers[i] = suffle2;
        suffle2 = numbers[i];
        console.log(numbers);
      }
    }
  }
}

suffleNumber(numbers);
