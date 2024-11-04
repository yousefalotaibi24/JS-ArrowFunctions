const greet = (name) => `Hello, ${name}!`;
console.log(greet("ali"));

const numbers = [23, 34, 59, 576];
let sum = 0;
sum = numbers.reduce((total, numbers) => {
  return total + numbers;
});
console.log(sum);

let squares = [];
squares = numbers.map((number) => {
  return number ** 2;
});

console.log(squares);
