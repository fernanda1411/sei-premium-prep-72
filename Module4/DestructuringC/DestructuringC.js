/*
Which of the following statements is valid for destructuring the following object?

const songs = [
  { name: 'Sweet Dreams', artist: 'Eurythmics' },
  { name: 'Faith', artist: 'George Michael' },
  { name: 'Manic Monday', artist: 'The Bangles' }
]

*/

const [{name: name1, artist: artist1}, {name: name2, artist: artist2}] = songs;