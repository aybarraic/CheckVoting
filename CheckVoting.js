function checkVotingEligibility(age) {
    if (age >= 18) {
      return "You are eligible to vote!";
    } else {
      return "Sorry, you are not eligible to vote yet.";
    }
  }
  
  // Example usage:
  const age1 = 25;
  const age2 = 16;
  
  console.log(checkVotingEligibility(age1)); // Output: "You are eligible to vote!"
  console.log(checkVotingEligibility(age2)); // Output: "Sorry, you are not eligible to vote yet."