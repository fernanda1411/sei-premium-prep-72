/*

Which of the following statements is valid for destructuring the following object?

const artist = {
  name: 'Eurythmics',
  songs: [ 'Sweet Dreams', 'Here Comes the Rain Again' ]
}
*/

const {name, songs: [first, second]} = artist;