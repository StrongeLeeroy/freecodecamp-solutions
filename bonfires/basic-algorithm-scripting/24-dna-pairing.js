function pair(str) {
 str.split('');
 var newArr = [];
 var pair = '';
 for (var i = 0; i < str.length; i++) {
   newArr.push([str[i], equiv(str[i])]);
 }
  function equiv(element) {
    switch (element) {
      case 'A':
        pair = 'T';
        break;
      case 'T':
        pair = 'A';
        break;
      case 'C':
        pair = 'G';
        break;
      case 'G':
        pair = 'C';
    }
    return pair;
  }
 return newArr;
}

pair("GCG");