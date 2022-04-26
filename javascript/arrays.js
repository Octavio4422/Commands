let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
let numbers3 = [75, 19, 10, 90, 25, 110];
let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let elements = ['Fire', 'Air', 'Water'];


//Array.isArray() returns true or false if the passed value ir an array or not
Array.isArray([1, 2, 3]); //returns true
Array.isArray("value"); //returns false

//Array.prototype.length returns the number of elements in that array
numbers1.length;
//returns 3

//Array.prototype.indexOf() returns the first index at which a given element can be found in the array
//-1 if it is not present
numbers1.indexOf(2);
//returns 1

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ARRAY MODIFICATION

//Array.prototype.concat() returns the merger of two or more arrays
//returns a new one
let concatArrays = numbers1.concat(numbers2);
//[1,2,3,4,5,6]

//Array.prototype.push() adds one or more elements to the end of an array
numbers2.push(7);
//[4,5,6,7]

//Array.prototype.unshift() adds one or more elements to the beginning of an array
numbers1.unshift(0);
//[0,1,2,3]

//Array.prototype.pop() removes the last element from an array
numbers2.pop();
//[4,5,6] previously added the 7 with push

//Array.prototype.shift() removes the first element from an array
numbers1.shift();
//[1,2,3] previously added the 0 with unshift

//Array.prototype.splice() changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
//recieves three parameters, the first one the index position, the second one 0(to insert) >1(to replace), and the third one the element
numbers2.splice(2, 0, 7);
//returns [4,5,6,7]
numbers2.splice(2,1);
//returns [4,5,6]

//Array.prototype.slice() returns a shallow copy of a portion of an array into a new array object selected from start to end
//recieves two parameters, the first one the start position, the second one the end(not included)
animals.slice(2);
//return ["camel", "duck", "elephant"]
animals.slice(1, 5);
//returns ["bison", "camel", "duck", "elephant"]

//Array.prototype.reverse() reverses an array in place
//the first array element becomes the last, and the last array element becomes the first
numbers1.reverse();
//returns [3,2,1]

//Array.prototype.join() creates and returns a new string by concatenating all of the elements in an array
//separated by commas or a specified separator string
//If the array has only one item, then that item will be returned without using the separator.
//Ussualy used with the sting method Sting.prototype.split()
elements.join()
//return "Fire,Air,Water"
elements.join('')
//return "FireAirWater"

//Array.prototype.sort() sorts the elements of an array in place and returns the sorted array
//the default sort order is ascending, built upon converting the elements into strings
//then comparing their sequences of UTF-16 code units values
animals.sort();
//the return will by equal as the original array but in other cases it will retun the array alphabetically arranged
numbers3.sort((a,b) => a - b);
//return [10,19,25,75,90,110]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//BOOLEAN RETURNS

//YOU CAN USE THE INCLUDES METHOD IN EVERY OR SOME

//Array.prototype.every() tests whether all elements in the array pass the test implemented by the provided function
//returns true or false
numbers1.every((num) => num % 2 === 0);
//returns false

//Array.prototype.some() tests whether at least one element in the array passes the test implemented by the provided function
//returns true or false
numbers1.some((num) => num % 2 === 0);
//return true

//Array.prototype.includes() etermines whether an array includes a certain value among its entries
//returns true or false
numbers1.includes(8);
//return false

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//

//Array.prototype.find() method returns the first element in the provided array that satisfies the provided testing function
//if no values satisfy the testing function undefined is returned.
//accepts index
//Also exist the Array.prototype.findIndex() with the same syntax returns the index or -1 (doesnt make sense use this method, find() shows the index also)
numbers3.find(n => n > 20);
//returns 25
numbers3.find(n => n < 1);
//returns undefined

//Array.prototype.filter() method creates a new array with all elements that pass the test implemented by the provided function
//accepts index
words.filter(word => word.length > 6);
//returns ["exuberant", "destruction", "present"]

//Array.prototype.map() creates a new array populated with the results of calling a provided function on every element in the calling array
//accepts index
numbers2.map(n => n * 2);
//returns [8,10,12]

//Array.prototype.forEach() executes a provided function once for each array element.
//same as map but this method not create a new array

//Array.prototype.reduce()
//SOON