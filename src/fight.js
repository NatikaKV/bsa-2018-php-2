// create async function fight
async function fight(fighter, improvedFighter, ...point) {
  for (let i = 0; i < point.length; i++) {
    fighter.hit(improvedFighter, point[i]);
    if (improvedFighter.health < 0) {
      console.log(`${improvedFighter.name} knockout`);
      await improvedFighter.knockout().then(message => console.log(message));
      console.log(`Game over. ${fighter.name} win the game`);
      break;
    }

    improvedFighter.doubleHit(fighter, point[i]);
    if (fighter.health < 0) {
      console.log(`Fighter ${fighter.name} knockout`);
      await fighter.knockout().then(message => console.log(message));
      console.log(`improved fighter ${improvedFighter.name} win the game`);
      break;
    }
  }
}
export default fight;
