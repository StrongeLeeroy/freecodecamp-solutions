function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-z]/g,'');
  var isPal = true;
  for (var i = 0; i <= Math.floor(str.length /2); i++) {
    if (str[i] !== str[str.length - i - 1]){
      return false;
    }
  }
  return true;
}



palindrome("eye");