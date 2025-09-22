//ASSIGNMENT
// The Challenge: The Age Checker 🎂
// ​Write a JavaScript function called checkAge that takes one argument: a number representing a person's age. The function should perform the following checks:
// ​Requirements
// ​If the age is less than 18, the function should return the string "You are a minor."
// ​If the age is between 18 and 64 (inclusive of both), the function should return the string "You are an adult."
// ​If the age is 65 or older, the function should return the string "You are a senior citizen."
// ​Example Usage and Output

// console.log(checkAge(16)); // Expected output: "You are a minor."
// console.log(checkAge(45)); // Expected output: "You are an adult."
// console.log(checkAge(72)); // Expected output: "You are a senior citizen."
 
//SOLUTION
// The Age Checker 🎂

//Creating a function
function checkAge(age) {

    //Checking Conditions
    if(age < 18){
        return "You are a minor.";
    } else if(age >= 18 && age <= 64){
        return "You are an adult.";
    } else if(age >= 65){
        return "You are a senior citizen.";
    }
}

//Example Usage and Output
console.log(checkAge(16)); 
console.log(checkAge(45)); 
console.log(checkAge(72));



//ASSIGNMENT
// Create a function that calculates the age of a person when they input their year of birth

function calculateAge(yearofbirth){
    const currentYear = new Date().getFullYear();

    const age = currentYear - yearofbirth;

    return age;

}

console.log('Age if born in 2000:', calculateAge(2000));
console.log('Age if born in 2005:', calculateAge(2005));
console.log('Age if born in 2025:', calculateAge(2025));