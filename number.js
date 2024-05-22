function addDigits(num) {
    // Handle negative numbers by converting to positive and potentially adding 9 at the end
    if (num < 0) {
      const absNum = Math.abs(num);
      const singleDigit = addDigits(absNum);
      return (singleDigit === 0) ? -9 : -singleDigit;
    }
  
    // Loop until the number has only one digit
    while (num >= 10) {
      let sum = 0;
      // Add digits of the current number
      while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
      }
      // Update num to the sum of digits
      num = sum;
    }
  
    // Return the single digit result
    return num;
  }
  