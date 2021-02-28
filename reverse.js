function reverse(str) {
  const chars = str.split("");
  const revChars = [];

  chars.forEach((char) => revChars.unshift(char));

  const revStr = revChars.join("");

  return revStr;
}

export default reverse;
