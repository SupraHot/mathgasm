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

    static mulQuat( p, q ) {
        // load data into memory
        Heap.HEAPF32[ 0 ] = p.axis.x;
        Heap.HEAPF32[ 1 ] = p.axis.y;
        Heap.HEAPF32[ 2 ] = p.axis.z;
        Heap.HEAPF32[ 3 ] = p.w;
    
        Heap.HEAPF32[ 4 ] = q.axis.x;
        Heap.HEAPF32[ 5 ] = q.axis.y;
        Heap.HEAPF32[ 6 ] = q.axis.z;
        Heap.HEAPF32[ 7 ] = q.w;

        // execute
        __Native._mathgasm_quaternion_mul_quat( 0, 16, 32 ); 

        let result = new Quat4();
        result.w = Heap.HEAPF32[ 11 ];
        result.axis.x = Heap.HEAPF32[ 8 ];
        result.axis.y = Heap.HEAPF32[ 9 ];
        result.axis.z = Heap.HEAPF32[ 10 ];
        return result;
    }

    mulQuat( q ) {
        return Quat4.mulQuat( this, q );
    }

    static mulVec( q, v ) {
        // load data into memory
        Heap.HEAPF32[ 0 ] = q.axis.x;
        Heap.HEAPF32[ 1 ] = q.axis.y;
        Heap.HEAPF32[ 2 ] = q.axis.z;
        Heap.HEAPF32[ 3 ] = q.w;
        
        Heap.HEAPF32[ 4 ] = v.x;
        Heap.HEAPF32[ 5 ] = v.y;
        Heap.HEAPF32[ 6 ] = v.z;

        // execute
        __Native._mathgasm_quaternion_mul_vec( 0, 16, 28 ); 

        return new Vec3( Heap.HEAPF32[ 7 ], Heap.HEAPF32[ 8 ], Heap.HEAPF32[ 9 ] );
    }

    mulVec( v ) {
        return Quat4.mulVec( this, v );
    }

    static slerp( p, q, dt ) {
        // load data into memory
        Heap.HEAPF32[ 0 ] = p.axis.x;
        Heap.HEAPF32[ 1 ] = p.axis.y;
        Heap.HEAPF32[ 2 ] = p.axis.z;
        Heap.HEAPF32[ 3 ] = p.w;
    
        Heap.HEAPF32[ 4 ] = q.axis.x;
        Heap.HEAPF32[ 5 ] = q.axis.y;
        Heap.HEAPF32[ 6 ] = q.axis.z;
        Heap.HEAPF32[ 7 ] = q.w;

        Heap.HEAPF32[ 8 ] = dt;

        // execute
        __Native._mathgasm_quaternion_slerp( 0, 16, 32, 36 ); 

        let result = new Quat4();
        result.axis.x = Heap.HEAPF32[ 9 ];
        result.axis.y = Heap.HEAPF32[ 10 ];
        result.axis.z = Heap.HEAPF32[ 11 ];
        result.w = Heap.HEAPF32[ 12 ];
        return result;
    }

    slerp( q, dt ) {
        return Quat4.slerp( this, q, dt );
    }

    static normalized( q ) {
        // load data into memory
        Heap.HEAPF32[ 0 ] = q.axis.x;
        Heap.HEAPF32[ 1 ] = q.axis.y;
        Heap.HEAPF32[ 2 ] = q.axis.z;
        Heap.HEAPF32[ 3 ] = q.w;

        // execute
        __Native._mathgasm_quaternion_normalize( 0, 16 ); 

        let result = new Quat4();
        result.axis.x = Heap.HEAPF32[ 4 ];
        result.axis.y = Heap.HEAPF32[ 5 ];
        result.axis.z = Heap.HEAPF32[ 6 ];
        result.w = Heap.HEAPF32[ 7 ];
        return result;
    }

    normalized() {
        return Quat4.normalized( this );
    }

    static toAxisAngle( q ) {
        // load data into memory
        Heap.HEAPF32[ 0 ] = q.axis.x;
        Heap.HEAPF32[ 1 ] = q.axis.y;
        Heap.HEAPF32[ 2 ] = q.axis.z;
        Heap.HEAPF32[ 3 ] = q.w;

        // execute
        __Native._mathgasm_quaternion_to_axis_angle( 0, 16 ); 

        return {
            axis  : new Vec3(
                Heap.HEAPF32[ 4 ], Heap.HEAPF32[ 5 ], Heap.HEAPF32[ 6 ]
            ),
            angle : Heap.HEAPF32[ 7 ]
        };
    }

    toAxisAngle() {
        return Quat4.toAxisAngle( this );
    }

    static fromRotationMatrix( m ) {
        // load data into memory
        Heap.HEAPF32[ 0 ]  = m.m00;
        Heap.HEAPF32[ 1 ]  = m.m01;
        Heap.HEAPF32[ 2 ]  = m.m02;
        Heap.HEAPF32[ 3 ]  = m.m03;
        Heap.HEAPF32[ 4 ]  = m.m10;
        Heap.HEAPF32[ 5 ]  = m.m11;
        Heap.HEAPF32[ 6 ]  = m.m12;
        Heap.HEAPF32[ 7 ]  = m.m13;
        Heap.HEAPF32[ 8 ]  = m.m20;
        Heap.HEAPF32[ 9 ]  = m.m21;
        Heap.HEAPF32[ 10 ] = m.m22;
        Heap.HEAPF32[ 11 ] = m.m23;
        Heap.HEAPF32[ 12 ] = m.m30;
        Heap.HEAPF32[ 13 ] = m.m31;
        Heap.HEAPF32[ 14 ] = m.m32;
        Heap.HEAPF32[ 15 ] = m.m33;

         // execute
        __Native._mathgasm_quaternion_set_from_matrix( 0, 64 ); 

        let result = new Quat4();
        result.axis.x = Heap.HEAPF32[ 16 ];
        result.axis.y = Heap.HEAPF32[ 17 ];
        result.axis.z = Heap.HEAPF32[ 18 ];
        result.w = Heap.HEAPF32[ 19 ];
        return result;
    }

    fromRotationMatrix( m ) {
        return Quat4.fromRotationMatrix( m );
    }
}

export { Quat4 };