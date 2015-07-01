function inventory(arr1, arr2) {
  var newItem = "";
  var newQty = 0;
  var isIn = false;
    for (var i = 0; i < arr2.length; i++){
      newItem = arr2[i][1];
      newQty = arr2[i][0];
      isIn = false;
      for (var j = 0; j < arr1.length; j++){
        if (newItem === arr1[j][1]) {
          arr1[j][0] += newQty;
          isIn = true;
        }
      }
      if (!isIn){
          arr1.push([newQty, newItem]);
      }
    }
    return arr1.sort(sortFunction);
}

function sortFunction(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}

// Example inventory lists
var curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
];

var newInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
];

inventory(curInv, newInv);