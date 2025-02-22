// Map 5 Examples

const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);
//Output:[2, 4, 6, 8]

const fruits = ["apple", "banana", "cherry"];
const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperFruits);
//Output:['APPLE', 'BANANA', 'CHERRY']

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];
  const names = users.map((user) => user.name);
  console.log(names);
  //Output:['Alice', 'Bob', 'Charlie']

  const number1 = [2, 3, 4, 5];
const squares = number1.map((num) => num ** 2);
console.log(squares);
//Output:[4, 9, 16, 25]

const animals = ['lion', 'bird'];
const pluralAnimals = animals.map(animal => animal + 's');
console.log(pluralAnimals);
//Output:['lions', 'birds']


// filter 5 Examples:

const number = [1, 2, 3, 4, 5, 6,];
const evenNumbers = number.filter(num => num % 2 === 0);
console.log(evenNumbers);
//Output: [2, 4, 6]

const words = ['hi', 'hello'];
const longWords = words.filter(word => word.length > 3);
console.log(longWords);
//Output: ['hello']

const products = [
    { name: 'Laptop', available: true },
    { name: 'earphones', available: true },
    { name: 'Tablet', available: false }];
const availableProducts = products.filter(product => product.available);
console.log(availableProducts);
// Output:[
//     { name: 'Laptop', available: true },
//     { name: 'earphones', available: true }
//   ]

const number3 = [-1, 1, 2, -3, -4];
const positiveNumbers = number3.filter(num => num > 0);
console.log(positiveNumbers);
//Output:[1, 2]

const mixedArray = [20, null, undefined, 'sanjay',];
const validValues = mixedArray.filter(item => item != null);
console.log(validValues);
//Output:[20, 'sanjay']

// forEach 5 Examples:

const colors = ['yellow', 'red', 'blue'];
colors.forEach(color => console.log(color));
//Output:
// yellow
//red
//blue


const num= [10, 20, 30];
let sum = 0;
number.forEach(num => sum += num);
console.log(sum);
//Output:60

const a = [
    { name: 'sanjay', age: 28 },
    { name: 'rohan', age: 35 }
  ];
  a.forEach(b => b.age += 1);
  console.log(a);
  //Output:[ { name: 'sanjay', age: 29 }, { name: 'rohan', age: 36 } ]

  const num1 = 
  [1, 2, 3,];
  num1.forEach((num, index, arr) => arr[index] = num * 2);
  console.log(num1); 
 //Output:[ 2, 4, 6, 8 ]