/**
 * WASM memory heap
 */
class Heap {
    constructor() {
        
    }

    __init( memory ) {
        this.__initHeap( memory.buffer );
    }

    __initHeap( buffer ) {
        this.wasmMemoryBuffer = buffer;
        // this.HEAP8   = new Int8Array( buffer );
        // this.HEAP16  = new Int16Array( buffer );
        // this.HEAP32  = new Int32Array( buffer );
        // this.HEAPU8  = new Uint8Array( buffer );
        // this.HEAPU16 = new Uint16Array( buffer );
        // this.HEAPU32 = new Uint32Array( buffer );
        this.HEAPF32 = new Float32Array( buffer );
        // this.HEAPF64 = new Float64Array( buffer );
        this.__initMalloc();
    }

    __initMalloc() {
        // this.HEAPU32[(20) >> 2] = 0;
        // this.HEAPU32[(24) >> 2] = 0;
        // this.HEAPU32[(28) >> 2] = 0;
        // this.HEAP32[(8) >> 2] = (40|0);
        // this.HEAP32[(12) >> 2] = (40|0);
    }

    malloc( nbytes ) {
        return 0;
    }
};

let heap = new Heap();
export { heap as Heap };