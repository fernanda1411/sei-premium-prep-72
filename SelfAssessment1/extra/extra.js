/*


*/

function convertTo(units, num) {
    if (units ===  'cm') {
      return num * 2.54;
    } else {
      return num / 2.54;
    }
  }
  
  convertTo('cm', 100); //254
  convertTo('in', 50.8); //20