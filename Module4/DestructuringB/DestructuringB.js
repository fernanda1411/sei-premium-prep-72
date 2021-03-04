/*

Which of the following statements is valid for destructuring the following object?

const artist = {
  name: 'Eurythmics',
  songs: [ 'Sweet Dreams', 'Here Comes the Rain Again' ]
}
*/

const artist = {
  name: 'Eurythmics',
  songs: [ 'Sweet Dreams', 'Here Comes the Rain Again', 1,5,6 ]
}

const {name, songs: [first, second, ...rest]} = artist;