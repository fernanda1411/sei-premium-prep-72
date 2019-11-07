// Time Limit 45 minutes
// Write a function collectionConverter that takes an object or an array and returns a new collection in a different format (object to array or array to object).


var arrZoo = ['zebra', 4, 'rhino', true, 'monkeys', 'many', 'tiger', 'siberian'];
var objZoo = {
  zebra: 4,
  rhino: true,
  monkeys: 'many',
  tiger: 'siberian'
}
collectionConverter(arrZoo); // { zebra: 4, rhino: true, monkeys: 'many' tiger: 'siberian'}

collectionConverter(objZoo); // ['zebra', 4, 'rhino', true, 'monkeys', 'many', 'tiger', 'siberian']