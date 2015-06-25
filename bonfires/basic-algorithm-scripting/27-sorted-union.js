function unite(arr1, arr2, arr3) {
  var newArr = [];
  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i].length; j++) {
      if (newArr.indexOf(arguments[i][j]) < 0) {
        newArr.push(arguments[i][j]);
      }
    }
  }
  return newArr;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);