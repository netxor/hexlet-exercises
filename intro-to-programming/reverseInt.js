const reverseInt = (num) => {
    const iter = (i, acc) => {
      if (i < 0) {
        return acc;
      }

      return iter(i - 1, acc + String(num)[i]);
    }
    return iter(String(num).length - 1, '');
}

  console.log(reverseInt(1996));