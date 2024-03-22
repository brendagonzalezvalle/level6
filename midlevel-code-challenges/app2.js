// ### **Filter Object Array by Property:**

// Write a function called **`filterByProperty`** that takes an array of objects and a property name as input. The function should return a new array containing only the objects that have a specific value for the given property.


function filterByProperty(objects, propertyName, propertyValue) {
    const filterArray = objects.filter((person) => { //use filter
        if(person[propertyName] === propertyValue){ // using if statement & bracket notation to check the property name given on line 23 
            return person
        }
    })
    return filterArray // returned the filtered array by the property value
  
}

const people = [
  { name: 'Alice', age: 30, country: 'USA' },
  { name: 'Bob', age: 25, country: 'Canada' },
  { name: 'Charlie', age: 35, country: 'USA' },
  { name: 'David', age: 28, country: 'Australia' },
];

const filteredByCountry = filterByProperty(people, 'age', 30);
console.log(filteredByCountry);