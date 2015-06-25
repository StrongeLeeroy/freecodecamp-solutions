function add() {
  for (var i = 0; i < arguments.length; i++){
    if (typeof arguments[i] !== 'number') {
      return undefined;
    }
  }
  var num = arguments[0];
  if (arguments.length == 1) {
    return function(x){
      for (var i = 0; i < arguments.length; i++){
    if (typeof arguments[i] !== 'number') {
      return undefined;
    }
  }
      return x + num;
    };
  } else {
    return num + arguments[1];
  }
}

add(2,3);