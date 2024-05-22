function fizzBuzz(str1, str2) {
    // Calculate the combined length of the strings
    const combinedLength = str1.length + str2.length;
  
    // Check divisibility by 15 (both 3 and 5)
    if (combinedLength % 15 === 0) {
      return "FizzBuzz";
    }
  
    // Check divisibility by 3
    if (combinedLength % 3 === 0) {
      return "Fizz";
    }
  
    // Check divisibility by 5
    if (combinedLength % 5 === 0) {
      return "Buzz";
    }
  
    // No match, return empty string
    return "";
  }