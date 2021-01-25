


const getOdds = arr => {

    const result = [];

    for(let i = 0; i <= arr.length; i++) {
        const isOdd = arr[i] % 2 === 1;

        if (isOdd) {
            result.push(arr[i]);
        }
    }

    return result;
}



const arr = [1, 2, 3, 4, 5, 6];

const isOdd = (el, idx, arr) => {
    ;
    if (idx > 2 && el % 2 === 1 && arr.legth / 4 > 3) {
        return true;
    }
    
}

// const odds1 = filter(arr, isOdd)
const odds2 = arr.filter(isOdd)





// /*
// Someone who recorded these people's names and birthdays 
// wasn't meticulous with their data entry, and input information with inconsistent capitalizations.
// */

// var anotherPerson = {
//     name: {
//       first: "kylA",
//       last: "liVingSton"
//     },
//     birthDay: {
//       month: "octobeR",
//       day: 20,
//       year: 1961
//     }
//   }
//   console.log(anotherPerson)
//   //Write a function 'renderInfoNeatly' which takes in a person object similar to the previous example, and returns the person's name and birthday with proper casing.
  
//   // write a function that will capitalize a given string
//   function capitalize(str){
//     return str[0].toUpperCase() + str.toLowerCase().slice(1);
//   }
  
//   function renderInfoNeatly(person){
//     person.name.first = person.name.first[0].toUpperCase() + person.name.first.toLowerCase().slice(1);
//     person.name.last = person.name.last[0].toUpperCase() + person.name.last.toLowerCase().slice(1);
//     person.birthDay.month = person.birthDay.month[0].toUpperCase() + person.birthDay.month.toLowerCase().slice(1);
//     return `${person.name.first} ${person.name.last}: ${person.birthDay.month} ${person.birthDay.day}, ${person.birthDay.year}`;
//   }

// //   function renderInfoNeatly(person){
// //     person.name.first = capitalize(person.name.first);
// //     person.name.last = capitalize(person.name.last);
// //     person.birthDay.month = capitalize(person.birthDay.month);
// //     return `${person.name.first} ${person.name.last}: ${person.birthDay.month} ${person.birthDay.day}, ${person.birthDay.year}`;
// //   }
  

//   const updatedPerson = renderInfoNeatly(anotherPerson);

// //   console.log(updatedPerson); //"Kyla Livingston: October 20, 1961"
//   console.log(anotherPerson); //"Kyla Livingston: October 20, 1961"




// // [1,2,3,4,5].forEach(cb)


// const funcA = (el, idx, arr) => {
//     console.log(el)
//     return el * 10;
// }



// const map = (arr, cb) => {
//     const res = [];
//     for(let i = 0; i < arr.length; i++) {
//         res.push(cb(arr[i], i, arr))
//     }
//     return res;
// }


// const result = map([1,2,3,4], funcA);

// console.log(result)

