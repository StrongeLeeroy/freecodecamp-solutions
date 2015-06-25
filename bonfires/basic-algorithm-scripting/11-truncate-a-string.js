function truncate(str, num) {
  if (str.length <= num) {
    return str;
  } else {
      return str.substr(0, num - 3) + '...';
  }
}

truncate('A-tisket a-tasket A green and yellow basket', 11);