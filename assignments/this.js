/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The first principle is when "this" is bound to the global scope.

* 2. When calling a function with a dot, the object before that dot is the 'this'. That is implicit binding. 

* 3. Used when a constructor function is used, 'this' will call the object and it will be returned by the constructor function.

* 4. Explicit binding is when you use the call or apply method.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function thisAnimal(animal) {
    console.log(this);
    return animal;
}

thisAnimal();
console.log(thisAnimal("Dog"));


// Principle 2

// code example for Implicit Binding
const obj = {
    greeting: 'Hi',
    talk: function() {
        console.log(this);
        return `${this.greeting}!`
    }
};
obj.talk();
console.log(obj.talk());

// Principle 3

// code example for New Binding
function Ani(x) {
    this.animalType = x.animalType;
    this.animalName = x.animalName;
    this.speak = function() {
        return `The ${this.animalName} is a ${this.animalType}.`;
    }
}

const horse = new Ani({animalType: 'mammal', animalName: 'horse'});

const kangaroo = new Ani({animalType: 'marsupial', animalName: 'kangaroo'});

console.log(horse.speak());
console.log(kangaroo.speak());

// Principle 4

// code example for Explicit Binding
console.log(horse.speak.call(kangaroo));
console.log(kangaroo.speak.apply(horse));