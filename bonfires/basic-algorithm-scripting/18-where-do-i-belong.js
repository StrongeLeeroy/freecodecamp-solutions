function where(arr, num) {
  arr.push(num);
  arr.sort();
  return arr.indexOf(num);
}

where([40, 60], 50);