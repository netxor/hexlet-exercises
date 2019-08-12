const invertCase = (str) => {
    const iter = (i, acc) => {
        const lower = str.charAt(i).toLowerCase();
        const upper = str.charAt(i).toUpperCase();

      if (i > str.length) {
        return acc;
      }
      return iter(i + 1, (upper ? (acc + lower) : (acc + upper)));
    }
  
    return iter(0, '');
}

console.log(invertCase('Hello, World'));