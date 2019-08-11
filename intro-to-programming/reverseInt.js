const reverseInt = (num) => {
    const iter = (i, acc) => {
      if (i < 0 && num > 0) {
          return parseInt(acc);
      } else if (i < 0 && num < 0) {
          return parseInt(`-${acc.slice(0, acc.length - 1)}`);
      }

      return iter(i - 1, acc + String(num)[i]);
    }
    return iter(String(num).length - 1, '');
}

  console.log(reverseInt(-332));