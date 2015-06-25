function chunk(arr, size) {
  var newArr = [];
  var tempArr = [];
  var chunk = 0;
  for(var i = 0; i < arr.length; i++) {
    tempArr.push(arr[i]);
    chunk++;
    if (chunk === size || i == arr.length - 1) {
      newArr.push(tempArr);
      tempArr = [];
      chunk = 0;
    }
  }
  return newArr;
}

chunk(['a', 'b', 'c', 'd'], 2);