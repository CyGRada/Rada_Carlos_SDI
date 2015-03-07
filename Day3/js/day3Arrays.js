/*
Carlos Rada
03-07015
Section 00
Day 3 Arrays
 */
//alert("to make sure if it is linked")

//Create a basic
var avengersNames=["Thor" , "Hulk" , "Iron Man" , "Captain America"];

//Print Whole Array
console.log(avengersNames);

//Print out one specific item in the array
console.log(avengersNames[2]);

//Swap items in our Array
avengersNames[2]= "Black Widow";

console.log(avengersNames);

// Use a variable for the index number
var num = 3;
console.log(avengersNames[num]);

//Find the length of an array
// Length property = How many items are in the array.
// Dot syntax - fancy for use a period
console.log(avengersNames.length);

// Add an item to our array
avengersNames[4] = "Hawkeye";
avengersNames[avengersNames.length] = "Wolverine";

console.log(avengersNames);


//Picking Oranges
var orangesPick = [13, 350, 1000];

//How may oranges did we pick in total
var totalOranges = orangesPick[0] + orangesPick[1] + orangesPick[2] + orangesPick[3];
console.log("The total number of oranges is "+totalOranges+".");

var averageOranges = totalOranges / totalOranges.length;
console.log("The average number of Oranges pick per day is "+averageOranges+".");


