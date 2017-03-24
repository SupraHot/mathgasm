import { __Native } from '../util/Bootstrapper.js'

class Vec2 {
    constructor( x, y ) {
        this.x = x;
        this.y = y;
    }

    add( v ) {
        // load values into memory
        console.log( "heap pointer", __Native.getHeapPtr() );
        console.log( "this", this );
        console.log( "v", v );
        var ptrV0 = __Native.new_mathgasm_float2( this.x, this.y );
        var ptrV1 = __Native.new_mathgasm_float2( v.x, v.y );
        var ptrV2 = __Native.mathgasm_float2_add( ptrV0, ptrV1 );
        __Native.free( ptrV0 );
        __Native.free( ptrV1 );

        var heap = __Native.memory.buffer;
        var dataHeap = new Uint8Array( heap, ptrV2, 2 * 4 );
        var data = new Float32Array( dataHeap.buffer, dataHeap.byteOffset, 2 );
        var result = new Vec2( data[ 0 ], data[ 1 ] );
        __Native.free( ptrV2 );
        // __Native.getHeapPtr()
        return result;
    }
}

export { Vec2 };