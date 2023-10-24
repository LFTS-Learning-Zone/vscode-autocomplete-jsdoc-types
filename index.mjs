/**
 * To Run, type:
 * node index.mjs
 * in your terminal
*/
import { Atom, BaseComponent, Molecule, Particle, mountComponent, shoutComponentType } from "./classes.mjs";

console.log("Progress - Instantiating Objects\n");

let generic = new BaseComponent({name: "Heinsenberg"});
let atom = new Atom({name: "Nitrogen", atomicNumber: 7,});
let molecule = new Molecule({name: "Sodium Clorine", bond: "ionic"});

let photon = new Particle({energy: 1.6*10e-9, momentum: 1000})

//Shared functions of classes
console.log("Progress - Checking inherited method with different behaviors\n")

generic.sayMyName();
atom.sayMyName();
molecule.sayMyName();

//Since Particle is unique. It has its own implementations
photon.move();

console.log("Progress - Checking standalone method with different behaviors\n")

//Behavior 1
mountComponent(generic);

//Behavior 2
mountComponent(atom);

//Behavior 3
mountComponent(molecule);

console.log("Progress - Checking agnostic function, but with \n")
//In thesis, only 'generic' should work because of typing. BUT, its implementation is agnostic.
shoutComponentType(generic);
shoutComponentType(atom);
shoutComponentType(molecule);