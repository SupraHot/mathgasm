import { __Native } from '../util/Bootstrapper.js'
import { Heap } from '../util/Heap.js'

class Vec2 {
    constructor( x, y ) {
        this.x = x;
        this.y = y;

        // this.byteSize = 8;
    }
    static add( v, w ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = v.x;
        Heap.HEAPF32[ 1 ] = v.y;
        Heap.HEAPF32[ 2 ] = w.x;
        Heap.HEAPF32[ 3 ] = w.y;

        // execute
        __Native._mathgasm_float2_add( 0, 8, 16 ); 

        // copy result
        return new Vec2( Heap.HEAPF32[ 4 ], Heap.HEAPF32[ 5 ] );
    }

    add( v ) {
        return Vec2.add( this, v );
    }

    static sub( v, w ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = v.x;
        Heap.HEAPF32[ 1 ] = v.y;
        Heap.HEAPF32[ 2 ] = -w.x;
        Heap.HEAPF32[ 3 ] = -w.y;

        // execute
        __Native._mathgasm_float2_add( 0, 8, 16 ); 

        // copy result
        return new Vec2( Heap.HEAPF32[ 4 ], Heap.HEAPF32[ 5 ] );
    }   

    sub( v ) {
        return Vec2.sub( this, v );
    }

    static mul( v, x, y ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = v.x;
        Heap.HEAPF32[ 1 ] = v.y;
        Heap.HEAPF32[ 2 ] = x;
        Heap.HEAPF32[ 3 ] = y;

        // execute
        __Native._mathgasm_float2_mul( 0, 8, 16 ); 

        // copy result
        return new Vec2( Heap.HEAPF32[ 4 ], Heap.HEAPF32[ 5 ] );
    }

    mul( x = 1, y = x ) {
        return Vec2.mul( this, x, y );    
    }

    static mad( w, v, u ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = w.x;
        Heap.HEAPF32[ 1 ] = w.y;
        Heap.HEAPF32[ 2 ] = v.x;
        Heap.HEAPF32[ 3 ] = v.y;
        Heap.HEAPF32[ 4 ] = u.x;
        Heap.HEAPF32[ 5 ] = u.y;

        // execute
        __Native._mathgasm_float2_mad( 0, 8, 16, 24 ); 

        // copy result
        return new Vec2( Heap.HEAPF32[ 6 ], Heap.HEAPF32[ 7 ] );
    }

    mad( v, u ) {
        return Vec2.mad( this, v, u );
    }

    static length( v ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = v.x;
        Heap.HEAPF32[ 1 ] = v.y;
        
        // execute
        __Native._mathgasm_float2_length( 0, 8 ); 

        // copy result
        return Heap.HEAPF32[ 2 ];
    }

    length() {
        return Vec2.length( this );
    }

    static dot( u, v ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = u.x;
        Heap.HEAPF32[ 1 ] = u.y;
        Heap.HEAPF32[ 2 ] = v.x;
        Heap.HEAPF32[ 3 ] = v.y;
        
        // execute
        __Native._mathgasm_float2_dot( 0, 8, 16 ); 

        // copy result
        return Heap.HEAPF32[ 4 ];
    }

    dot( v ) {
        return Vec2.dot( this, v );
    }

    static normalized( v ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = v.x;
        Heap.HEAPF32[ 1 ] = v.y;

        // execute
        __Native._mathgasm_float2_normalize( 0, 8 ); 

        // copy result
        return new Vec2( Heap.HEAPF32[ 2 ], Heap.HEAPF32[ 3 ] );
    }

    normalized() {
        return Vec2.normalized( this );    
    }

    static lerped( u, v, dt ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = u.x;
        Heap.HEAPF32[ 1 ] = u.y;
        Heap.HEAPF32[ 2 ] = v.x;
        Heap.HEAPF32[ 3 ] = v.y;
        Heap.HEAPF32[ 4 ] = dt;

        // execute
        __Native._mathgasm_float2_lerp( 0, 8, 16, 20 ); 

        // copy result
        return new Vec2( Heap.HEAPF32[ 5 ], Heap.HEAPF32[ 6 ] );
    }

    lerped( v, dt ) {
        return Vec2.lerped( this, v, dt );
    }
}

export { Vec2 };