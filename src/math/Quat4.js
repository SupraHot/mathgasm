import { __Native } from '../util/Bootstrapper.js'
import { Heap } from '../util/Heap.js'
import { Vec3 } from './Vec3.js'

class Quat4 {
    constructor( axis = new Vec3(), angle = 1.0 ) {
        this.axis = new Vec3();
        this.w = angle;

        var a = angle * ( Math.PI / 180.0 );

        var sinHalfAngle = Math.sin( a / 2.0 );
        var cosHalfAngle = Math.cos( a / 2.0 );

        this.axis.x = axis.x * sinHalfAngle;
        this.axis.y = axis.y * sinHalfAngle;
        this.axis.z = axis.z * sinHalfAngle;
        this.w = cosHalfAngle;
    }
}

export { Quat4 };