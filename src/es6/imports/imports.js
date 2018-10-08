import { firstname, lastname } from "./exports.js";
import * as person from "./exports.js";
// someone takes the value of the default export
import someone from "./exports.js";
// multiple imports from same file separated with comma
// import someone, { firstname, lastname } from "./exports.js";

console.log(firstname + "" + lastname);
console.log(person.firstname);
console.log(someone);
