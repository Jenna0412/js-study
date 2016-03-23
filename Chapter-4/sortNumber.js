var scores = [3,7,5,8,9,2,3,4,6,7,1,10,18,2,5];

function sortNumber(scores) {
  for (var j = 0; j < scores.length; j++) {
    for (var i = 0; i < scores.length; i++) {
      var first = scores[i];
      var second = scores[i + 1];
      if (second < first) {
        var temp = scores[i];
        scores[i] = scores[i + 1];
        scores[i + 1] = temp;
      }
    }
  }
}

sortNumber(scores);
console.log(scores);
