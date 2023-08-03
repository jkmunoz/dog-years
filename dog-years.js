// This is my age. It is a var because it will change when converted to dog years. 
var myAge = 29;

// This is my age in the first two years of life. 
var earlyYears = 2;

earlyYears *= 10.5;

// Since we are account for the first two years of life with 'earlyYears' we will take
//   it out of 'myAge'.
// The remaining numerical value of my life-lived is stored in 'laterYears'.
laterYears = (myAge - 2);

// Multiplies my remaining years with 4 to convert to dog years and assigned to 'laterYears'
//   variable. 
laterYears *= 4;

// Adds my first two years with later years to get my age in dog years. 
const myAgeInDogYears = earlyYears + laterYears;

// prints my name in all lowercase letters. 
const myName = 'Julianna'.toLowerCase();

// This string displays the name and age of a person in dog years. To change this data you
//   would simply need to change the 'myAge' and 'myName'. The code works out the rest. 
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is 
${myAgeInDogYears} years old in dog years.`);