class Heap {
    constructor(  ) {
        
    }

    __init( memory ) {
        this.__initHeap( memory.buffer );
    }

    __initHeap( buffer ) {
        this.wasmMemoryBuffer = buffer;
        this.HEAP8   = new Int8Array( buffer );
        this.HEAP16  = new Int16Array( buffer );
        this.HEAP32  = new Int32Array( buffer );
        this.HEAPU8  = new Uint8Array( buffer );
        this.HEAPU16 = new Uint16Array( buffer );
        this.HEAPU32 = new Uint32Array( buffer );
        this.HEAPF32 = new Float32Array( buffer );
        this.HEAPF64 = new Float64Array( buffer );
        this.__initMalloc();
    }

    __initMalloc() {
        this.HEAPU32[(20) >> 2] = 0;
        this.HEAPU32[(24) >> 2] = 0;
        this.HEAPU32[(28) >> 2] = 0;
        this.HEAP32[(8) >> 2] = (40|0);
        this.HEAP32[(12) >> 2] = (40|0);
    }

    malloc( nbytes ) {
        nbytes = nbytes|0;
        var alignment = 8;
        var chunkSize = 0;
        var freeChunk = 0;
        var offset = 0;
        var top = 0;
        var ptr = 0;
        nbytes = ((((((nbytes|0) + ((((alignment|0) - (1|0))|0))|0)|0)|0 & ~(alignment - (1|0)))|0)|0)|0;
        chunkSize = ((nbytes|0) + (8|0))|0;
        freeChunk = (this.getFreeChunk((chunkSize|0))|0);
        
        if ((((freeChunk|0) | 0) > (0|0))|0) {
            return (freeChunk)|0;
        }
        
        offset = (((((this.HEAP32[(12) >> 2]|0) + ((((alignment|0) - (1|0))|0))|0)|0)|0 & ~(alignment - (1|0)))|0);
        top = ((offset|0) + (chunkSize|0))|0;
        ptr = ((offset|0) + (4|0))|0;
        this.setHeadSize((ptr|0), (chunkSize|0));
        this.setInuse(((ptr|0) + (4|0))|0);
        this.setFoot((ptr|0), (chunkSize|0));
        this.HEAP32[(12) >> 2] = ((top|0) + (4|0))|0;
        offset = ((((offset|0) + (8|0))|0)|0)|0;
        ptr = ((offset|0))|0;
        
        while (((ptr|0) < (top|0))|0) {
            this.HEAPU32[(ptr ) >> 2] = 0;
            ptr = ((((ptr|0) + (4|0))|0)|0)|0;
        }

        return (offset)|0;
    }

    getFreeChunk( nbytes ) {
        nbytes = nbytes|0;
        var freeChunk = 0;
        if (((this.HEAPU32[(20) >> 2]|0) > (0|0))|0) {
            freeChunk = (this.findChunk((nbytes|0))|0);
            
            if ((((freeChunk|0) | 0) > (0|0))|0) {
                if ((((freeChunk|0) == (this.HEAPU32[(24) >> 2]|0))|0)) {
                    this.HEAPU32[(24) >> 2] = (this.nextFree((freeChunk|0))|0);
                }
                
                if ((((freeChunk|0) == (this.HEAPU32[(28) >> 2]|0))|0)) {
                    this.HEAPU32[(28) >> 2] = 0;
                }
                
                this.HEAPU32[(20) >> 2] = ((this.HEAPU32[(20) >> 2]|0) - (1|0))|0;
                this.setInuse((freeChunk|0));
                this.HEAPU32[(16) >> 2] = ((this.HEAPU32[(16) >> 2]|0) - (this.getChunkSize((freeChunk|0))|0))|0;
                return (freeChunk)|0;
            }
        }
        return 0;
    }

    setHeadSize( ptr, s ) {
        ptr = ptr|0;
        s = s|0;
        this.HEAPU32[(ptr ) >> 2] = ((((this.HEAPU32[(ptr ) >> 2]|0) & (7|0))|0)|0 | (s|0))|0;
    }

    setInuse( ptr ) {
        ptr = ptr|0;
        var chunkptr = 0;
        chunkptr = ((ptr|0) - (4|0))|0;
        this.HEAPU32[(chunkptr ) >> 2] = ((this.HEAPU32[(chunkptr ) >> 2]|0) | (1|0))|0;
    }

    setFoot( ptr, s ) {
        ptr = ptr|0;
        s = s|0;
        var size = 0;
        var chunkptr = 0;
        size = (this.HEAPU32[(ptr ) >> 2]|0);
        chunkptr = ((ptr|0) + (size|0))|0;
        this.HEAPU32[(chunkptr ) >> 2] = (s|0);
    }

    nextFree( ptr ) {
        ptr = ptr|0;
        return ((this.HEAP32[(ptr ) >> 2]|0) | 0)|0;
    }

    findChunk( nbytes ) {
        nbytes = nbytes|0;
        var chunk = 0;
        chunk = (this.HEAPU32[(24) >> 2]|0);
        
        while (((chunk|0) != 0)|0) {
            if ((((this.getChunkSize((chunk|0))|0) == (nbytes|0))|0)) {
                return (chunk)|0;
            }
            
            chunk = ((this.HEAPU32[(chunk ) >> 2]|0))|0;
        }
        return 0;
    }

    getFreeChunk( nbytes ) {
        nbytes = nbytes|0;
        var freeChunk = 0;
        if (((this.HEAPU32[(20) >> 2]|0) > (0|0))|0) {
            freeChunk = (this.findChunk((nbytes|0))|0);
            
            if ((((freeChunk|0) | 0) > (0|0))|0) {
                if ((((freeChunk|0) == (HEAPU32[(24) >> 2]|0))|0)) {
                    this.HEAPU32[(24) >> 2] = (this.nextFree((freeChunk|0))|0);
                }
                
                if ((((freeChunk|0) == (this.HEAPU32[(28) >> 2]|0))|0)) {
                    this.HEAPU32[(28) >> 2] = 0;
                }
                
                this.HEAPU32[(20) >> 2] = ((this.HEAPU32[(20) >> 2]|0) - (1|0))|0;
                this.setInuse((freeChunk|0));
                this.HEAPU32[(16) >> 2] = ((this.HEAPU32[(16) >> 2]|0) - (this.getChunkSize((freeChunk|0))|0))|0;
                return (freeChunk)|0;
            }
        }
        return 0;
    }

    getChunkSize( ptr ) {
        ptr = ptr|0;
        var chunkptr = 0;
        chunkptr = ((ptr|0) - (4|0))|0;
        return ((this.HEAPU32[(chunkptr ) >> 2]|0) & (-2|0))|0;
    }
};

let heap = new Heap();
export { heap as Heap };