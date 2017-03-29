import { __Native } from '../util/Bootstrapper.js'
import { Heap } from '../util/Heap.js'

class Vec3 {
    constructor( x, y, z ) {
        this.x = x;
        this.y = y;
        this.z = z;

        // this.byteSize = 12;
    }

    static add( u, v ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = u.x;
        Heap.HEAPF32[ 1 ] = u.y;
        Heap.HEAPF32[ 2 ] = u.z;

        Heap.HEAPF32[ 3 ] = v.x;
        Heap.HEAPF32[ 4 ] = v.y;
        Heap.HEAPF32[ 5 ] = v.z;

        // execute
        __Native._mathgasm_float3_add( 0, 12, 24 ); 

        // copy result
        return new Vec3( Heap.HEAPF32[ 6 ], Heap.HEAPF32[ 7 ], Heap.HEAPF32[ 8 ] );
    }

    add( v ) {
        return Vec3.add( this, v );
    }

    static sub( u, v ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = u.x;
        Heap.HEAPF32[ 1 ] = u.y;
        Heap.HEAPF32[ 2 ] = u.z;

        Heap.HEAPF32[ 3 ] = -v.x;
        Heap.HEAPF32[ 4 ] = -v.y;
        Heap.HEAPF32[ 5 ] = -v.z;

        // execute
        __Native._mathgasm_float3_add( 0, 12, 24 ); 

        // copy result
        return new Vec3( Heap.HEAPF32[ 6 ], Heap.HEAPF32[ 7 ], Heap.HEAPF32[ 8 ] );
    }

    sub( v ) {
        return Vec3.sub( this, v );
    }

    static mul( v, x, y, z ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = v.x;
        Heap.HEAPF32[ 1 ] = v.y;
        Heap.HEAPF32[ 2 ] = v.z;

        Heap.HEAPF32[ 3 ] = x;
        Heap.HEAPF32[ 4 ] = y;
        Heap.HEAPF32[ 5 ] = z;

        // execute
        __Native._mathgasm_float3_mul( 0, 12, 24 ); 

        // copy result
        return new Vec3( Heap.HEAPF32[ 6 ], Heap.HEAPF32[ 7 ], Heap.HEAPF32[ 8 ] );
    }

    mul( x = 1, y = x, z = x ) {
        return Vec3.mul( this, x, y, z );
    }

    static mad( w, v, u ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = w.x;
        Heap.HEAPF32[ 1 ] = w.y;
        Heap.HEAPF32[ 2 ] = w.z;

        Heap.HEAPF32[ 3 ] = v.x;
        Heap.HEAPF32[ 4 ] = v.y;
        Heap.HEAPF32[ 5 ] = v.z;

        Heap.HEAPF32[ 6 ] = u.x;
        Heap.HEAPF32[ 7 ] = u.y;
        Heap.HEAPF32[ 8 ] = u.z;

        // execute
        __Native._mathgasm_float3_mad( 0, 12, 24, 36 ); 

        // copy result
        return new Vec3( Heap.HEAPF32[ 9 ], Heap.HEAPF32[ 10 ], Heap.HEAPF32[ 11 ] );
    }

    mad( v, u ) {
        return Vec3.mad( this, v, u );
    }

    static length( v ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = v.x;
        Heap.HEAPF32[ 1 ] = v.y;
        Heap.HEAPF32[ 2 ] = v.z;
        
        // execute
        __Native._mathgasm_float3_length( 0, 12 ); 

        // copy result
        return Heap.HEAPF32[ 3 ];
    }

    length() {
        return Vec3.length( this );
    }

    static dot( u, v ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = u.x;
        Heap.HEAPF32[ 1 ] = u.y;
        Heap.HEAPF32[ 2 ] = u.z;
        Heap.HEAPF32[ 3 ] = v.x;
        Heap.HEAPF32[ 4 ] = v.y;
        Heap.HEAPF32[ 5 ] = v.z;
        
        // execute
        __Native._mathgasm_float3_dot( 0, 12, 24 ); 

        // copy result
        return Heap.HEAPF32[ 6 ];
    } 

    dot( v ) {
        return Vec3.dot( this, v );
    }

    static normalized( v ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = v.x;
        Heap.HEAPF32[ 1 ] = v.y;
        Heap.HEAPF32[ 2 ] = v.z;

        // execute
        __Native._mathgasm_float3_normalize( 0, 12 ); 

        // copy result
        return new Vec3( Heap.HEAPF32[ 3 ], Heap.HEAPF32[ 4 ], Heap.HEAPF32[ 5 ] );
    }

    normalized() {
        return Vec3.normalized( this );
    }

    static cross( u, v ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = u.x;
        Heap.HEAPF32[ 1 ] = u.y;
        Heap.HEAPF32[ 2 ] = u.z;

        Heap.HEAPF32[ 3 ] = v.x;
        Heap.HEAPF32[ 4 ] = v.y;
        Heap.HEAPF32[ 5 ] = v.z;

        // execute
        __Native._mathgasm_float3_cross( 0, 12, 24 ); 

        // copy result
        return new Vec3( Heap.HEAPF32[ 6 ], Heap.HEAPF32[ 7 ], Heap.HEAPF32[ 8 ] );
    }

    cross( v ) {
        return Vec3.cross( this, v );
    }

    static reflect( v, n ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = v.x;
        Heap.HEAPF32[ 1 ] = v.y;
        Heap.HEAPF32[ 2 ] = v.z;

        Heap.HEAPF32[ 3 ] = n.x;
        Heap.HEAPF32[ 4 ] = n.y;
        Heap.HEAPF32[ 5 ] = n.z;

        // execute
        __Native._mathgasm_float3_reflect( 0, 12, 24 ); 

        // copy result
        return new Vec3( Heap.HEAPF32[ 6 ], Heap.HEAPF32[ 7 ], Heap.HEAPF32[ 8 ] );
    }

    reflect( n ) {
        return Vec3.reflect( this, n );
    }

    static lerped( u, v, dt ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = u.x;
        Heap.HEAPF32[ 1 ] = u.y;
        Heap.HEAPF32[ 2 ] = u.z;

        Heap.HEAPF32[ 3 ] = v.x;
        Heap.HEAPF32[ 4 ] = v.y;
        Heap.HEAPF32[ 5 ] = v.z;

        Heap.HEAPF32[ 6 ] = dt;

        // execute
        __Native._mathgasm_float3_lerp( 0, 12, 24, 28 ); 

        // copy result
        return new Vec3( Heap.HEAPF32[ 7 ], Heap.HEAPF32[ 8 ], Heap.HEAPF32[ 9 ] );
    }

    lerped( v, dt ) {
        return Vec3.lerped( this, v, dt );
    }
}

export { Vec3 };