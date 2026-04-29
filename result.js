function checkResult(name, score) {

  if (score >= 50) {
    return name + " passed with a score of " + score;
  } else {
    return name + " failed with a score of " + score;
  }
}

let result1 = checkResult("Alice", 75);
let result2 = checkResult("Bob", 40);
let result3 = checkResult("Charlie", 50);

console.log(result1);
console.log(result2);
console.log(result3);