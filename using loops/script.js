function oddNumbers(number1, number2) {
  let result = "";

  for (let index = number1; index <= number2; index++) {
    if (index % 2 !== 0) {
      if (result == "") {
        result = result + index;
      } else {
        result = result + "," + index;
      }
    }
  }
  return result;
}

// TODO: Implement the oddNumbers function

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

/* Implement a charCount function.

 The function has a first parameter for a word which is a string.
 The function has a second parameter which contains the character to search for which is a string.
 Check if the second parameter consists of only one character, if not, quit the function.
 The function returns the number of times the character from the second parameter is present in the word.
 The function should be case insensitive. */

// TODO: Implement the charCount function

function charCount(word, char) {
  let charCount = 0;
  if (char.length !== 1) {
    return "wrong input";
  }

  for (let index = 0; index < word.length; index++) {
    if (word[index].toLowerCase() === char.toLowerCase()) {
      charCount += 1;
    }
  }
  return charCount;
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3 */
