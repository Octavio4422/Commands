const example1 = {
    name: 'Octavio',
    github: 'Octavio4422',
    learning: 'javascript',
    2: 4
};

const example2 = [['name', 'Octavio'],['github', 'Octavio4422'],['learning', 'javascript'],['2', 4]];

const clonedExample = {};

//Object.keys() returns a new array with all the object keys inside
//take care with the numbers these can be at the beginning of the array
//normaly used for calculate the length of the object
Object.keys(example1);
//['2','name','github','learning']

//Object.values() do the same thing that .keys do but with the values
Object.values(example1);
//[4,'Octavio','Octavio4422','javascript']

//Object.entries() return a new array with arrays inside,
//each array will contain in the first position the key, and in the second position the value
Object.entries(example1);
//[['name', 'Octavio'],['github', 'Octavio4422'],['learning', 'javascript'],['2', 4]]

//Object.fromEntries do the opposite thing that .entries() do
//turns an array of arrays to an object
Object.fromEntries(example2)
//same as example1

//Object.assing() creates a reference copy of an object
//it doesnt work property when an object stores another object inside
Object.assign(clonedExample, example1);