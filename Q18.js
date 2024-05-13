"use strict";
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// Define an array of places to visit
let placesToVisit = ["Tokyo", "Paris", "New York", "Makkah", "Sydney"];
// Print the array in its original order
console.log("Original order:");
console.log(placesToVisit);
// Print the array in alphabetical order without modifying the original list
console.log("Alphabetical order:");
console.log([...placesToVisit].sort());
// Print the array to show it's still in its original order
console.log("Still in original order:");
console.log(placesToVisit);
// Print the array in reverse alphabetical order without changing the original list
console.log("Reverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());
// Print the array to show it's still in its original order
console.log("Still in original order:");
console.log(placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:");
console.log(placesToVisit);
// Reverse the order of the list again to bring it back to the original order
placesToVisit.reverse();
console.log("Back to original order:");
console.log(placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:");
console.log(placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:");
console.log(placesToVisit);
