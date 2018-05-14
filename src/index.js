import "babel-polyfill";
import fight from "./fight";
import Fighter from "./fighter";
import ImprovedFighter from "./improvedFighter";


let fighter = new Fighter("fighter1", 20, 40);
let improvedFighter = new ImprovedFighter("fighter2", 30, 60);
let points = [25, 13, 45];
fight(fighter, improvedFighter, ...points);
