function repeat(str, num) {
  var newStr = '';
  if (num <= 0) {
    return newStr;
  }
  for (var i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
}

repeat('abc', 3);