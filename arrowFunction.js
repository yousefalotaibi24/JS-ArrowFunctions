//task 1
const greet = (name) => `Hello, ${name}!`;
console.log(greet("yousef"));
//task 2
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
