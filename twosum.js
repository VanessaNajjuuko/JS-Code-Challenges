function twoSum(nums, target) {
    // Create an object to store seen values and their indices
    const seen = {};
  
    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
      const currentNum = nums[i];
      const neededPart = target - currentNum;
  
      // Check if the complement (needed part) exists in the hash map
      if (seen.hasOwnProperty(neededPart)) {
        // If found, return the indices of the current number and the complement
        return [seen[neededPart], i];
      }
  
      // Add the current number and its index to the hash map for future lookups
      seen[currentNum] = i;
    }
  
    // No solution found
    return [];
}