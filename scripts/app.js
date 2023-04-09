// Day 1 - 6 April
// alert ("Bano Qabil")
// document.write("<h1>hello<h1>")
// console.log(123)

// var name = 'Mutiba Akram'
// var age = 18
// console.log(name) 

// alert('hello'+ 'name'+'kese ho'+ 'age)
// document.write( "<h1>hello" + age + "</h1>")
// console.log(typeof age)

// console.log(2+5)
// console.log(2-5)
// console.log(2*5)
// console.log(2/5)
// console.log(2**5)

// var exp = (8 + (7 / 9) - (10 / 7) * (4 - 6)) + 4

// var age = +prompt( "Your age Please")
// var age1 = +prompt( "Your Father age Please")
// console.log( age+ age1)

// console.log (Number(age)+ Number(age1))





var zakat_Percentage = 0.025;

var user_Input = +prompt( "Enter your total wealth of zakat calculation: " );

// user_Input = parseInt(user_Input);

console.log( typeof Number (user_Input));

var result = zakat_Percentage * user_Input;

alert( "Your Zakat value is" + result);

