function binaryAgent(str) {
  str = str.split(' ');
  var result = '';
  var current = 0;
  for (var i = 0; i < str.length; i++) {
    var binary = parseInt(str[i], 2);
    var decimal = binary.toString(10);
    result += String.fromCharCode(decimal);
  }
  console.log(result);
  return result;
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');