function where(collection, source) {
  var arr = [];
  arr = collection.filter(function(obj){
    console.log(obj);
    var isTrue = false;
    for (var value in source) {
      if (obj.hasOwnProperty(value) && obj[value] === source[value]) {
        isTrue = true;
      }
    }
    return isTrue;
  });
  console.log(arr);
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });