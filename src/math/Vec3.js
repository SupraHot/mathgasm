import { __Native } from '../util/Bootstrapper.js'
import { Heap } from '../util/Heap.js'

class Vec3 {
    constructor( x, y, z ) {
        this.x = x;
        this.y = y;
        this.z = z;

        // this.byteSize = 12;
    }

    add( v ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = this.x;
        Heap.HEAPF32[ 1 ] = this.y;
        Heap.HEAPF32[ 2 ] = this.z;

        Heap.HEAPF32[ 3 ] = v.x;
        Heap.HEAPF32[ 4 ] = v.y;
        Heap.HEAPF32[ 5 ] = v.z;

        // execute
        __Native._mathgasm_float3_add( 0, 12, 24 ); 

        // copy result
        return new Vec3( Heap.HEAPF32[ 6 ], Heap.HEAPF32[ 7 ], Heap.HEAPF32[ 8 ] );
    }

    sub( v ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = this.x;
        Heap.HEAPF32[ 1 ] = this.y;
        Heap.HEAPF32[ 2 ] = this.z;

        Heap.HEAPF32[ 3 ] = -v.x;
        Heap.HEAPF32[ 4 ] = -v.y;
        Heap.HEAPF32[ 5 ] = -v.z;

        // execute
        __Native._mathgasm_float3_add( 0, 12, 24 ); 

        // copy result
        return new Vec3( Heap.HEAPF32[ 6 ], Heap.HEAPF32[ 7 ], Heap.HEAPF32[ 8 ] );
    }

    mul( x = 1, y = x, z = x ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = this.x;
        Heap.HEAPF32[ 1 ] = this.y;
        Heap.HEAPF32[ 2 ] = this.z;

        Heap.HEAPF32[ 3 ] = x;
        Heap.HEAPF32[ 4 ] = y;
        Heap.HEAPF32[ 5 ] = z;

        // execute
        __Native._mathgasm_float3_mul( 0, 12, 24 ); 

        // copy result
        return new Vec3( Heap.HEAPF32[ 6 ], Heap.HEAPF32[ 7 ], Heap.HEAPF32[ 8 ] );
    }

    mad( v, u ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = this.x;
        Heap.HEAPF32[ 1 ] = this.y;
        Heap.HEAPF32[ 2 ] = this.z;

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

    length() {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = this.x;
        Heap.HEAPF32[ 1 ] = this.y;
        Heap.HEAPF32[ 2 ] = this.z;
        
        // execute
        __Native._mathgasm_float3_length( 0, 12 ); 

        // copy result
        return Heap.HEAPF32[ 3 ];
    }

    dot( v ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = this.x;
        Heap.HEAPF32[ 1 ] = this.y;
        Heap.HEAPF32[ 2 ] = this.z;
        Heap.HEAPF32[ 3 ] = v.x;
        Heap.HEAPF32[ 4 ] = v.y;
        Heap.HEAPF32[ 5 ] = v.z;
        
        // execute
        __Native._mathgasm_float3_dot( 0, 12, 24 ); 

        // copy result
        return Heap.HEAPF32[ 6 ];
    }

    normalized() {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = this.x;
        Heap.HEAPF32[ 1 ] = this.y;
        Heap.HEAPF32[ 2 ] = this.z;

        // execute
        __Native._mathgasm_float3_normalize( 0, 12 ); 

        // copy result
        return new Vec3( Heap.HEAPF32[ 3 ], Heap.HEAPF32[ 4 ], Heap.HEAPF32[ 5 ] );
    }

    cross( v ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = this.x;
        Heap.HEAPF32[ 1 ] = this.y;
        Heap.HEAPF32[ 2 ] = this.z;

        Heap.HEAPF32[ 3 ] = v.x;
        Heap.HEAPF32[ 4 ] = v.y;
        Heap.HEAPF32[ 5 ] = v.z;

        // execute
        __Native._mathgasm_float3_cross( 0, 12, 24 ); 

        // copy result
        return new Vec3( Heap.HEAPF32[ 6 ], Heap.HEAPF32[ 7 ], Heap.HEAPF32[ 8 ] );
    }

    reflect( n ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = this.x;
        Heap.HEAPF32[ 1 ] = this.y;
        Heap.HEAPF32[ 2 ] = this.z;

        Heap.HEAPF32[ 3 ] = n.x;
        Heap.HEAPF32[ 4 ] = n.y;
        Heap.HEAPF32[ 5 ] = n.z;

        // execute
        __Native._mathgasm_float3_reflect( 0, 12, 24 ); 

        // copy result
        return new Vec3( Heap.HEAPF32[ 6 ], Heap.HEAPF32[ 7 ], Heap.HEAPF32[ 8 ] );
    }

    lerped( v, dt ) {
        // load vectors into memory
        Heap.HEAPF32[ 0 ] = this.x;
        Heap.HEAPF32[ 1 ] = this.y;
        Heap.HEAPF32[ 2 ] = this.z;

        Heap.HEAPF32[ 3 ] = v.x;
        Heap.HEAPF32[ 4 ] = v.y;
        Heap.HEAPF32[ 5 ] = v.z;

        Heap.HEAPF32[ 6 ] = dt;

        // execute
        __Native._mathgasm_float3_lerp( 0, 12, 24, 28 ); 

        // copy result
        return new Vec3( Heap.HEAPF32[ 7 ], Heap.HEAPF32[ 8 ], Heap.HEAPF32[ 9 ] );
    }
}

export { Vec3 };