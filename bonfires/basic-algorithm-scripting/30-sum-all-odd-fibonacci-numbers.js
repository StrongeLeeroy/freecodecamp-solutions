function sumFibs(num) {
  var previous1 = 0;
  var previous2 = 1;
  var fibonacci = 1;
  var sum = 1;
  
  while (previous1 + previous2 <= num) {
    fibonacci = previous1 + previous2;
    previous1 = previous2;
    previous2 = fibonacci;
    if (fibonacci % 2 != 0) {
        sum += fibonacci;
    }
  }
  return sum;
}

sumFibs(4);