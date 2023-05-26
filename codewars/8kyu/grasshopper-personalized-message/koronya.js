// [JS][8kyu] Grasshopper - Personalized Message
// https://www.codewars.com/kata/5772da22b89313a4d50012f7

const greet = (name, owner) => (name === owner ? "Hello boss" : "Hello guest");

greet("Daniel", "Daniel") === "Hello boss";
greet("Greg", "Daniel") === "Hello guest";
