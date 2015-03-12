
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
 var temp = 680;

 var waterTemp = 74;

 if (temp > 80){
     console.log("Lets go to the beach!");

     if (waterTemp > 75){
         console.log("Lets go swimming");
         var knowSwim = "yes";
         if(knowSwim == "yes"){
             console.log("no floaties needed ");
         }
     } else{
         console.log("Lets get a tan");
     }

 } else {
     console.log("Lets go to the movies");

     //Do we have any kids
     var kids = "no";
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