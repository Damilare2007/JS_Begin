// Data types

//Strings
const fullName = "John Doe";

console.log('string:', fullName);

//Numbers
const numberData = 42;

console.log('number:', numberData)

//Booleans
const user = true;
const notUser = false;

console.log('boolean:', user, notUser);


//Array
const users = ['John', 'Jane', 'Doe'];
const numbers = [1, 2, 3, 4, 5];


//Printing Array
console.log('Array:', users, numbers);

//Accessing Array Elements
console.log ('First User:', users[0]);
console.log ('Second Number:', numbers[1]);

//Length of Array
console.log('User Length:', users.length);
console.log('Numbers Length:', numbers.length);

//Objects

//Creating Object
const person = {
    FirstName: 'John',
    LastName: 'Doe',
    age: 30,
    dob: '01-01-1990',
    isStudent: true
};

//Printing Object
console.log('Object:', person);
console.log('First Name:', person.FirstName);
console.log('Last Name:', person.LastName);

//concatenating First and Last Name
console.log('Full Name:', person.FirstName + ' ' + person.LastName);

//template literals
console.log(`My name is ${person.FirstName} ${person.LastName} and I am ${person.age} years old.`);

//Operators 
//Arithmetic Operators =
//Arithmetic Operators + - * / %

const addition = 5 + 3;
console.log('Addition:', addition);

const subtraction = 5 - 3;
console.log('Subtraction:', subtraction);

const multiplication = 5 * 3;
console.log('Multiplication:', multiplication);

const division = 5 / 3;
console.log('Division:', division);

const modulo = 14 % 5;
console.log('Modulo:', modulo);


//Comparism Operators == === != !==  >= <=  < >

const isGreater = 5 > 3;
console.log('Is 5 greater than 3?:', isGreater);

const isLesser = 20 < 3;
console.log('Is 5 less than 3?:', isLesser);

const greaterOrEqual = 3 >= 5;
console.log('Is 5 greater than or equal to 5?:', greaterOrEqual);

const doubleEqual = 7 == 9; 
console.log('Is 7 Double equal to "9"?:', doubleEqual);

const addTypes = 7 + '9';
console.log('Adding number and string:', addTypes);

const notSingleEquals = 7 != '7'
console.log('Is 7 not single equal to "7"?:', notSingleEquals);

//CONTROL FLOWS

//Conditionsl Statements

if(person.age >= 18){
    console.log(`${person.FirstName} is an adult.`);
} else if(person.age < 18){
    console.log(`${person.FirstName} is a Child.`);
}

if(!person.isStudent){
    console.log(`${person.FirstName} is not a student.`);
}else{
    console.log(`${person.FirstName} is a student.`);
}

//Multiple Conditions with and
if(person.age >= 18 && person.isStudent){
    console.log('He is in University.');
} else if(person.age <= 18 && person.isStudent){
    console.log('He is in High-School.');
} else if(person.age > 18 && person.age < 30 && !person.isStudent){
    console.log('He is married.');
}

//Multiple Conditions with or
if(person.age < 18 || !person.isStudent){
    console.log('He is either a Child or not a student.');
}


//LOOPS
//Repeats code a specific number of tume

//For loop
for(let i = 0; i < 10; i++){
    console.log('For Loop Iteration:', i);
}


// While Loop
let count = 1;

while(count <= 10){
    console.log('While Loop Count:', +count);

    count++;
}



//NEXT CLASS
//Functions and Array Methods

//What are functions?
//Functions is a block of code that carry a particular implementation or functionality. It is executed when "something" invokes it (calls it).

// Functions and Array Methods

// Funtions
// function addNumber(one, two) {
// 	return one + two
// }

// const subtractNumbers = (one, two) => one - two

// console.log(addNumber(5, 7))

// console.log(subtractNumbers(10, 7))

const calculateNumber = (first, second) => {
	// if (first > second) {
	// 	return first - second
	// } else {
	// 	return second - first
	// }
	return first > second ? first - second : second - first
}

console.log(calculateNumber(30, 105))

// Array methods
const users = ['Daniel', 'Michael', 'Lola', 'Niyi']

console.log(users)

// console.log(users.pop()) // Isolate the last item on the array
// console.log(users.slice(-1)) // Remove the last item from the array
// console.log(users.splice(-1))


