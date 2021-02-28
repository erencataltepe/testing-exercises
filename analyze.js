function analyze(numbers) {
  const total = numbers.reduce((pre, current) => pre + current);
  const average = total / numbers.length;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const length = numbers.length;

  return {
    average,
    min,
    max,
    length,
  };
}

export default analyze;
