function convert(str) {
  return str.replace(/&/g, '&amp;').replace(/'/g, '&#039').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

convert('Dolce & Gabbana');