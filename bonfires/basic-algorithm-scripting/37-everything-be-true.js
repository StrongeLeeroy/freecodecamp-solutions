function every(collection, pre) {
  var result = true;
  if (typeof pre === 'object') {
    collection.forEach(function(item){
      for (var key in pre) {
        console.log(pre[key]);
        console.log(item[key]);
        if (item.hasOwnProperty(key) && item[key] === pre[key]) {
          console.log('OK');
        } else {
          console.log('not OK');
          result = false;
        }
      }
    });
  } else {
    collection.forEach(function(item){
      if (item.hasOwnProperty(pre)) {
        console.log('OK');
      } else {
        result = false;
      }
    });
  }
  return result;
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], {'sex': 'female'});