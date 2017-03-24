import { __Native } from '../util/Bootstrapper.js'

class Vec2 {
    constructor( x, y ) {
        this.x = x;
        this.y = y;
        console.log( "__Native", __Native );
    }

    add( v ) {

        // Wrap mathgasm

    }
}

export { Vec2 };