function slasher(arr, howMany) {
  if (howMany >= arr.length) {
    return [];
  } else if (howMany < 1) {
    return arr;
  }
  arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);