function addRecursive(num) {
  if(num == 1) {
    return 1;
  }
  return num * addRecursive(num - 1);
}
var result = addRecursive(5);
console.log(result);
