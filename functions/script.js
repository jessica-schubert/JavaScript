// TODO: implement welcomeMsg function

function welcomeMsg(a) {
  return "Welcome " + a + "!";
}

console.log(welcomeMsg("Jane"));
// Welcome Jane!

console.log(welcomeMsg("Marc"));
// Welcome Marc!

// TODO: implement calcGrossPrice function

function calcGrossPrice(a, b) {
  return a * b + a;
}

console.log(calcGrossPrice(20, 0.19));
// result should be 23.8

console.log(calcGrossPrice(40, 0.16));
// result should be 46.4

// TODO: Implement the addPositive function

function addPositive(a, b) {
  return Math.abs(a) + Math.abs(b);
}

console.log(addPositive(2, 3));
// result1 should be 5

console.log(addPositive(3, -5));
// result2 should be 8

console.log(addPositive(-1, -8));
// result2 should be 9
