// String methods

var str1="    sanjay"
var str2="reddy    "
str1=str1.trimStart()
str2=str2.trimEnd()
console.log(str1.concat(str2).toUpperCase())
// output:- SANJAYREDDY

var str="SANJAYREDDY"
str=str.slice(3,6)
console.log(str.length-1);
console.log(str.toLowerCase());
// output:-2/ jay

var char="K"
var a=char.concat("sanju")
a=a.toUpperCase()
console.log(a.slice(-2,-1))
// output:- J

var s1="sanjay"
var s2="reddy"
s1=s1.slice(0,3)
s2=s2.slice(-3)
var s12= s1.concat(s2)
s12=s12.at(0).toUpperCase()+s12.at(s12.length-1).toUpperCase()
console.log(s12);
// output:- SY

var astr= "        manoj      "
astr=astr.trim()
astr=astr.at(0).toUpperCase()+astr.slice(1,astr.length-1)+astr.at(astr.length-1).toUpperCase()
console.log(astr);
// output:- ManoJ

var hello = "hello there , how are you"
hello=hello.split(" ")
hello=hello.indexOf("are")
console.log(hello);
// output:- 4


//object methods

var person = { firstname:"sanjay",lastname:"reddy", age:21}
console.log(person.firstname); // OUTPUT: sanjay
person.city="new york"
console.log(person);
// output:{firstname: 'sanjay', lastname: 'reddy', age: 21, city: 'new york'}


var product={name:"laptop",price:"$550",instock:true}
product.price="$700"
delete product.instock
console.log(product);
// output:{name: 'laptop', price: '$700'}


var library={fantasy:["Booka","Bookb"],mystery:["Bookc","Bookd"]}
library.scienceFiction=["Booke","Bookf"]
console.log(library.fantasy[0]); 
// output:Booka
delete library.mystery
console.log(library);
// output: No debugger available, can not send 'variables'

var user={username:"Sagar",email:"sanjay1@gmail.com", address:{city:"hyd",state:"ts",zipcode:500077}}
Object.freeze(user)
user.email="sanjay1@gmail.com"
console.log(Object.isFrozen(user));
 // output: true
user.phone=1236549877
console.log(user);
// output: {username: 'Sagar', email: 'sanjay1@gmail.com', address: {…}}


var car={make:"tesla" , model:"x", price:2000000}
Object.seal(car)
delete car.make
console.log(Object.isSealed(car));
//output: true 
console.log(car);
//output: {make: 'tesla', model: 'x', price: 2000000}
