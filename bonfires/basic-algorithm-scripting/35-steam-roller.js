function steamroller(arr) {
  var flatArr=[], i;
  
  function nestedCheck(arr1) {
    for (var j=0;j<arr1.length;j++) {
    if (!Array.isArray(arr1[j]))
      flatArr.push(arr1[j]);
    else nestedCheck(arr1[j]);
    }
  }
for (i=0;i<arr.length;i++) {
  if (!Array.isArray(arr[i]))
    flatArr.push(arr[i]);
  else nestedCheck(arr[i]);
  }
  
  return flatArr;
}
 
steamroller([1, [2], 2, [3, [[4]]]]);