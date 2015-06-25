function largestOfFour(arr) {
  var newArr = [];
  var value = 0;
  for (var i = 0; i < 4; i++) {
    value = arr[i].reduce(function(a, b){
      return a >= b ? a : b;
    });
    console.log(value);
    newArr.push(value);
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);