// const url = "https://dummyjson.com/recipes";
// 1)Write a program where you need to log the all products data 
const url = "https://dummyjson.com/products";
async function getData() {
const data= await fetch(url)
const final=await data.json()
console.log(final)
}
getData()

// 2)Write a program where you need to log single product data 
// const url = "https://dummyjson.com/products/20";
// async function getData() {
// const data= await fetch(url)
// const final=await data.json()
// console.log(final)
// }
// getData()

// 3)Write a program where you need to log all categories list in the api 
// const url = "https://dummyjson.com/products/categories";
// async function getData() {
// const data= await fetch(url)
// const final=await data.json()
// console.log(final)
// }
// getData()

// 4)Write a program to sort the elements in the array based on the title 
// const url = "https://dummyjson.com/products?sortBy=title&order=asc";
// async function getData() {
// const data= await fetch(url)
// const final=await data.json()
// const sortProducts = final.products.sort((x,y) => x.title.localeCompare(y.title));
// console.log(sortProducts)
// }
// getData()







// 5)Write a program to sort the elements in the array based on the title and asc order

// const url = "https://dummyjson.com/products?sortBy=title&order=asc";
// async function getData() {
// const data= await fetch(url)
// const final=await data.json()
// console.log(final)
// }
// getData()

// 6)Write a program to get the products based on specific category ( ex. Mobiles, watches like that ) 
// const url = "https://dummyjson.com/products/category/Beauty";
// async function getData() {
// const data= await fetch(url)
// const final=await data.json()
// console.log(final)
// }
// getData()

// 7)Write a program to write to get all the quotes in the same api link
// const url = "https://dummyjson.com/quotes";
// async function getData() {
// const data= await fetch(url)
// const final=await data.json()
// console.log(final)
// }
// getData()

// 8)Write a program to get single quote
// const url = "https://dummyjson.com/quotes/5";
// async function getData() {
// const data= await fetch(url)
// const final=await data.json()
// console.log(final)
// }
// getData()

// 9) Write a program to get only 10 quotes in console (limit the range ) 
// const url = "https://dummyjson.com/quotes/?limit=10";
// async function getData() {
// const data= await fetch(url)
// const final=await data.json()
// console.log(final)
// }
// getData()

// 10)Write a program to get all the recipes in console 
// const url = "https://dummyjson.com/recipes";
// async function getData() {
// const data= await fetch(url)
// const final=await data.json()
// console.log(final)
// }
// getData()







// 11)Write a program to sort the recipe based on the meal-type 

// const url = "https://dummyjson.com/recipes/meal-type/lunch";
// async function getData() {
// const data= await fetch(url)
// const final=await data.json()
// console.log(final)
// }
// getData()