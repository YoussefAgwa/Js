//[1]
// output = 10

// [2]
// console.log(person.getname()); 
// output => "" (because in return statment we didn't access the object property by keyword (this)
// to fix the error code should be(return this.name) as this refers to the object)

// [3]
// const i;
// this is an error we should initialize the constant after decleration

// [4]
  // console.log(newArr);
// this line of code will print the indexes of the arr in the newArr every loop will add the new index 

// [5]
// console.log(foo); this will print 1
// console.log(bar); this will print 2
// console.log(baz); this will print [3,4,5]

// [6]
function addValues(...values) {
  let result = values.reduce(function (acc , curr) {
    return acc + curr
  })
  console.log(result);
}
addValues(1,2,3,4);