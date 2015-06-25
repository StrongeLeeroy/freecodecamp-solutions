function pairwise(arr, arg) {
  if (arr.length === 0) {
    return 0;
  }
  var answer = [];
  for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < arr.length; j++){
      if (i != j && arr[i] + arr[j] == arg && answer.indexOf(i) < 0 && answer.indexOf(j) < 0) {
        answer.push(i, j);
      }
    }
  }
  return answer.reduce(function(a, b){
    return a + b;
  });
}

pairwise([1, 4, 2, 3, 0, 5], 7);