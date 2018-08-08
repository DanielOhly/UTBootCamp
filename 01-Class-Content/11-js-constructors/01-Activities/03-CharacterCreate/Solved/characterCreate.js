// constructor function which can take in a series of values and create objects
// with the properties contained inside
{
  let antonio = "antonio";
  var cole = "cole";
  const kerryandIhab = {};
  kerryandIhab.name = "batman";
  console.log(kerryandIhab);
}
// console.log(kerryandIhab);

const Character = function (name, profession, gender, age, strength, hitpoints) {
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
  let antonio = "antonio"; //local scope
  var antonio2 = "antonio2" //local scope
  // method which prints all of the stats for a character
  this.printStats = () => {
    console.log("Name: " + this.name + "\nProfession: " + this.profession +
      "\nGender: " + this.gender + "\nAge: " + this.age + "\nStrength: " +
      this.strength + "\nHitPoints: " + this.hitpoints);
    console.log("\n-------------\n");
  };
  // method which determines whether or not a character's "hitpoints" are less then zero
  // and returns true or false depending upon the outcome
  this.isAlive = () => {
    if (this.hitpoints > 0) {
      console.log(this.name + " is still alive!");
      console.log("\n-------------\n");
      return true;
    }
    console.log(this.name + " has died!");
    return false;
  };

  // method which takes in a second object and decreases their "hitpoints" by this character's strength
  this.attack = (defender) => {
    defender.hitpoints -= this.strength;
  };

  // method which increases this character's stats when called
  this.levelUp = () => {
    this.age += 1;
    this.strength += 5;
    this.hitpoints += 25;
  };
}

// creates two unique characters using the "character" constructor
let warrior = new Character("Crusher", "Warrior", "Male", 25, 10, 75);
let rogue = new Character("Dodger", "Rogue", "Female", 23, 20, 50);

// warrior.printStats();
// rogue.printStats();

// rogue.attack(warrior);
// warrior.printStats();
// warrior.isAlive();

// rogue.levelUp();
// rogue.printStats();

console.log(cole);
// console.log(antonio);
