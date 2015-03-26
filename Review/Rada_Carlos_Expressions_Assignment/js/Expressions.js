/*
 Carlos Rada
 03-07015
 Section 00
 Activity: Expressions
 */


alert("Text that the user will see.");

//Months & Days in Year
var monthsInYear = 12;
var daysInYear = 365;

//Array How many days have passed until month
var monthMap = {
    "january": 0,
    "february": 31,
    "march": 59,
    "april": 90,
    "may": 120,
    "june": 151,
    "july": 181,
    "august": 212,
    "september": 243,
    "october": 273,
    "november": 304,
    "december": 334
};

//Array Month with corresponding number from 1 - 12
var monthNumberMap = {
    "january": 1,
    "february":2,
    "march": 3,
    "april": 4,
    "may": 5,
    "june": 6,
    "july": 7,
    "august": 8,
    "september": 9,
    "october": 10,
    "november": 11,
    "december": 12
};



//Enter Birthday
var birthYear = prompt("Enter year");
birthYear = parseInt(birthYear);
while(isNaN(birthYear) || birthYear === ""){
    //Re prompt the user
    if(birthYear === ""){
        //The user left it blank
        birthYear = prompt("Please do not leave blank");

    } else if(isNaN(birthYear)){
        birthYear = prompt("Please enter only type in numbers. \n Enter a number.");
    }

}
//Birth Day Month
var birthMonth = prompt("Enter month");
while(isNaN(birthMonth) || birthMonth === ""){
    //Re prompt the user
    if(birthMonth === ""){
        //The user left it blank
        birthMonth = prompt("Please do not leave blank");

    } else if(isNaN(birthMonth)){
        birthMonth = prompt("Please enter only type in numbers. \n Enter a number.");
    }

}

//Birth Month Number
var birthMonthNumber = monthNumberMap[birthMonth];
// Enter Birth day
var birthDay= prompt("Enter birth day");
birthDay = parseInt(birthDay);
//Enter Birth Hour
var birthHour =  prompt("Enter birth hour");
birthHour = parseInt(birthHour);
// Enter Birth Minute
var birthMinute = prompt("Enter birth minute");
birthMinute = parseInt(birthMinute);

//Enter date.
var today = new Date();

//Current Date and Time
var currentYear = today.getFullYear();
var currentMonth = monthMap[birthMonth];
var monthNumber = today.getMonth() + 1;
var currentDay = today.getDay();
var hourNow = today.getUTCHours() + 1;
var minuteNow = today.getUTCMinutes() + 1;


//Code
// Days passed in the current year
var daysPassedCurrentYear = currentMonth + currentDay;
//Days in year passed until your birthday
var daysPassedBirthYear = monthMap[birthMonth] + birthDay;
//Days left in year after birth date
var daysLeft = daysInYear - daysPassedBirthYear;
//Years Lived
var yearsLived = (currentYear - birthYear) - 1;
//Most Days passed without leap year
var mostDays = yearsLived * daysInYear;
//How many leap years have haven since your birth
var amountOfLeapYearsSinceBirth = yearsLived / 4;
//Remainder left from leap year equation
var moduloLeapYear = amountOfLeapYearsSinceBirth % 1;
//Leap year days that have happened since your birth
var extraDays= amountOfLeapYearsSinceBirth - moduloLeapYear;
//Months left in year after birth
var remainderMonth = monthsInYear - birthMonthNumber;


//Days Lived
var totalDays =  mostDays + daysLeft + extraDays + daysPassedCurrentYear;
//Hours Lived
var hoursLived = totalDays * 24 + hourNow - birthHour;
//Minutes Lived
var minutesLived = hoursLived * 60 + minuteNow - birthMinute;
//Seconds Lived
var secondsLived = minutesLived * 60;
//Months Lived
var monthsLived = yearsLived * 12 + remainderMonth + monthNumber;

//More Code
//Weeks lived
var weeksLived = totalDays;
    weeksLived/= 7;
var moduloWeeks = weeksLived % 1 ;

//Months Lived
var actualWeeks = weeksLived - moduloWeeks;

//More Code
// How many years have you lived since birth
var exactYears = totalDays / 365.242;
//Percentage completed for another year lived
var moduloYear = exactYears % 1;

//Years Lived
var age =  exactYears - moduloYear;
console.log(age);

//Answer

alert("You have lived "+age+" years" );


alert("You have lived "+monthsLived+" months");
alert("You have lived "+actualWeeks+" weeks");
alert("You have lived "+totalDays+" days");
alert("You have lived "+hoursLived+" hours");
alert("You have lived "+minutesLived+" minutes");
alert("You have lived "+secondsLived+" seconds");

console.log = ("You have lived "+age+" years" );


console.log("You have lived "+monthsLived+" months");
console.log("You have lived "+actualWeeks+" weeks");
console.log("You have lived "+totalDays+" days");
console.log("You have lived "+hoursLived+" hours");
console.log("You have lived "+minutesLived+" minutes");
console.log("You have lived "+secondsLived+" seconds");

























