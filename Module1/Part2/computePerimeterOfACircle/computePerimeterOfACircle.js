/*
Write a function called "computePerimeterOfACircle".

Given the radius of a circle, "computePerimeterOfACircle" returns its perimeter.

Notes:
Math.PI can be used for pi.

*/

function computePerimeterOfACircle(radius) {
    return 2 * Math.PI * radius;
}

var output = computePerimeterOfACircle(4);
console.log(output); // --> 25.132741228718345