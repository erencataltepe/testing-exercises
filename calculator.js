const calculator = {
  add: function (...numbers) {
    return numbers.reduce((total, current) => total + current);
  },
  subtract: function (...numbers) {
    return numbers.reduce((pre, current) => pre - current);
  },
  divide: function (num1, num2) {
    if (num1 === 0 && num2 === 0) {
      return NaN;
    } else if (num2 === 0) {
      return Infinity;
    }
    return num1 / num2;
  },
  multiply: function (num1, num2) {
    return num1 * num2;
  },
};

export default calculator;
