const sumSquareDifference = (n) => {
  const iter = (current, acc, n) => {
    if (current > n) {
      return acc;
    }

    return iter(current + 1, acc += current * current, n);
  }
  return iter(1, 0, n);
}

console.log(sumSquareDifference(10));