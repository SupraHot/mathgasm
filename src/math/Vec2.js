import { __Native } from '../util/Bootstrapper.js'
import { Heap } from '../util/Heap.js'

class Vec2 {
    constructor( x, y ) {
        this.x = x;
        this.y = y;

        // this.byteSize = 8;
    }

    add( v ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = this.x;
        Heap.HEAPF32[ 1 ] = this.y;
        Heap.HEAPF32[ 2 ] = v.x;
        Heap.HEAPF32[ 3 ] = v.y;

        // execute
        __Native._mathgasm_float2_add( 0, 8, 16 ); 

        // copy result
        return new Vec2( Heap.HEAPF32[ 4 ], Heap.HEAPF32[ 5 ] );
    }

    sub( v ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = this.x;
        Heap.HEAPF32[ 1 ] = this.y;
        Heap.HEAPF32[ 2 ] = -v.x;
        Heap.HEAPF32[ 3 ] = -v.y;

        // execute
        __Native._mathgasm_float2_add( 0, 8, 16 ); 

        // copy result
        return new Vec2( Heap.HEAPF32[ 4 ], Heap.HEAPF32[ 5 ] );
    }

    mul( x = 1, y = x ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = this.x;
        Heap.HEAPF32[ 1 ] = this.y;
        Heap.HEAPF32[ 2 ] = x;
        Heap.HEAPF32[ 3 ] = y;

        // execute
        __Native._mathgasm_float2_mul( 0, 8, 16 ); 

        // copy result
        return new Vec2( Heap.HEAPF32[ 4 ], Heap.HEAPF32[ 5 ] );
    }

    mad( v, u ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = this.x;
        Heap.HEAPF32[ 1 ] = this.y;
        Heap.HEAPF32[ 2 ] = v.x;
        Heap.HEAPF32[ 3 ] = v.y;
        Heap.HEAPF32[ 4 ] = u.x;
        Heap.HEAPF32[ 5 ] = u.y;

        // execute
        __Native._mathgasm_float2_mad( 0, 8, 16, 24 ); 

        // copy result
        return new Vec2( Heap.HEAPF32[ 6 ], Heap.HEAPF32[ 7 ] );
    }

    length() {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = this.x;
        Heap.HEAPF32[ 1 ] = this.y;
        
        // execute
        __Native._mathgasm_float2_length( 0, 8 ); 

        // copy result
        return Heap.HEAPF32[ 2 ];
    }

     dot( v ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = this.x;
        Heap.HEAPF32[ 1 ] = this.y;
        Heap.HEAPF32[ 2 ] = v.x;
        Heap.HEAPF32[ 3 ] = v.y;
        
        // execute
        __Native._mathgasm_float2_dot( 0, 8, 16 ); 

        // copy result
        return Heap.HEAPF32[ 4 ];
    }

    normalized() {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = this.x;
        Heap.HEAPF32[ 1 ] = this.y;

        // execute
        __Native._mathgasm_float2_normalize( 0, 8 ); 

        // copy result
        return new Vec2( Heap.HEAPF32[ 2 ], Heap.HEAPF32[ 3 ] );
    }

    lerped( v, dt ) {
         // load vectors into memory
        Heap.HEAPF32[ 0 ] = this.x;
        Heap.HEAPF32[ 1 ] = this.y;
        Heap.HEAPF32[ 2 ] = v.x;
        Heap.HEAPF32[ 3 ] = v.y;
        Heap.HEAPF32[ 4 ] = dt;

        // execute
        __Native._mathgasm_float2_lerp( 0, 8, 16, 20 ); 

        // copy result
        return new Vec2( Heap.HEAPF32[ 5 ], Heap.HEAPF32[ 6 ] );
    }
}

export { Vec2 };