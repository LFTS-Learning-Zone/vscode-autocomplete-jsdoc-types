
/**Case 1 - A base component has some basic properties and functions. Any function hinted with this type has access to them */
export class BaseComponent{
    name;

    sayMyName() {
        console.log(this.name);
    }

    constructor(props){
        this.name = props.name
    }
}

/**
 *  Case 2 - Both Atom and Molecule share common implementations from BaseComponent. Nothing new.
 * 
 * @param {number} atomicNumber
*/
export class Atom extends BaseComponent{
    atomicNumber;
    
    getAtomicWeight(){
        return this.atomicNumber / (6.022 * Math.pow(10,23))
    }

    constructor(props){
        super(props);
        this.atomicNumber = props.atomicNumber;
    }
}

export class Molecule extends BaseComponent{
    bond;
    getDescriptionByChemicalBond(bond){
        switch (bond) {
            case "ionic":
                return "Your molecule gives entire electrons to keep its stability. Strong!"

            case "covalent":
                return "An ametal and a metal combines both to share the same electrons. Union the Strength!"

            case "metalic":
                return "A wave of electrons flows by freely. Welcome electricity!"
        
            default:
                return "uh oh, are you playing mad scientist again?"
        }
    }
    
    constructor(props){
        super(props);
        this.bond = props.bond;
    }
}

/**
 * Case 3 - A separate class with no connection whatsoever from earlier object structures.
 * Purposively DOES NOT extends 'BaseComponent'
 */
export class Particle{
    energy;
    momentum;

    move() {
        console.log("Particle is moooving");
    }

    constructor(props){
        this.energy = props.energy;
        this.momentum = props.momentum;
    }
}

/**
 * Case 4 - Organisms can be either composite of atoms or molecules.
 * 
 * Yes. I know Organisms are "evolved molecules". This is just an example and in javascriptland every thing is an object, so we dont care
 * @type {(Atom | Molecule)}
*/
export class Organism {

}


/**
 * Test Case 1 - This function should show autocomplete of ONLY BaseComponent.
 * 
 * @param {BaseComponent} component 
 */
export function shoutComponentType(component){
    console.log("this component is a " + component.constructor.name);
}

/**
 * Test Case 2 - This function should show autocomplete of 'Atom', 'Molecule' and their inherited props/methods from 'BaseComponent', and 'Particle'.
 * 
 * Pay attention, when looking at autocomplete, VSCode shows which class the prop/method is coming from. Subtly, but it still does.
 * @param {(Atom | Molecule | Particle)} component 
 */
export function mountComponent(component){

    if(component instanceof Atom){
        /**
         * Inside this 'if', Atom and BaseComponent will show their autocompletes, but not 'Molecule', since 'Atom' is an exclusive set from BaseComponent
         * Idk why 'Particle' is here though.
         * Try it yourself rewriting the 'component'
        */
        console.log(`We are mounting the ${component.name} with a weight of ${component.getAtomicWeight()}`);
    }
    else if(component instanceof Molecule){
        /**
         * Equally to earlier 'if', Molecule and BaseComponent will show their autocompletes, but not 'Atom', for the same reason.
         * Try it yourself rewriting the 'component'
        */
        console.log(`We are mounting the ${component.name} with ${component.bond} bonds`);
    }
    else if(component instanceof BaseComponent){
        /**
         * Inside this 'if' ONLY objects related to BaseComponent should show.
         * This means: Particle, the uncommon one, won't have any autocomplete.
         * Try it yourself rewriting the 'component'
        */
        console.log(`Woop. Something shouldn't happen here with`);
        component.sayMyName();
    }
    else if(component instanceof Particle){
        /**
         * Particle has NO bonds with the other objects. That mean, NO autocomplete for them.
         * Try it yourself rewriting the 'component'
        */
        console.log(`We are mounting some ${component.momentum} with the energy of ${component.energy}`);
        component.move();
    }
}
