/*
Write a function nextTwoBusTimes which takes 
in an array of numbers representing (in minutes) 
when the busses come for the day. Your function 
should return a string which denotes when the 
nearest bus arrives, and the one after that.


//Write a function nextTwoBusTimes
//takes in an array of numbers
    //representing (in minutes) when the busses come for the day
//return a string
    //denotes when the nearest(index[0]= 12) bus arrives, and the one after that(index[1]=24)

*/

function nextTwoBusTimes(timesArr) {
    return "The next 2 busses arrive in" + timesArr[0] + "and" + timesArr[1] + "minutes.";
}

var bus10Schedule = [12, 24, 35, 47, 60];
nextTwoBusTimes(bus10Schedule); //"The next 2 busses arrive in 12 and 24 minutes."