
 /*
Carlos Rada
Section 00
Date: 3-14-15
Assignment Name: Loops Worksheet
 */

//alert("Just Testing");



// While Loops
 var trees = prompt("Enter amount of trees");
 while(isNaN(trees) || trees === ""){
     //Re prompt the user
     if(trees === ""){
         //The user left it blank
         trees = prompt("Please do not leave blank");

     } else if(isNaN(trees)){
         trees = prompt("Please enter only type in numbers. \n Enter a number.");
     }

 }

 while(trees <= 12){
     console.log("Number of trees");
     console.log(trees);

     trees+=1;
 }

// Do While Loops
var apples = 10;

 do{
     console.log("The number of apples is "+apples+".");

     apples++;

 } while(apples <= 50);



for(var seeds = 0; seeds <= 10; seeds++){
    if (seeds === 0){
        console.log(""+seeds+" seeds in the apple");
    } else if (seeds === 1){
        console.log(""+seeds+" seed in the apple");
    } else if (seeds === 2){
        console.log(""+seeds+" seeds in the apple");
    }
}



 // Validating prompts using while loops


 var wood = prompt("Enter the number of wood collected ");


 while(isNaN(wood) || wood === "") {
     //Re prompt the user
     if (wood === "") {
         //The user left it blank
         wood = prompt("Please do not leave blank");

     } else if (isNaN(wood)) {
         wood = prompt("Please enter only type in numbers. \n Enter a number.");
     }
 }



console.log(wood);