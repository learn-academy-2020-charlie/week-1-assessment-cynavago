// ASSESSMENT 1: Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

//create a function for boilingPoint of degrees
const boilingPoint = (degrees) => {
//create an if statement that determines if degrees are less than boiling point    
    if (degrees < 212){
//return using string interpolation
        return `${degrees} is below boiling point`
    }
//create an else if statement that determines if degrees are above boiling point  
    else if (degrees > 212){
//return using string interpolation        
        return `${degrees} is above boiling point`
    }
//create an if statement that determines if degrees are boiling point using
    else if (degrees === 212){
//return using string interpolation        
        return `${degrees} is at boiling point`
//return null if anything other than numbers are inputted 
    } else {
        return null
    }
}

//run temperature variables
console.log(boilingPoint(temp1));
console.log(boilingPoint(temp2));
console.log(boilingPoint(temp3));



// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

//create a function for the array
const multBy5 = (array) =>{
    //create a for loop for the array
    for(let i = 0; i<array.length; i++){
     //return and multiply each value at each index by 5. use *= to multiply each value at each index.
    array[i] *= 5;
    // return the array
    }
    return array;
}
//log results
console.log(multBy5(myNumbers1));


// // --------------------3) Create a function that multiplies each number in the array by 5 using map.
// // Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

//created a function with an array
const multipleBy5 = (array) => {
//used .map to multiple the array by 5 and return a new array
    return array.map (value => value*5)
}

console.log(multipleBy5(myNumbers2));


// --------------------4) Create a function that takes in an array and returns an array with only the values at odd indexes.
// Use the test variables provided below. Expected output: [ "Chai tea", "Mocha", "Double espresso" ]

var coffeeRun = ["Vanilla latte", "Chai tea", "Black coffee", "Mocha", "Americano", "Double espresso"]

//declare a function that takes in an array
const faveDrinks = (array) => {
//return the array with the higher order function .filter()
    return array.filter ((value, index) =>{
//return the values of the array that have an odd index        
        return index % 2 !== 0
    })
}

//log the function
console.log(faveDrinks(coffeeRun));


// // --------------------5) Create a function that removes all the vowels from a string.
// // Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

//declare a function with an array
const newString = (array) => {
    //we need to convert the string into an array using split() so we can apply .filter() later on
    let convertToArray = array.split("")
    //we use higher order function .filter() to get rid of vowels
    let noVowels = convertToArray.filter(value =>{
        return value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u"
    }
    )
    //convert the array back into a string and return the string
    return noVowels.join("")       
}

console.log(newString(stringWithVowels1));
console.log(newString(stringWithVowels2));



// // --------------------6) Expand the logic from #5 to inform your user if the variable passed into the vowel removal function is not a string.
// // Copy and paste or rewrite the function. Use the test variables provided below.


var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"
var stringWithVowels3 = true
var stringWithVowels4 = 42
var stringWithVowels5 = "CodingIsGreat"


//declare a function with an array
const newString2 = (array) => {
    // use type of to see if the array that user inputted is not a string, if its not, let user know its "not a string"
    if (typeof array !== "string"){
        return `Looks like ${array} is not a string. Plz try again.`
    // if it is a string, then continue onto the code below    
    } else {
    //we need to convert the string into an array using split() so we can apply .filter() later on
    let convertToArray = array.split("")
    //we use higher order function .filter() to get rid of vowels
    let noVowels = convertToArray.filter(value =>{
        return value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u" 
    }
    )
    //convert the array back into a string and return the string
    return noVowels.join("") 
}};      

console.log(newString2(stringWithVowels1));
console.log(newString2(stringWithVowels2));
console.log(newString2(stringWithVowels3));
console.log(newString2(stringWithVowels4));
console.log(newString2(stringWithVowels5));