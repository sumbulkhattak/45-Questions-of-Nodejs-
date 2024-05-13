"use strict";
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
const magicians = ['Dynamo', 'Criss Angel', 'Penn Jillette', 'Teller'];
function showMagicians(magicians) {
    console.log(magicians.join("\n"));
}
function makeGreat(magicians) {
    return magicians.map((magician) => `${magician} the Great`);
}
const magiciansCopy = [...magicians];
const greatMagicians = makeGreat(magiciansCopy);
//ORIGINAL MAGICIANS:
console.log("Original magicians:");
showMagicians(magicians);
//WITH GREAT:
console.log("\nMagicians with 'the Great' added:");
showMagicians(greatMagicians);
