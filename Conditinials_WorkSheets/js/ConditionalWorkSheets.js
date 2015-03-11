
 /*
Carlos Rada
Section 00
Date:
Assignment Name: Conditional WorkSheets
 */

//alert("Just Testing");

 // Group 1 Last Chance for Gas

 // Given; Gas Efficiency(mpg), Gas Tank Gauge (%), Gas Tank Capacity (gallons)

 //miles per gallon
 //var mpg = prompt("Enter Miles per Gallon");

 // Gas Tank Gauge % now
 //var gasPercentageLeft = prompt("Enter Gas Gauge % left");

 // Gas Tank gallon capacity
 //var totalGallonsCar = prompt("Enter total gallons car can hold");


 // gallons left in car
 //var gallonsLeft = (gasPercentageLeft / 100) * totalGallonsCar;

 //Miles Left car can travel with gas % left
 //var travelMileageLeft = gallonsLeft * mpg;

 //var car;

 //car = (travelMileageLeft >= 200) ? "Keep Going" : "Stop for Gas";
 //console.log("You should "+car+". You have "+gallonsLeft+" gallons left.");



//alert("You should "+car+". You have "+gallonsLeft+" gallons left.");



// Group 2 Check The Login

 //Givens

// var userName = prompt("Enter user name");
//var password = prompt("Enter Password");
 //var userName2 = prompt("Enter user name");
 //var password2 = prompt("Enter user name");

 //var correctUserName = userName2;
 //var correctPassword = password2;


 //var outcome;

 //if(userName===correctUserName && password===correctPassword){
    // console.log("“Welcome, "+correctUserName+"!” - the username and password is correct");
 //} else if (userName != correctUserName && password != correctPassword){
     //console.log("User Name and Password are Incorrect");
 //} else if (userName != correctUserName && password === correctPassword){
   //  console.log("User not found. Try again.");
 //} else if(userName===correctUserName && password != correctPassword){
   //  console.log("Password does not match our records.");
 //}

//Group 3 Tire Pressure

 //Givens

 var frontLeft = prompt("Enter psi for front left tire.");
 var frontRight = prompt("Enter psi for front right tire.");
 var backLeft = prompt("Enter psi for back left tire.");
 var backRight = prompt("Enter psi for back right tire.");

 var tires = [frontLeft,frontRight,backLeft,backRight];

 var result;

 result = (tires[0] === tires[1] && tires[2] === tires[3]) ? "Tires pass inspection" : "Get your tires checked out!";
 console.log(result);
















