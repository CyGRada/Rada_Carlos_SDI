/*
Carlos Rada
Section 00
3-7-15
Day 3 prompt
 */

alert("Just Testing");

//Ask the user for input
// prompt("text that the user will")

var userInput = prompt("user input");
while(isNaN(userInput) || userInput === ""){
    //Re prompt the user
    if(userInput === ""){
        //The user left it blank
        userInput = prompt("Please do not leave blank");

    } else if(isNaN(userInput)){
        userInput = prompt("Please enter only type in numbers. \n Enter a number.");
    }

}



console.log(userInput);

//Calculate Area of Rectangle
//Length * width

//Prompt user for the width and height.
//Explain to them whats going on.
var height = prompt("Lets calculate the area of a rectangle! \n Please enter the height of the rectangle.");

var width = prompt("Please enter the width of the rectangle.");

var area = height * width;
console.log("The are of the rectangle with a height of "+height+" and a width of "+width+" is "+area+".");

var results = "The results of the area are "+area+"
console.log(results);
