function capitalize(str) {
  let capitalizedWord;
  if (str.length == 1) {
    capitalizedWord = str.toUpperCase();
    return capitalizedWord;
  } else {
    const chars = str.split("");
    const capitalizedChars = chars.map((char, index) => {
      if (index === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    });

    capitalizedWord = capitalizedChars.join("");
    return capitalizedWord;
  }
}

export default capitalize;
