// First Attempt

// function reverseString(str) {
//   // type your code here
//   const splitString = str.split("")
//   const newArr = []
//   for (let i = -1; i >= -Math.abs(splitString.length) ; i--) {
//     newArr.push(splitString[splitString.length - Math.abs(i)])
//   }
//   return newArr.join('')
// }

// Second Attempt

function reverseString(str) {
  // type your code here
  return str.split('').reverse().join('')
}

// reverseString('poopy')

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}


module.exports = reverseString;

// Please add your pseudocode to this file

/******************** First Attempt ************************
 * create an array of the str split into individual letters
 *
 * create a new array to hold the new str
 *
 * iterate backwards through the array
 *    in each iteration pass each letter into a new array
 *
 * join the letters together again and return the str
 * *******************************************************/

/******************** Second Attempt **********************
 * the same idea as the first attempt, but using array methods
 * 
 * split, reverse, and join the string in place and return it
 * 
 * *******************************************************/

// And a written explanation of your solution

/******************** First Attempt ***********************
 * I know that the join method will break a string down into
 * an array. Once In have that I could iterate through the array
 * string from the end of the array and add the letters to a new
 * array. Then you would end up with an array with all of the letters
 * in the reverse order, and then join the string back together and
 * return it.
 * *******************************************************/

/******************** Second Attempt ***********************
 * once I finished the first attempt I realized there was
 * also a reverse array method. I figured I have a string method
 * and two array methods, why not daisy chain them together.
 * *******************************************************/



/******************** Afterthoughts *************************
 * after looking at the solution code, I have a few ideas about
 * what I got and what they have.
 * 
 * In my approach the split, reverse and join methods all have
 * a run time complexity of O(n) resulting in a total runtime
 * of O(n + n + n) which is O(3n). Dropping the constant we end
 * up with O(n).
 * 
 * In the solution code, they use a for loop with also has an
 * iterative runtime of O(n). This approach concatenates each letter to
 * an empty string backwards to build the reversed string.
 * 
 * In my appraoch split and reverse will be creating intermediate arrays
 * while the for loop skips the need for them. They both have a runtime
 * of O(n), but concatenation is more efficient.
 * *********************************************************/