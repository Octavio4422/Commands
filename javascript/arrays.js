let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];

//Array.isArray() returns true or false if the passed value ir an array or not
Array.isArray([1, 2, 3]); //returns true
Array.isArray("value"); //returns true

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
//[1, 2, 3] previously added the 0 with unshift

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//BOOLEAN RETURNS

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
