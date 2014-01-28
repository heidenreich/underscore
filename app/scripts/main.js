console.log('Sup Mason');

//first var

var actionFigure = [
	{name: 'Buzz'},
	{name: 'Woody'},
	{name: 'Venom'},
	{name: 'Mr. Mime'},
	{name: 'Spiderman'}
];

// _.initial(array) will return everthing but the last item in an array

_.initial(actionFigure);

// _.last(array) will return the last item in an array

_.last(actionFigure);

// _.rest(array) returns all items in array but the first
// _.rest(array) with value returns the items in an array past that index value
_.rest(actionFigure);

_.rest(actionFigure, 2);

//_.shuffle(list) rearanges the item in a list 

_.shuffle(actionFigure);

//_.sample(list) will return a random element from a list
//_.sample(list, number) will return the number of random elements based on your input number

_.sample(actionFigure);

_.sample(actionFigure, 2);

//_.size(list) will return number of the values in a list

_.size(actionFigure);


//new var

var pets = [
	{name: 'Tilly', age: 6, species: 'dog', legs: 4},
	{name: 'Rose', age: 7, species: 'dog', legs: 4},
	{name: 'Lime', age: 4, species: 'fish', legs: 0},
	{name: 'Disgusting', age: 1, species: 'palmetto bug', legs: 6}
]

//_.max() returns the max value, the function below is the iterator 

_.max(pets, function(pets){ return pets.age; });

_.min(pets, function(pets){ return pets.legs; });

//_.indexBy() will return the list utilizing context you give it 

_.indexBy(pets, 'age');

// _.pluck will return just the value you choose from the array

_.pluck(pets, 'species');

//_.groupBy() will return lists grouped (like items together) 
// by the iterator you define

_.groupBy(pets, 'species');

// _.sortBy() returns the list sorted in ascending order
// by the iterator you declare

 _.sortBy(pets, 'legs' );


//new var

 var uniformNumbers = [ 1, 5, 3, 9, 14, 24, 7, 1, 3, 17];

// _.indexOf() will return the index postion on the given value
// in this example the index is 6

_.indexOf(uniformNumbers, 7);

//_.lastIndexOf() will return the LAST index position on the given value
// in this xample index 7 

_.lastIndexOf(uniformNumbers, 1);

//_.uniq will return the array with the duplicate values omitted

_.uniq(uniformNumbers);

//_.without() will return the array with the values provided omitted

_.without(uniformNumbers, 1, 3, 17)

//_.countBy()will return a count of the number of objects in the list 
// you declare in the group you define, here I used odd and even or
// being divisable by 2. This would return odd-8 and even-2

_.countBy(uniformNumbers, function(num) {
  return num % 2 == 0 ? 'even': 'odd';
})



// no var

// _.range() will return a list of numbers if one value is
// provide it will be th max value -1 if two values are
// provided they will be the min and max, if a third  value
// is provided it will determine the incrementation amount

_.range(10);

_.range (3, 33);

_.range (3, 33, 5)




