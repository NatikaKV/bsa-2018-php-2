// Create class Fighter
export default class Fighter {
  constructor(name = "Bruce Lee", health = 100, power = 20) {
    this.name = name;
    this.health = health;
    this.power = power;
  }

  setDamage(damage) {
    this.health = this.health - damage;
    console.log(`${this.name} health = ${this.health}`);
  }

  hit(enemy, point) {
    let damage = point * this.power;
    enemy.setDamage(damage);
  }

  knockout() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("time is over");
      }, 500);
    });
  }
}
