function fearNotLetter(str) {
  var first = str.charCodeAt(0);
  var missing = undefined;
  for (var i = 1; i < str.length; i++) {
    console.log(str.charCodeAt(i));
    if (str.charCodeAt(i) != str.charCodeAt(i - 1) + 1) {
      missing = String.fromCharCode(str.charCodeAt(i) - 1);
    }
  }
  return missing;
}

fearNotLetter('abce');