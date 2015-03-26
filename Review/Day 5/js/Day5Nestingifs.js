
 /*
Carlos Rada
Section 00
Date: 3-12-15
Assignment Name: Nesting if's
 */

//alert("Just Testing");

 // Some Decisions Affect other decisions

 // If it is warm then lets go to the beach, if its not then lets go to the movies.

 //Get temperature
 var temp = prompt("We are going to figure out what we are doing today \n" +
 "What is the current temperature outside");
 while(isNaN(temp) || temp === ""){
     //Re prompt the user
     if(temp === ""){
         //The user left it blank
         temp = prompt("Please do not leave blank");

     } else if(isNaN(temp)){
         temp = prompt("Please enter only type in numbers. \n Enter a number.");
     }

 }

 //Validate that the user in something- did they live it blank
 if(temp === ""){
     //This code will run if the user types in nothing
     // Re prompt the user
     temp = prompt("Please do not leave this blank it is required. \nWhat is the current temperature outside.")
 }


 //Validate that the user type in a number
 //isNaN() - is it not a number returns a boolian

 console.log(isNaN(7)); //Gives us false
 console.log(isNaN("monkey")); //Gives us true


 if(isNaN(temp)){
     //This code will run if is Not number
     //reprompt the user for information
     //Give the user a 2 chance
     temp = prompt("Please only type in numbers and enter temperature outside");
     console.log("");

 }


 if (temp > 80){
     console.log("Lets go to the beach!");
     var waterTemp = prompt("What is the water temperature");

     //Validate water temp
     if(waterTemp === "" || isNaN(waterTemp)){
         // This code will run if the variable is blank or not a number
        waterTemp = prompt("Please do not leave blank and only use numbers. \n What is the water temperature?")
     }

     if (waterTemp > 75){
         console.log("Lets go swimming");

         var knowSwim = prompt("Do you know how to swim?");

         //Convert the text string to lower case
         //toLowerCase - dot syntax -use a period
         knowSwim = knowSwim.toLocaleLowerCase();


         //Lets validate know swim variable
         if(knowSwim != "yes" && knowSwim != "no"){
             //Re prompt
             knowSwim = prompt("Only type in yes or no");

             knowSwim = knowSwim.toLocaleLowerCase();

         }

         if(knowSwim == "yes"){
             console.log("no floaties needed ");
         } else{
             console.log("Get a floatie")
         }

     } else{
         console.log("Lets get a tan");
     }

 } else {
     console.log("Lets go to the movies");

     //Do we have any kids
     var kids = prompt("Are you bringing kids");
     //Validate
     //Convert to lower case
     kids = kids.toLocaleLowerCase();
     if(kids != "yes" && kids != "no"){
         //Re prompt
         kids = prompt("please enter only yes or no \n Are you bringing kids.");
         // Permantly convert lower case again
         kids = kids.toLocaleLowerCase();
     }


     // Test if have kids
     if(kids === "no"){
         console.log("Lets see 50 shades of Gray!");
     } else{
         console.log("Lets go see SpongeBob")
     }



 }

 //If the temp is above 75 lets go swimming, if not lets get a tan.

/* if (waterTemp > 75){
     console.log("Lets go swimming");
 } else{
     console.log("Lets get a tan");
 }
    */