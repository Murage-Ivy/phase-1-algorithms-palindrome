function isPalindrome(word) {
  // Write your algorithm here
  const newWord = word.toLowerCase()

  // reverses the string
  let reversedWord = newWord.split('').reverse().join('');

  if (newWord === reversedWord) {
    return true
  } else {
    return false
  }

}

/* 
  Add your pseudocode here
  define a variable to hold the passed string
   split the string using split('') method
  reverse of the string passed as an argument;
  Join the array of characters into one string
  Compare the passed string with the reversed string
  Return true if strings matches
  Return false if string does not match
*/

/*
  Add written explanation of your solution here
  to check if the string is palindrome 
  * Split the string into an array
  * Reverse the string using the reverse inbuilt method
  * Join the strings to using join() to form one string
  * compare the string that was passed as an arguement with the new string formed
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log('Expecting: true');
  console.log("=>", isPalindrome("a"));

  console.log('Expecting: true');
  console.log("=>", isPalindrome(""));

  console.log('Expecting: true');
  console.log("=>", isPalindrome("MOM"));

  console.log('Expecting: true');
  console.log("=>", isPalindrome("moM"));
}

module.exports = isPalindrome;