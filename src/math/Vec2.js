import { __Native } from '../util/Bootstrapper.js'

class Vec2 {
    constructor( x, y ) {
        this.x = x;
        this.y = y;

        // this.byteSize = 8;
    }

    add( v ) {
        // load vectors into memory
        mathgasm.Heap.HEAPF32[ 0 ] = this.x;
        mathgasm.Heap.HEAPF32[ 1 ] = this.y;
        mathgasm.Heap.HEAPF32[ 2 ] = v.x;
        mathgasm.Heap.HEAPF32[ 3 ] = v.y;

        // execute
        mathgasm.__Native._mathgasm_float2_add( 0, 8, 16 ); 

        // copy result
        return new Vec2( mathgasm.Heap.HEAPF32[ 4 ], mathgasm.Heap.HEAPF32[ 5 ] );
    }

    sub( v ) {
        // load vectors into memory
        mathgasm.Heap.HEAPF32[ 0 ] = this.x;
        mathgasm.Heap.HEAPF32[ 1 ] = this.y;
        mathgasm.Heap.HEAPF32[ 2 ] = -v.x;
        mathgasm.Heap.HEAPF32[ 3 ] = -v.y;

        // execute
        mathgasm.__Native._mathgasm_float2_add( 0, 8, 16 ); 

        // copy result
        return new Vec2( mathgasm.Heap.HEAPF32[ 4 ], mathgasm.Heap.HEAPF32[ 5 ] );
    }

    mul( x = 1, y = x ) {
        // load vectors into memory
        mathgasm.Heap.HEAPF32[ 0 ] = this.x;
        mathgasm.Heap.HEAPF32[ 1 ] = this.y;
        mathgasm.Heap.HEAPF32[ 2 ] = x;
        mathgasm.Heap.HEAPF32[ 3 ] = y;

        // execute
        mathgasm.__Native._mathgasm_float2_mul( 0, 8, 16 ); 

        // copy result
        return new Vec2( mathgasm.Heap.HEAPF32[ 4 ], mathgasm.Heap.HEAPF32[ 5 ] );
    }

    mad( v, u ) {
        // load vectors into memory
        mathgasm.Heap.HEAPF32[ 0 ] = this.x;
        mathgasm.Heap.HEAPF32[ 1 ] = this.y;
        mathgasm.Heap.HEAPF32[ 2 ] = v.x;
        mathgasm.Heap.HEAPF32[ 3 ] = v.y;
        mathgasm.Heap.HEAPF32[ 4 ] = u.x;
        mathgasm.Heap.HEAPF32[ 5 ] = u.y;

        // execute
        mathgasm.__Native._mathgasm_float2_mad( 0, 8, 16, 24 ); 

        // copy result
        return new Vec2( mathgasm.Heap.HEAPF32[ 6 ], mathgasm.Heap.HEAPF32[ 7 ] );
    }

    length() {
        // load vectors into memory
        mathgasm.Heap.HEAPF32[ 0 ] = this.x;
        mathgasm.Heap.HEAPF32[ 1 ] = this.y;
        
        // execute
        mathgasm.__Native._mathgasm_float2_length( 0, 8 ); 

        // copy result
        return mathgasm.Heap.HEAPF32[ 2 ];
    }

     dot( v ) {
        // load vectors into memory
        mathgasm.Heap.HEAPF32[ 0 ] = this.x;
        mathgasm.Heap.HEAPF32[ 1 ] = this.y;
        mathgasm.Heap.HEAPF32[ 2 ] = v.x;
        mathgasm.Heap.HEAPF32[ 3 ] = v.y;
        
        // execute
        mathgasm.__Native._mathgasm_float2_dot( 0, 8, 16 ); 

        // copy result
        return mathgasm.Heap.HEAPF32[ 4 ];
    }

    normalized() {
        // load vectors into memory
        mathgasm.Heap.HEAPF32[ 0 ] = this.x;
        mathgasm.Heap.HEAPF32[ 1 ] = this.y;

        // execute
        mathgasm.__Native._mathgasm_float2_normalize( 0, 8 ); 

        // copy result
        return new Vec2( mathgasm.Heap.HEAPF32[ 2 ], mathgasm.Heap.HEAPF32[ 3 ] );
    }

    lerped( v, dt ) {
         // load vectors into memory
        mathgasm.Heap.HEAPF32[ 0 ] = this.x;
        mathgasm.Heap.HEAPF32[ 1 ] = this.y;
        mathgasm.Heap.HEAPF32[ 2 ] = v.x;
        mathgasm.Heap.HEAPF32[ 3 ] = v.y;
        mathgasm.Heap.HEAPF32[ 4 ] = dt;

        // execute
        mathgasm.__Native._mathgasm_float2_lerp( 0, 8, 16, 20 ); 

        // copy result
        return new Vec2( mathgasm.Heap.HEAPF32[ 5 ], mathgasm.Heap.HEAPF32[ 6 ] );
    }
}

export { Vec2 };