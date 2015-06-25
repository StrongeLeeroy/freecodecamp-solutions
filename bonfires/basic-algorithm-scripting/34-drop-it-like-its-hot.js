function drop(arr, func) {
  while (true) {
    if (arr.length === 0) {
      return arr;
    }
    if (!func(arr[0])) {
      arr.shift();
    } else {
      return arr;
    }
  }
}

drop([1, 2, 3, 4], function(n) {return n > 5; });