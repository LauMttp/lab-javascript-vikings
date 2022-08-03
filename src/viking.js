// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  genericAttack(a, b) {
    const c = Math.floor(Math.random() * a.length);
    const d = Math.floor(Math.random() * b.length);
    const theAttack = a[c].receiveDamage(b[d].strength);
    if (a[c].health <= 0) {
      a.splice(c, 1);
    }
    return theAttack;
  }

  vikingAttack() {
    const yoo = this.genericAttack(this.saxonArmy, this.vikingArmy);
    return yoo;
    /*const s = Math.floor(Math.random() * this.saxonArmy.length);
    const v = Math.floor(Math.random() * this.vikingArmy.length);
    const theAttack = this.saxonArmy[s].receiveDamage(
      this.vikingArmy[v].strength
    );
    if (this.saxonArmy[s].health <= 0) {
      this.saxonArmy.splice(s, 1);
    }
    return theAttack;*/
  }

  saxonAttack() {
    const yoo = this.genericAttack(this.vikingArmy, this.saxonArmy);
    return yoo;
    /*const v = Math.floor(Math.random() * this.vikingArmy.length);
    const s = Math.floor(Math.random() * this.saxonArmy.length);
    const theAttack = this.vikingArmy[v].receiveDamage(
      this.saxonArmy[s].strength
    );
    if (this.vikingArmy[v].health <= 0) {
      this.vikingArmy.splice(v, 1);
    }
    return theAttack;*/
  }

  showStatus() {
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return "Vikings and Saxons are still in the thick of battle.";
    } else if (this.vikingArmy.length < 1) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings have won the war of the century!";
    }
  }
}
