function drawer(price, cash, cid) {
  var change;
  if (getTotalCid(cid) < cash - price) {
    return 'Insufficient Funds'
  } else if (getTotalCid(cid) === cash - price) {
    return 'Closed'
  } else {
    
  }
  return change;
}

function getTotalCid(cidArray){
  var total = 0;
  for (var i = 0; i < cidArray.length; i++){
    total += cidArray[i][1];
  }
  return total;
}

// Example cash-in-drawer array:
// [['PENNY', 1.01],
// ['NICKEL', 2.05],
// ['DIME', 3.10],
// ['QUARTER', 4.25],
// ['ONE', 90.00],
// ['FIVE', 55.00],
// ['TEN', 20.00],
// ['TWENTY', 60.00],
// ['ONE HUNDRED', 100.00]]

drawer(19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]);
