function titleCase(str) {
  str = str.toLowerCase();
  str = str.split(' ');
  var newStr = '';
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    newStr += str[i] + ' ';
  }
  return newStr.trim();
}

titleCase("I'm a little tea pot");