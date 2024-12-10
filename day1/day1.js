
//  Voting Eligibility
var age =prompt("Enter your age: ");
if (age>=18){
    console.log("Your are eligible to vote")
}else{
    console.log("your are not eligible to vote")
}

// output: >-- 
// age=18 your are eligible to vote
// age=17 your are not eligible to vote    


//  Marriage Eligibility
var gender=prompt("Enter your gender: ");
var age = prompt("Enter your age: ");
if (gender=='male'){
    if (age>=21){
        console.log("Your are eligible for marriage")
    }else{
        console.log("Your are not eligile for marriage")
    }
}else{
    if (age>=18){
        console.log("Your are eligible for marriage")
    }else{
        console.log("Your are not eligile for marriage")
    }
}

// OUTPUT: >--

    // gender = 'male' , age = 25 ==> returns:- Your are eligible for marriage
    // gender = 'male' , age = 16 ==> returns:- Your are not eligible for marriage

    // gender = 'female' , age = 19 ==> returns:- Your are eligible for marriage
    // gender = 'female' , age = 15 ==> returns:- Your are not eligible for marriage


    //  Driving License Eligibility..

var age = prompt("Enter your age: ");
if (age>=18){
    console.log("person is eligible to apply for a driving license.")
}else{
    console.log("person is not eligible to apply for a driving license.")
}
//OUTPUT:>--

    // age = 22 ==> returns:- person is eligible to apply for a driving license.
    // age = 15 ==> returns:- person is not eligible to apply for a driving license.

//  Exam Eligibility..

var marks = prompt("Enter your marks: ");
if (marks>=75){
    console.log("student is eligible to appear for an exam")
}else{
    console.log("student is not eligible to appear for an exam")
}
//OUTPUT: >--

    // marks = 70 ==> returns:- student is not eligible to appear for an exam
    // marks = 85 ==> returns:- student is eligible to appear for an exam

//  Senior Citizen Discount Eligibility

var age = prompt("Enter your age: ");
if (age>=60){
    console.log("person eligible for a senior citizen discount")
}else{
    console.log("person not eligible for a senior citizen discount")
}

// OUTPUT: >--

    // age= 65 ==> returns:- Person eligible for a senior citizen discount
    // age= 50 ==> returns:- Person not eligible for a senior citizen discount