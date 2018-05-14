// Create class ImprovedFighter
import Fighter from "./fighter";

export default class ImprovedFighter extends Fighter {
  doubleHit(enemy, point) {
    super.hit(enemy, 2 * point);
  }
}
