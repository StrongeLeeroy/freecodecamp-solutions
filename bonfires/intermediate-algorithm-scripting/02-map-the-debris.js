function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var newArr = [];
  var period = 0;
  
  for (var i = 0; i < arr.length; i++) {
    period = 2 * Math.PI * Math.sqrt(Math.pow(arr[i].avgAlt + earthRadius, 3)/GM);
    arr[i].orbitalPeriod = Math.round(period);
    delete arr[i].avgAlt;
    newArr.push(arr[i]);
  }
  return newArr;
}

orbitalPeriod([{name : "sputkin", avgAlt : 35873.5553}]);