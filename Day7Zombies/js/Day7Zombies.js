
 /*
Carlos Rada
Section 00
Date:
Assignment Name:Day 7 Zombies
 */

//alert("Just Testing");


 //ZOMBIE ATTACK

 //We have accidentally created a zombie at full sail
 //A zombie can bite four people a day and turn them into zombies the next day
 //The CDC wants to know how many zombies there will be in 8 days

 //Givens that we know

 //How many zombies do we have
 var numZombies = 1;

 //How many bites per Zombies per day
 var numBites = 4;

 //Number of days that the CDC wants
 var days = 8;


 //Create for loop to calculate Zombie number

 for (var i = 1; i<= days; i++){

     // How many new zombies get made every day
     var newZombies = numZombies * numBites;

     //Add the new zombies to our existing horde
     numZombies+= newZombies;

     //console.log results
     
     console.log("There are "+numZombies+" number of zombies on day # "+i+"!")

 }