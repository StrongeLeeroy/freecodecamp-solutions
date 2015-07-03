function drawer(price, cash, cid) {
    var change = cash - price;
    var totalCid = 0;
    for (var i = 0; i < cid.length; i++) {
        totalCid += cid[i][1];
    }
    
    if (totalCid < change) {
        return 'Insufficient Funds';
    } else if (totalCid === change) {
        return 'Closed';
    } else {
        change = calcChange(change, cid);
    }
    return change;
    
    function calcChange(changeLeft, cid) {
        var currentBill, currentBillTotal, totalInBill;
        var changeArray = [];
        var countVar = cid.length - 1;
        while (changeLeft != 0) {
            currentInBill = 0;
            currentBill = parseQty(cid[countVar][0]);
            currentBillTotal = cid[countVar][1];
            if (changeLeft >= currentBill && currentBillTotal > 0) {
                while (changeLeft >= currentBill && currentBillTotal > 0) {
                    changeLeft -= currentBill;
                    changeLeft = changeLeft.toFixed(2);
                    currentInBill += currentBill;
                    currentBillTotal -= currentBill;
                    currentBillTotal.toFixed(2);
                    cid[countVar][1] -= currentBill;
                }
                changeArray.push([cid[countVar][0], currentInBill]);
            } else {
                countVar--;
            }
        }
        return changeArray;
    }
    function parseQty(bill) {
        var unit;
        switch (bill) {
            case 'PENNY':
                unit = 0.01;
                break;
            case 'NICKEL':
                unit = 0.05;
                break;
            case 'DIME':
                unit = 0.10;
                break;
            case 'QUARTER':
                unit = 0.25;
                break;
            case 'ONE':
                unit = 1;
                break;
            case 'FIVE':
                unit = 5;
                break;
            case 'TEN':
                unit = 10;
                break;
            case 'TWENTY':
                unit = 20;
                break;
            case 'ONE HUNDRED':
                unit = 100;
        }
        return unit;
    }
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