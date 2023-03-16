
//https://github.com/thejsway/thejsway/blob/master/manuscript/chapter09.md

// Dogs--------------------------------------------

// TODO: define the Dog class here
class Dog{
    constructor(name, species, size){
        this.name = name
        this.species = species
        this.size = size
    }
    bark(){
        if(this.size > 60){return 'Grrr! Grrr!'}
        else{return 'Woof! Woof!'}
    }
}

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

//Character inventory----------------------------------

//  -Improve the example RPG to add character inventory management according to the following rules:
// -A character's inventory contains a number of gold and a number of keys.
//  -Each character begins with 10 gold and 1 key.
// -The character description must show the inventory state.

// When a character slays another character, the victim's inventory goes to its vanquisher.
// class Character {
//     constructor(name, health, strength) {
//       this.name = name;
//       this.health = health;
//       this.strength = strength;
//       this.xp = 0; // XP is always zero for new characters
//     }
//     // Attack a target
//     attack(target) {
//       if (this.health > 0) {
//         const damage = this.strength;
//         console.log(
//           `${this.name} attacks ${target.name} and causes ${damage} damage points`
//         );
//         target.health -= damage;
//         if (target.health > 0) {
//           console.log(`${target.name} has ${target.health} health points left`);
//         } else {
//           target.health = 0;
//           const bonusXP = 10;
//           console.log(
//             `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`
//           );
//           this.xp += bonusXP;
//         }
//       } else {
//         console.log(`${this.name} can’t attack (they've been eliminated)`);
//       }
//     }
//     // Return the character description
//     describe() {
//       return `${this.name} has ${this.health} health points, ${this
//         .strength} as strength and ${this.xp} XP points`;
//     }
//   }
  
//   const aurora = new Character("Aurora", 150, 25);
//   const glacius = new Character("Glacius", 130, 30);
  
//   console.log("Welcome to the adventure! Here are our heroes:");
//   console.log(aurora.describe());
//   console.log(glacius.describe());
  
//   const monster = new Character("Spike", 40, 20);
//   console.log("A wild monster has appeared: it's named " + monster.name);
  
//   monster.attack(aurora);
//   monster.attack(glacius);
//   aurora.attack(monster);
//   glacius.attack(monster);
  
//   console.log(aurora.describe());
//   console.log(glacius.describe());

class Character {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.xp = 0; // XP is always zero for new characters
      this.gold = 10;
      this.keys = 1;
    }
    // Attack a target
    attack(target) {
      if (this.health > 0) {
        const damage = this.strength;
        console.log(
          `${this.name} attacks ${target.name} and causes ${damage} damage points`
        );
        target.health -= damage;
        if (target.health > 0) {
          console.log(`${target.name} has ${target.health} health points left`);
        } else {
          target.health = 0;
          const bonusXP = 10;
          console.log(
            `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${target.gold} gold and ${target.keys} key(s)`
          );
          this.xp += bonusXP;
          this.gold += target.gold;
          this.keys += target.keys;
        }
      } else {
        console.log(`${this.name} can’t attack (they've been eliminated)`);
      }
    }
    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points, ${this
        .strength} as strength, ${this.xp} XP points, ${this.gold} gold and ${this.keys} key(s)`;
    }
  }
  
  const aurora = new Character("Aurora", 150, 25);
  const glacius = new Character("Glacius", 130, 30);
  
  console.log("Welcome to the adventure! Here are our heroes:");
  console.log(aurora.describe());
  console.log(glacius.describe());
  
  const monster = new Character("Spike", 40, 20);
  console.log("A wild monster has appeared: it's named " + monster.name);
  
  monster.attack(aurora);
  monster.attack(glacius);
  aurora.attack(monster);
  glacius.attack(monster);
  
  console.log(aurora.describe());
  console.log(glacius.describe());

  //Acount List-----------------------------------------------

//Let's build upon a previous account object exercise. A bank account is still defined by:

// -A name property.
// -A balance property, initially set to 0.
// -A credit method adding the value passed as an argument to the account balance.
// -A describe method returning the account description.

// Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.

class BankAccount{
    constructor(name){
        this.name = name;
        this.balance = 0;
    }
    credit(amount){
        this.balance += amount
    }
    describe(){
        return `Account holder: ${this.name}, Account balance: ${this.balance}`
    }
}

let accounts = [new BankAccount('Sean'),new BankAccount('Brad'),new BankAccount('George') ]

accounts.forEach((x)=>{
    x.balance += 1000
    console.log(x.describe())
})

//First Tryeeee!