const caesarCipher = function (word, shift) {
  if (shift < 0) {
    shift = 26 + (shift % 26);
  }

  const arr = word.split("");
  const shiftedArr = arr.map((char) => {
    const charCode = char.charCodeAt(0);
    let newChar;
    if (charCode >= 65 && charCode <= 90) {
      newChar = String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      newChar = String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    } else {
      newChar = char;
    }
    return newChar;
  });

  return shiftedArr.join("");
};

export default caesarCipher;
