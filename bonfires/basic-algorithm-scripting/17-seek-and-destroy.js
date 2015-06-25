function destroyer(arr) {
  var mustRemove = [];
  for (var i = 1; i < arguments.length; i++) {
    mustRemove.push(arguments[i]);
  }
  console.log(mustRemove);
  var newArr = arr.filter(function(x){
    var isTrue = true;
    console.log("Value: " + x);
    for (var i = 0; i < mustRemove.length; i++) {
      console.log("Remove if = " + mustRemove[i]);
      if (x === mustRemove[i]) {
        isTrue = false;
      }
    }
    return isTrue;
  });
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);