const reverse = (str) => {
    const iter = (i, acc) => {
      if (i < 0) {
        return acc;
      }
      return iter(i - 1, acc + str[i]);
    }
  
    return iter(str.length - 1, '');
  }