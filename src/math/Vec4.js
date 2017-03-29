import { __Native } from '../util/Bootstrapper.js'
import { Heap } from '../util/Heap.js'

class Vec4 {
    constructor( x, y, z, w ) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;

        // this.byteSize = 16;
    }

    static add( u, v ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = u.x;
        Heap.HEAPF32[ 1 ] = u.y;
        Heap.HEAPF32[ 2 ] = u.z;
        Heap.HEAPF32[ 3 ] = u.w;

        Heap.HEAPF32[ 4 ] = v.x;
        Heap.HEAPF32[ 5 ] = v.y;
        Heap.HEAPF32[ 6 ] = v.z;
        Heap.HEAPF32[ 7 ] = v.w;

        // execute
        __Native._mathgasm_float4_add( 0, 16, 32 ); 

        // copy result
        return new Vec4( Heap.HEAPF32[ 8 ], Heap.HEAPF32[ 9 ], Heap.HEAPF32[ 10 ], Heap.HEAPF32[ 11 ] );
    }

    add( v ) {
        return Vec4.add( this, v );
    }
    
    static sub( u, v ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = u.x;
        Heap.HEAPF32[ 1 ] = u.y;
        Heap.HEAPF32[ 2 ] = u.z;
        Heap.HEAPF32[ 3 ] = u.w;

        Heap.HEAPF32[ 4 ] = -v.x;
        Heap.HEAPF32[ 5 ] = -v.y;
        Heap.HEAPF32[ 6 ] = -v.z;
        Heap.HEAPF32[ 7 ] = -v.w;

        // execute
        __Native._mathgasm_float4_add( 0, 16, 32 ); 

        // copy result
        return new Vec4( Heap.HEAPF32[ 8 ], Heap.HEAPF32[ 9 ], Heap.HEAPF32[ 10 ], Heap.HEAPF32[ 11 ] );
    }

    sub( v ) {
        return Vec4.sub( this, v );
    }

    static mul( v, x, y, z, w ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = v.x;
        Heap.HEAPF32[ 1 ] = v.y;
        Heap.HEAPF32[ 2 ] = v.z;
        Heap.HEAPF32[ 3 ] = v.w;

        Heap.HEAPF32[ 4 ] = x;
        Heap.HEAPF32[ 5 ] = y;
        Heap.HEAPF32[ 6 ] = z;
        Heap.HEAPF32[ 7 ] = w;

        // execute
        __Native._mathgasm_float4_mul( 0, 16, 32 ); 

        // copy result
        return new Vec4( Heap.HEAPF32[ 8 ], Heap.HEAPF32[ 9 ], Heap.HEAPF32[ 10 ], Heap.HEAPF32[ 11 ] );
    }

    mul( x = 1, y = x, z = x, w = x ) {
        return Vec4.mul( this, x, y, z, w );
    }

    static length( v ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = v.x;
        Heap.HEAPF32[ 1 ] = v.y;
        Heap.HEAPF32[ 2 ] = v.z;
        Heap.HEAPF32[ 3 ] = v.w;
        
        // execute
        __Native._mathgasm_float4_length( 0, 16 ); 

        // copy result
        return Heap.HEAPF32[ 4 ];
    }

    length() {
        return Vec4.length( this );
    }

    static dot( u, v ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = u.x;
        Heap.HEAPF32[ 1 ] = u.y;
        Heap.HEAPF32[ 2 ] = u.z;
        Heap.HEAPF32[ 3 ] = u.w;

        Heap.HEAPF32[ 4 ] = v.x;
        Heap.HEAPF32[ 5 ] = v.y;
        Heap.HEAPF32[ 6 ] = v.z;
        Heap.HEAPF32[ 7 ] = v.w;
        
        // execute
        __Native._mathgasm_float4_dot( 0, 16, 32 ); 

        // copy result
        return Heap.HEAPF32[ 8 ];
    }

    dot( v ) {
        return Vec4.dot( this, v );
    }

    static normalized( v ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = v.x;
        Heap.HEAPF32[ 1 ] = v.y;
        Heap.HEAPF32[ 2 ] = v.z;
        Heap.HEAPF32[ 3 ] = v.w;

        // execute
        __Native._mathgasm_float4_normalize( 0, 16 ); 

        // copy result
        return new Vec4( Heap.HEAPF32[ 4 ], Heap.HEAPF32[ 5 ], Heap.HEAPF32[ 6 ], Heap.HEAPF32[ 7 ] );
    }

    normalized() {
        return Vec4.normalized( this );
    }

    static lerped( u, v, dt ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = u.x;
        Heap.HEAPF32[ 1 ] = u.y;
        Heap.HEAPF32[ 2 ] = u.z;
        Heap.HEAPF32[ 3 ] = u.w;

        Heap.HEAPF32[ 4 ] = v.x;
        Heap.HEAPF32[ 5 ] = v.y;
        Heap.HEAPF32[ 6 ] = v.z;
        Heap.HEAPF32[ 7 ] = v.w;

        Heap.HEAPF32[ 8 ] = dt;

        // execute
        __Native._mathgasm_float4_lerp( 0, 16, 32, 36 ); 

        // copy result
        return new Vec4( Heap.HEAPF32[ 9 ], Heap.HEAPF32[ 10 ], Heap.HEAPF32[ 11 ], Heap.HEAPF32[ 12 ] );
    }

    lerped( v, dt ) {
        return Vec4.lerped( this, v, dt );
    }
}

export { Vec4 };