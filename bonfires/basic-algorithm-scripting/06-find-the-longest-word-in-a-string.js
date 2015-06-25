function findLongestWord(str) {
  str = str.split(' ');
  var longest = str.reduce(function(a, b){
    return a.length >= b.length ? a : b;
  });
  return longest.length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');