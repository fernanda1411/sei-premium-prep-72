/*
Write a function nextAndLastBusTimes which 
takes in an array of numbers representing 
(in minutes) when the busses come for the day. 
Your function should return a string which denotes
when the nearest bus arrives, and the last for the day.



//Write a function nextAndLastBusTimes
//takes in an array of numbers
    //representing (in minutes) when the busses come for the day.
//return a string
    //denotes when the nearest(index[0] = 12) bus arrives, 
    //and the last((index[4]=60)) for the day. 
        //To acess last index of array = Accessing array elements (MDN)

*/

function nextAndLastBusTimes(timesArr) {
    return "The next bus is in " + timesArr[0] + "minutes. The last bus is in " + timesArr[timesArr.length -1] + "minutes." ;
}



var bus10Schedule = [12, 24, 35, 47, 60];
nextAndLastBusTimes(bus10Schedule); //"The next bus is in 12 minutes. The last bus is in 60 minutes."