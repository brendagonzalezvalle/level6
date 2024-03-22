// ### **Extract Initials:**

// Write a function called **`extractInitials`** that takes an array of full names and returns a new array containing only the initials of each name.

function extractInitials(names) {
console.log(names)

   const initials = names.map((name) => { //using map , map through the array of full names
    const [firstName, lastName] = name.split(' '); // split the names into 2 variables
    console.log(firstName)
    console.log(lastName)
    return firstName[0]+lastName[0] // grab the index of 0 for both first and last name
   });
   return initials 
   
 
 
};
//Solution shared by Vschool

// function extractInitials(names) {
//    return names.map(name => {
//      const words = name.split(' ');
//      const initials = words.map(word => word[0]).join('');
//      return initials;
//    });
//  }


const fullNames = ['John Doe', 'Alice Johnson', 'Bob Smith'];
const initialsArray = extractInitials(fullNames);
console.log(initialsArray); // Output: ['JD', 'AJ', 'BS']