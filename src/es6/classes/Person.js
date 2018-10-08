/**
 * conventions :
 *  * class js files start with uppercase, others start with lowercase
 *  * single default export with class name same as filename
 */
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getName() {
    return this.firstname + " " + this.lastname;
  }
}

export default Person;
