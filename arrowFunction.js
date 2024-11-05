//task 1
const greet = (name) => `Hello, ${name}!`;
console.log(greet("yousef"));
//task 2
const performMath = (operation, firstNum, secondNum) => {
  return operation(firstNum, secondNum);
};
const addition = (firstNum, secondNum) => firstNum + secondNum;

console.log(performMath((firstNum, secondNum) => firstNum + secondNum, 58, 89));
///
const numbers = [23, 34, 59, 576];
let sum = 0;
sum = numbers.reduce((total, numbers) => {
  return total + numbers;
});
console.log(sum);
// task 3
let squares = [];
squares = numbers.map((number) => {
  return number ** 2;
});

console.log(squares);
