// 35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!

//array of animals
const animals: string[] = ["Dog", "Cat", "Horse"];

//name of each animal using a for loop
console.log("Names of animals:");
for (const animal of animals) {
  console.log(animal);
}

// statement about each animal
console.log("\nStatements about animals:");
for (const animal of animals) {
  switch (animal) {
    case "Dog":
      console.log("A dog would make a great pet.");
      break;
    case "Cat":
      console.log("A cat can be an independent companion.");
      break;
    case "Horse":
      console.log("A Horse are majestic animals known for their strength, speed, and grace.");
      break;
    default:
      console.log("This animal is not recognized.");
      break;
  }
}

//the common characteristic
console.log("\nAny of these animals would make a great pet!")