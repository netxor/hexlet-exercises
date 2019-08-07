// BEGIN (write your solution here)
const fizzBuzz = (begin, end) => {
    if (begin > end) {
      return 0;
    }
  
    if (begin % 3 === 0 && begin % 5 === 0) {
      console.log('FizzBuzz');
    } else if (begin % 3 === 0) {
      console.log('Fizz');
    } else if (begin % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(begin);
    }
  
    return begin + fizzBuzz(begin + 1, end);
  };
  
  export default fizzBuzz;
  // END