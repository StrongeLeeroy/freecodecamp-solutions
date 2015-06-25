function end(str, target) {
  var num = target.length;
  if (str.substr(-num) === target) {
    return true;
  } else {
    return false;
  }
}

end('Bastian', 'n');