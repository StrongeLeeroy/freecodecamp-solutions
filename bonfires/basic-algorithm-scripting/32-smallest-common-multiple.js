function smallestCommons(arr) {
  var result = 1;
  var counter = 0;
  var found = false;
  arr = fixRange(arr);
  
  function fixRange(array){
    var resultArr = [];
    var max = array.reduce(function(a, b){
      return Math.max(a, b);
    });
    var min = array.reduce(function(a, b){
      return Math.min(a, b);
    });
    for (var i = min; i <= max; i++) {
      resultArr.push(i);
    }
    return resultArr;
  }
  
  while (!found) {
    console.log("Trying with " + result);
    counter = 0;
    for (var j = 0; j < arr.length; j++) {
      if (result % arr[j] === 0) {
        counter++;
      }
      if (counter === arr.length) {
        found = true;
      }
    }
    result++;
  }
  return result - 1;
}


smallestCommons([1,5]);