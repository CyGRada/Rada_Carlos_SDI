
 /*
Carlos Rada
Section 00
Date: 3-17-15
Assignment Name:Day 7 Loop Arrays
 */

//alert("Just Testing");
// Tell each member of the Scooby Gang that they solved a mystery

 //Create an array of gang members
 var  names = ["Scooby Doo","Shaggy","Velma","Daphne", "Fred"];

 names.push("Scrappy")

 //Create for loop to cycle the array
 for(var i = 0; i<names.length; i++){
     console.log("You solved the case "+names[i]+"!")
 }

 //Keep tack of the our bills and get the total and average

 var bills = [50,10,5,20,10,60,70];

 //Create variable for total and average

 var total = 0;
 var average= 0;

 //create a variable to track the item total
 var numItems = 0;

 for(var j = 0; j < bills.length; j++){

     //Only add them if they are equal or over $15!
     if(bills[j] >= 15){

         //Add each bill to the total
         total += bills[j];
         numItems++
     }



 }

 console.log("The total is "+total+".");

 //Calculate the average
 average = total / numItems;
 console.log("The average is "+average+".")