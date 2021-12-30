function reverseArray(word){
  // const singleLetter = word.split("")
  // const reverseLetters = singleLetter.reverse()
  // const combineLetters = reverseLetters.join('')
  return word.split("").reverse().join('')
}
function isPalindrome(word) {
  // Write your algorithm here
  // reverse the word
  const reverseWord = reverseArray(word)
  return (word === reverseWord)
}

/* 
  Add your pseudocode here
  reverse the word
  check the word against the reversed word
  return true if matching 
  return false if not
*/

/*
  Add written explanation of your solution here
  Get the original word and reverse the word and then check it against the original word 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
