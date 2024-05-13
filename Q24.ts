// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

//1 Task: • Tests for equality and inequality with strings
const string1: string = "Pineapple";
const string2: string = "Orange";
console.log(string1 != string2);   
console.log(string1 == string2);

//2 Task: • Tests using the lower case function
const mixedCaseString: string = "Hello World"
console.log(mixedCaseString.toLowerCase() === "hello world")
console.log(mixedCaseString.toLowerCase() === "helloworld")

//3 Task: • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1: number = 8
const num2: number = 4
console.log(num1 !== num2);
console.log(num1 === num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

//4 Task: • Tests using "and" and "or" operators
const condition1: boolean = true;
const condition2: boolean = false;
console.log(condition1 && condition2);
console.log(condition1 || condition2);

//5 Task: • Test whether an item is in a array
const Fruits: string[] = ["Apple","Banana","Grapes","Mango","Orange"]
console.log(Fruits.includes("Apple"))

//6 Task: • Test whether an item is not in a array
const fruits: string[] = ["Apple","Banana","Grapes","Mango","Orange"]
console.log(Fruits.includes("apple"))