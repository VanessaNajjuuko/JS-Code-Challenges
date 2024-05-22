function getAgeGroup() {
    // Get current year
    const currentYear = new Date().getFullYear();
  
    // Prompt user for birth year
    const birthYear = parseInt(prompt("Enter your year of birth: "));
  
    // Calculate age
    const age = currentYear - birthYear;
  
    // Check age group and print message
    if (age < 18) {
      console.log("You are a minor.");
    } else if (age >= 18 && age <= 36) {
      console.log("You are a youth.");
    } else {
      console.log("You are an elder.");
    }
  }
  
  // Call the function to run the program
  getAgeGroup();