
 /*
Carlos Rada
Section 00
Date:3-24-15
Assignment Name: Functions Assignments
 */

//alert("Just Testing");

//  How much will it cost to put tile in your leaving room floor.



//User prompts
 var squareFeetInLivingRoom  = prompt("Lets find out how much it will cost to get your carpet replaced with tile. \n Enter how many square feet are in your leaving room");

 //Validate
 while(isNaN(squareFeetInLivingRoom) || squareFeetInLivingRoom === ""){
     squareFeetInLivingRoom = prompt("Please do not leave blank and only use numbers. \n How many squared feet are in your leaving room.");
 }
squareFeetInLivingRoom = parseInt(squareFeetInLivingRoom);

 var priceOfTile = prompt("Enter the price of the tile choose per square foot");

 //validate
 while(isNaN(priceOfTile) || priceOfTile === ""){
     priceOfTile = prompt("Please do not leave blank and only use numbers. \n What is the price of the tile.");
 }
priceOfTile = parseInt(priceOfTile);

 var laborCost = prompt("Enter how much you are being charged for labor");

 //validate
 while(isNaN(laborCost) || laborCost === ""){
     laborCost = prompt("Please do not leave blank and only use numbers. \n What is the labor cost you are being charged.");
 }
laborCost = parseInt(laborCost);

 //TEST I checked that that prompts where correctly done and didn't allow the user to continue with out getting it correct.

 // Functions

 function costPerSquareFoot(f,p){
     var priceMaterial = f*p;
     return priceMaterial;
 }

 var price = costPerSquareFoot(squareFeetInLivingRoom,priceOfTile);
 console.log(price);



 function finalPrice(f,p){
     var total = f+ p;
     return total;
 }

 var final = finalPrice(price,laborCost);
 console.log("It will cost you "+final+" to get your carpet replaced with tile");


// I have tested this functions on my calculator by using 1200 square foot living room and a 4 dollar tile pqf price tag with labor costing 200 dollars
 //the answer was 5000 dollars.




 var doItYourself =  function (p,t){
     cheaperPrice = p*t;
     return cheaperPrice;
 }

console.log("It will cost you "+doItYourself(priceOfTile,squareFeetInLivingRoom)+" to do it your self");




//I tested by doing labor cost minus price of tile to do it yourself






















