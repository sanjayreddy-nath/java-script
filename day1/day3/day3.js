// Question 1
var arr =  ["Alice", "Bob", "Charlie", "David"]
arr.unshift("maxi")
arr.pop()
arr.includes("Bob")
console.log(arr); 
// OUTPUT: [ 'maxi', 'Alice', 'Bob', 'Charlie' ]

// Question 2
var str ="Learn,Practice,Improve"
console.log(str.split("").reverse( ).join("")); 
// OUTPUT: evorpmI,ecitcarP,nraeL

// Question 3
var a=["Song1", "Song2", "Song3"] 
var b=["Song4", "Song5"]
a=a.concat(b)
a.shift()
a.push("song6")
console.log(a); 
// OUTPUT: [ 'Song2', 'Song3', 'Song4', 'Song5', 'song6' ]

// Question 5
var movies= ["Inception", "Titanic", "Avatar", "Interstellar", "Gladiator"]
movies=movies.slice(1,4).concat(["The Matrix", "The Godfather"]).reverse()
console.log(movies); 
// OUTPUT: [ 'The Godfather', 'The Matrix', 'Interstellar', 'Avatar', 'Titanic' ]

// Question 7
var str=("John,Doe,Jane,Smith")
str=str.split(",")
str1=str.includes("Jane")
console.log(str1); 
// OUTPUT: true
var str2=str.reverse().join(" ")
console.log(str2); 
//OUTPUT: Smith Jane Doe John

// Question 8
var arr=[1, 2, 3, 4, 5]
arr.shift();
arr.push(6,7);
arr.length;
console.log(arr); 
// OUTPUT: [ 2, 3, 4, 5, 6, 7 ]

// Question 9
var arr=["Milk", "Bread", "Eggs", "Butter"]
arr.includes("Eggs");
arr.pop()
arr.push("Cheese","Juice")
console.log(arr);
 // OUTPUT: ['Milk', 'Bread', 'Eggs', 'Cheese','Juice']

// Question 10
var a = ["Alice", "Bob", "Charlie"]
var b = ["David", "Eve"]
a = a.reverse().concat(b)
a.unshift("Frank")
console.log(a);
 // OUTPUT: ['Frank', 'Charlie', 'Bob', 'Alice', 'David', 'Eve']

// Question 11
var arr=["Milk", "Bread", "Eggs", "Butter"]
var a = arr.indexOf("Eggs")
arr [a]="Cheese"
arr.unshift("Juice")
console.log(arr);
// OUTPUT: ['Juice', 'Milk', 'Bread', 'Cheese', 'Butter']