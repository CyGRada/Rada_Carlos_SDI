
 /*
Carlos Rada
Section 00
Date:3-24-2015
Assignment Name:
 */

//alert("Just Testing");


 //Create a function that will give us a random integer between two values

 //Create variables for min and max values
 var min = prompt("Lets find a random number between two values. \n Please enter your min value.");
 //validate min value
 while(isNaN(min) || min === ""){
     min = prompt("Please do not leave blank and only use numbers. \n What is the min value.")
 }



 var max = prompt("Please enter your max value");
 while(isNaN(min) || max === "" || parseInt(max) <= parseInt(min)){

     if(isNaN(max)){
         max = prompt("Please only use numbers. \n What is the max value.")
     } else if(max === ""){
         max = prompt("Please do not leave blank. \n What is the max value.")
     } else if(parseInt(max) <= parseInt(min)){
         max = prompt("Please enter a higher number of "+min+". \n What is the max value.")
     }
 }

 // Function  Call
 var ranNum = getRandom(min,max);

 console.log("Your random number between "+min+" and "+max+" is "+ranNum+".")



 // Create our function
 function getRandom(min,max){

     //Generate a random integer
     var randomNumber = Math.round(Math.random()*(max-min) + parseInt(min));
     return randomNumber;

 }



 //15 random numbers - console.log them out

 for(var i = 0; i<15; i++){
     //This will give the same number 15 times
     //console.log(ranNum);

     console.log(getRandom(min,max));
 }




































































































































































































































