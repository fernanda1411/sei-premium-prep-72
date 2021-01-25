/*
Write a function called transformEmployeeData that transforms some employee data from one format to another.

The argument will look like this:
var input = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];

Note that the input may have a different number of rows (more employees) or different keys than the given sample.
*/

function transformEmployeeData(employeeData) {
  //declare array
  //for loops.
  //declare object in 1st for loop.
  //push to array in 1st for loop.
  //in 2rd loop, assign arra[0] as key to array[1] as value;
  //push object to array in second loop.

  const array = [];

  // employeeData.forEach(employee => {
  //     const obj = {};
  //     employee.forEach(property => {
  //         const key = property[0];
  //         const value = property[1];
  //         obj[key] = value;
  //     })
  //     array.push(obj);
  // })

  for (let i = 0; i < employeeData.length; i++) {
    const obj = {};
    for (let j = 0; j < employeeData[i].length; j++) {
      obj[employeeData[i][j][0]] = employeeData[i][j][1];
    }
    array.push(obj);
  }
  return array;
}

var result = [
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]