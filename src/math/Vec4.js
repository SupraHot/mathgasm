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

    add( v ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = this.x;
        Heap.HEAPF32[ 1 ] = this.y;
        Heap.HEAPF32[ 2 ] = this.z;
        Heap.HEAPF32[ 3 ] = this.w;

        Heap.HEAPF32[ 4 ] = v.x;
        Heap.HEAPF32[ 5 ] = v.y;
        Heap.HEAPF32[ 6 ] = v.z;
        Heap.HEAPF32[ 7 ] = v.w;

        // execute
        __Native._mathgasm_float4_add( 0, 16, 32 ); 

        // copy result
        return new Vec4( Heap.HEAPF32[ 8 ], Heap.HEAPF32[ 9 ], Heap.HEAPF32[ 10 ], Heap.HEAPF32[ 11 ] );
    }

    sub( v ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = this.x;
        Heap.HEAPF32[ 1 ] = this.y;
        Heap.HEAPF32[ 2 ] = this.z;
        Heap.HEAPF32[ 3 ] = this.w;

        Heap.HEAPF32[ 4 ] = -v.x;
        Heap.HEAPF32[ 5 ] = -v.y;
        Heap.HEAPF32[ 6 ] = -v.z;
        Heap.HEAPF32[ 7 ] = -v.w;

        // execute
        __Native._mathgasm_float4_add( 0, 16, 32 ); 

        // copy result
        return new Vec4( Heap.HEAPF32[ 8 ], Heap.HEAPF32[ 9 ], Heap.HEAPF32[ 10 ], Heap.HEAPF32[ 11 ] );
    }

    mul( x = 1, y = x, z = x, w = x ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = this.x;
        Heap.HEAPF32[ 1 ] = this.y;
        Heap.HEAPF32[ 2 ] = this.z;
        Heap.HEAPF32[ 3 ] = this.w;

        Heap.HEAPF32[ 4 ] = x;
        Heap.HEAPF32[ 5 ] = y;
        Heap.HEAPF32[ 6 ] = z;
        Heap.HEAPF32[ 7 ] = w;

        // execute
        __Native._mathgasm_float4_mul( 0, 16, 32 ); 

        // copy result
        return new Vec4( Heap.HEAPF32[ 8 ], Heap.HEAPF32[ 9 ], Heap.HEAPF32[ 10 ], Heap.HEAPF32[ 11 ] );
    }

    length() {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = this.x;
        Heap.HEAPF32[ 1 ] = this.y;
        Heap.HEAPF32[ 2 ] = this.z;
        Heap.HEAPF32[ 3 ] = this.w;
        
        // execute
        __Native._mathgasm_float4_length( 0, 16 ); 

        // copy result
        return Heap.HEAPF32[ 4 ];
    }

    dot( v ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = this.x;
        Heap.HEAPF32[ 1 ] = this.y;
        Heap.HEAPF32[ 2 ] = this.z;
        Heap.HEAPF32[ 3 ] = this.w;

        Heap.HEAPF32[ 4 ] = v.x;
        Heap.HEAPF32[ 5 ] = v.y;
        Heap.HEAPF32[ 6 ] = v.z;
        Heap.HEAPF32[ 7 ] = v.w;
        
        // execute
        __Native._mathgasm_float4_dot( 0, 16, 32 ); 

        // copy result
        return Heap.HEAPF32[ 8 ];
    }

    normalized() {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = this.x;
        Heap.HEAPF32[ 1 ] = this.y;
        Heap.HEAPF32[ 2 ] = this.z;
        Heap.HEAPF32[ 3 ] = this.w;

        // execute
        __Native._mathgasm_float4_normalize( 0, 16 ); 

        // copy result
        return new Vec4( Heap.HEAPF32[ 4 ], Heap.HEAPF32[ 5 ], Heap.HEAPF32[ 6 ], Heap.HEAPF32[ 7 ] );
    }

    lerped( v, dt ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = this.x;
        Heap.HEAPF32[ 1 ] = this.y;
        Heap.HEAPF32[ 2 ] = this.z;
        Heap.HEAPF32[ 3 ] = this.w;

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
}

export { Vec4 };