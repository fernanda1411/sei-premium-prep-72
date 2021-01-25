/*
Object Shorthand
Learning Objectives
By the end of this lesson you will be able to:

Declare object literals with new shorthand
An easier way to make objects
In ES6, we now have new features to make declaring objects easier. 
Whereas the naming of variables did not matter before, it can now 
define our keys for us. For example, before we would have done this:

var name = 'Loser'
var artist = 'Beck'
var song = { name: name, artist: artist }
Now, we can do this:

const name = 'Loser'
const artist = 'Beck'
const song = { name, artist }
Both song objects will end up with two keys: name and artist and both 
will point towards the appropriate values.

We can also compute property names with a special syntax. Before, 
we would have had to have written something like the following:

var artist = 'Beck'
var songs = [ 'Loser', 'Up All Night', 'Dear Life' ]

var result = {}
result[artist] = songs
We can now simplify that slightly:

const artist = 'Beck'
const songs = [ 'Loser', 'Up All Night', 'Dear Life' ]

const result = { [artist]: songs }
In both cases, we will end up with an object that looks like:

{ Beck: [ 'Loser', 'Up All Night', 'Dear Life' ] }
Resources:
MDN: Object Initializer 
You Don't Know JS: Object Literal Extensions 
Challenges


Update the code below to correctly use object shorthand.
*/

function constructPerson(name = "Anonymous", age = 0, hobbies = []) {
  return {
    name: name,
    age: age,
    hobbies: hobbies
  };
}
