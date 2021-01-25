/*
Write a function displayBusTimes which takes in an object and a string. 
The object is the collection of bus time schedules, and the string will 
be the bus line the user's interested in. See below:

var cityZBusSchedules = {
  bus12Schedule: [9, 18, 27, 36],
  bus15Schedule: [11, 22, 33, 44],
  bus22Schedule: [15, 30, 45]
};

//Write a function displayBusTimes
//takes in an object and a string
  // {collection of bus time schedules}
  // "bus line the user's interested in"

*/

function displayBusTimes(busScheduleObj, busLine) {
  return "The bus will arrive in the next [" + busScheduleObj[busLine] + "] minutes.";
}

displayBusTimes(cityZBusSchedules, "bus15Schedule"); //"The bus will arrive in the next [11,22,33,44] minutes."
displayBusTimes(cityZBusSchedules, "bus22Schedule"); //"The bus will arrive in the next [15,30,45] minutes."