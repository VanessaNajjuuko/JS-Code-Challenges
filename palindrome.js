function firstPalindrome(words) {
    // Loop through the array
    for (const word of words) {
      // Check if the word is a palindrome
      if (isPalindrome(word)) {
        // If palindrome found, return it
        return word;
      }
    }
  
    // No palindrome found, return empty string
    return "";
  }
  
  // Helper function to check if a string is a palindrome
  function isPalindrome(str) {
    // Convert to lowercase for case-insensitive comparison
    const lowerCaseStr = str.toLowerCase();
  
    // Loop through half of the string (excluding middle character)
    for (let i = 0; i < lowerCaseStr.length / 2; i++) {
      const leftChar = lowerCaseStr[i];
      const rightChar = lowerCaseStr[lowerCaseStr.length - 1 - i];
  
      // Check if characters are not alphanumeric, skip them
      if (!/[a-z0-9]/.test(leftChar)) continue;
      if (!/[a-z0-9]/.test(rightChar)) continue;
  
      // Check if characters don't match, not a palindrome
      if (leftChar !== rightChar) {
        return false;
      }
    }
  
    // Loop completed, all characters match, it's a palindrome
    return true;
  }
  