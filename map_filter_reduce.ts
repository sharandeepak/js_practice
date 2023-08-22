const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map((num) => num * 2);

const evenNumbers = numbers.filter((num) => num % 2 === 0);

const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log("Original Numbers:", numbers);
console.log("Doubled Numbers:", doubledNumbers);
console.log("Even Numbers:", evenNumbers);
console.log("Sum:", sum);
