// TODO: Implement the removeItem function
/* The first parameter is an array.
The second parameter is a number. It's the non-zero-based index of the item that should get deleted.
Remove the item and return an array.
Ensure that the original array was not mutated. */

function removeItem(array, numberOfItem) {
  const removeItem = array.slice();
  removeItem.splice(numberOfItem - 1, 1);
  return removeItem;
}

const ainmals = ["Dog", "Cat", "Lion"];
console.log(removeItem(ainmals, 1));
// result should be: ["Cat", "Lion"]

console.log(ainmals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

/* Implement a sumOfCharacters function.

 The function has one parameter, which is an array.
 Check the type of each array entry. If it's a string then store the count of characters.
 The function returns the total sum of all characters. */

function sumOfCharacters(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    if (typeof array[index] == "string") {
      sum += array[index].length;
    }
  }
  return sum;
}

/* let sum = 0;
for(...) {
  sum += ...;
}
return sum */

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55 */
