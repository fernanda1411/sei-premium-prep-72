/**
    Write a function called "findSmallestElement".

    Given an array of numbers, "findSmallestElement" returns the smallest number within the given array.

    Notes:

    If the given array is empty, it should return 0.
    var output = findSmallestElement([4, 1, 9, 10]);
    console.log(output); // --> 1
 */

function findSmallestElement(arr) {
    
    if(!arr.length){
        return 0;
    }
    
    let smallestEl = 10000;
    
    for(let i = 0; i < arr.length; i++){
        console.log('antes', arr, arr[i], smallestEl)
        if(arr[i] < smallestEl){
            smallestEl = arr[i];
        }
        console.log('depois', arr, arr[i], smallestEl)
    }
    // console.log(arr, smallestEl)
    return smallestEl;
}