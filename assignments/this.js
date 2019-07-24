/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object binding: Just like a global variable, `this` will refer to the entire window, the entire document. 
* 2. Implicit binding: You are calling a method or a key pair, using an object name and then the name of the included function. `This` will refer to the object left of the dot. It will also be used to reference the object a key pair or method is inside of.
* 3. New binding: You are making a constructor function. For every key pair you are created, you could just give each item left of the dot the name of the object they will eventually be a part of. However, (1) referring to things in the third person with no pronouns is weird and (2) it increases the risk of mishaps if you tweak the object's name. Therefore, "this" refers to the object the key pair is within, and it works like a pronoun.
* 4. Explicit binding: You are putting together an object and a separate function by using .call() or .apply(). (Yay you! You're super-smart.) The `this` keyword will refer to the object you are passing through the .call or .apply method.
*
* write out a code example of each explanation above
*/

// Principle 1

function eat(food) {
    console.log(this);
    return food;
}

eat("sushi with fried ice cream for desert");

// Principle 2

let lukeSkywalker = {
    name: "Luke",
    occupation: "Jedi master",
    pastimes: "saving the day or hiding",
    description: function() { 
        console.log(this);
        return`${this.name} is a ${this.occupation} who is either ${this.pastimes}.`}
}

console.log(lukeSkywalker.description());
console.log(lukeSkywalker.occupation);

// Principle 3

function Activity(attribute){
    this.name = attribute.name;
    this.location = attribute.location;
    this.weather = attribute.weather;
    console.log(`${this.name} takes place in the ${this.location} when it is ${this.weather}.`);
    console.log(this);
}

const snowboarding = new Activity({
    name: "snowboarding",
    location: "mountains",
    weather: "cold and snowy"
});

console.log(snowboarding);

// Principle 4 example

function jacket() {
    console.log(`My jacket for ${this.use} is ${this.color}.`)
    console.log(this);
}

const myJacket = {
    use: "climbing",
    color: "red"
}

jacket.call(myJacket);