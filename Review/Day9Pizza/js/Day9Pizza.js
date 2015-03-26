
 /*
Carlos Rada
Section 00
Date:
Assignment Name:
 */

//alert("Just Testing");

 // Figure out how much pizza cost per slice and cost per sq in
 //Prompt the user fot the radius of the pizza

 var pizzaRadius = prompt("Welcome, lets calculate the cost of your pizza!  \n What  is the radius of your pizza.");

 //Validate
 while(pizzaRadius === "" || isNaN(pizzaRadius)){
     //Re prompt the user
     pizzaRadius = prompt("Please do not leave blank and only use numbers. \n What is the radius of your pizza.");

 }

 // Prompt the user for the of whole pizza
 do{
     var pizzaCost = prompt("How much does your pizza cost in total? \n Reminder please do not leave blank and only use numbers");

 } while (pizzaCost === "" || isNaN(pizzaCost));



//Prompt the user for how many slices are in their pizza

 do{
     var pizzaSilices = prompt("How many slices are in your pizza. \n Reminder only use numbers and do not leave blank");

 } while( pizzaSilices === "" || isNaN(pizzaSilices));


//Function call to lord function
 var results = lordFunction(pizzaRadius,pizzaCost,pizzaSilices);

 //console.log
 console.log("Your pizza cost $"+results[0]+" per sq inch or $"+results[1]+" per slice.");

 //Create a function that will run all the other functions
 function lordFunction(radius,cost,slices){
     // function will call the other 3 functions and the return the values

     //Call the area function and capture the answer
     var area = pizzaArea(radius);

     //call the function sqIn cost
     var areaCost = pizzaSqInCost(area,cost);

     //Call the function slices price
     var slicePrice = pricePerSlice(slices, cost);

     //Return these answers to our main code
     return [areaCost,slicePrice];


 }




 //Function that calculates the area of the pizza
 function pizzaArea(r){

     // area = r* r * Pi
     var area = r * r * Math.PI;
     return area;
 }

 //Function that calculates tge price per sq in of pizza
 function pizzaSqInCost(area,price) {
     // Price area
     var costPerSqIn = price / area;

     //We should round this number to 2 decimal places
     costPerSqIn = costPerSqIn.toFixed(2);

     return costPerSqIn;

 }



     //Function that calculates price per slice
 function pricePerSlice(slices,price){
     //price/slice
     var costPerSlice = price/slices;

     //Round t 2 decimals
     costPerSlice = costPerSlice.toFixed(2);
     return costPerSlice;
 }









































































