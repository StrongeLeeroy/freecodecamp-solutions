function spinalCase(str) {
  if (str.match(/ [A-Z]/g)) {
    
  }
  return str.replace(/[ _]/g, '-').replace(/([^\-\n])([A-Z])/g, "$1-$2").toLowerCase();
}

spinalCase('This Is Spinal Tap');