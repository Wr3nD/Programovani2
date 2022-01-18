//Evaluate these:
//#1
[2] === [2]; // true
//{} == {}  //false

//#2 what is the value of property a for each object.
const object1 = { a: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { a: 5 };
object1.a = 4;

// 4
// 4
// 4
// 5

//#3 create two classes: an Animal class and a Mamal class.
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.

class Animal {
  constructor(name, type, color) {
    console.log("animal ", this);
    this.name = name;
    this.type = type;
    this.color = color;
  }
  introduce() {
    console.log(
      `Moo I am ${this.name}, also I am${this.type} with a ${this.color}`
    );
  }
}

class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
    console.log("Mamal ", this);
  }
  sound() {
    console.log(`Weee i am a ${this.color}`);
  }
}
const cow = new Mamal("peter", "fat", " blue ");
