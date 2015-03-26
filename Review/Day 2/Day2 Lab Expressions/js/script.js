/*
Carlos Rada
03/05/2015
Section 00
Day3 Lab Expressions
*/

alert("Text that the user will see.");



// Calculate slices per pizza
var slicesPizza = prompt("Enter slices of pizza");
while(isNaN(slicesPizza) || slicesPizza === ""){
    //Re prompt the user
    if(slicesPizza === ""){
        //The user left it blank
        slicesPizza = prompt("Please do not leave blank");

    } else if(isNaN(slicesPizza)){
        slicesPizza = prompt("Please enter only type in numbers. \n Enter a number.");
    }

}


// Number of people at the party
var peopleParty = prompt("Enter people at party");
while(isNaN(peopleParty) || peopleParty === ""){
    //Re prompt the user
    if(peopleParty === ""){
        //The user left it blank
        peopleParty = prompt("Please do not leave blank");

    } else if(isNaN(peopleParty)){
        peopleParty = prompt("Please enter only type in numbers. \n Enter a number.");
    }

}

//Number of Boxes of pizza ordered
var boxesPizza = prompt("Enter boxes of pizza");
while(isNaN(boxesPizza) || boxesPizza === ""){
    //Re prompt the user
    if(boxesPizza === ""){
        //The user left it blank
        boxesPizza = prompt("Please do not leave blank");

    } else if(isNaN(boxesPizza)){
        peopleParty = prompt("Please enter only type in numbers. \n Enter a number.");
    }

}

//Total slices of pizza
var totalSlices = slicesPizza * boxesPizza;

//slices of pizza per person
var pizzaPer = totalSlices /peopleParty;
console.log(pizzaPer);
//Output Area
console.log("each person ate "+pizzaPer+" slices of pizza");

//How many slices of pizza did sparky eat
var leftovers = totalSlices % peopleParty;
console.log(leftovers);
//Output Area
console.log("Sparky ate "+leftovers+" full slices of pizza");

//5 weekly groceries bills
var week1 = 104;
var week2 = 150;
var week3= 70;
var week4 = 60;
var week5  = 175;
//Total Spent on groceries
var totalSpentGroceries = week1 + week2 + week3 + week4 + week5;
//Average spent weekly
var averageSpentWeekly = totalSpentGroceries / 5;
console.log(averageSpentWeekly);
console.log("this is the "+totalSpentGroceries+" you spent in 5 weeks an this is the "+averageSpentWeekly+" through 5 weeks");

//Calculated discounted price for an item

var itemOriginalPrice = 10;
var itemDiscountPercentage = 75;
var discountDecimal = itemDiscountPercentage/100;
var descriptionOfItem = ("box of cookies");
var salesTaxPercentage = 5;
var saleTaxDecimal = salesTaxPercentage/100;
//Price of item with tax after discount and Price of item without tax after discount
var itemWithTax = itemOriginalPrice * discountDecimal + saleTaxDecimal;
console.log(itemWithTax);
var itemWithNoTax = itemOriginalPrice * discountDecimal;
var itemAfterDiscount = itemOriginalPrice - itemWithNoTax;
console.log(itemWithNoTax);
console.log("Your item was originally $"+itemOriginalPrice+", but  after a "+itemDiscountPercentage+" % discount, \n " +
" it is now  $"+itemAfterDiscount+" without tax, and  $"+itemWithTax+" with  tax")










