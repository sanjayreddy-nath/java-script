// const url = "https://dummyjson.com/recipes";
const url = "https://dummyjson.com/recipes/meal-type/lunch";
async function getData() {
const data= await fetch(url)
const final=await data.json()
console.log(final)
}
getData()