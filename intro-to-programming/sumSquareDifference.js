const square = (n) => {
    return n * n;
}

const squareSum = (n) => {
    const iter = (counter, acc) => {
      if (counter > n) {
          return square(acc);
      }

      return iter(counter + 1, acc + counter)
    }
    return iter(1, 0);
}

const sumSquare = (n) => {
    const iter = (counter, acc) => {
        if (counter > n) {
            return acc;
        }

        return iter(counter + 1, acc + square(counter));
    }
    return iter (1,0);
}

const sumSquareDifference = (n) => {
    return squareSum(n) - sumSquare(n);
}

console.log(sumSquareDifference(10));