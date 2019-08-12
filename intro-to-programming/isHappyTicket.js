const isHappyTicket = (num) => {
    const iter = (i, j, firstPart, secondPart) => {
      if (i > String(num).length / 2) {
          console.log(firstPart);
          console.log(secondPart);
        if (firstPart === secondPart) {
          return true;
        }
        return false;
      }
      console.log(`i: ${i}`);
      console.log(`j: ${j}`);

      console.log(`firstPart: ${firstPart}`);
      console.log(`secondPart: ${secondPart}`);
  
      return iter(i + 1, j - 1, firstPart + parseInt(num)[i], secondPart + parseInt(num)[j]);
    }
  
    return iter(0, String(num).length - 1, '', '');
}

console.log(isHappyTicket(060006));