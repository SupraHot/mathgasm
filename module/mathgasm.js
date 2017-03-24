// COMPILE TIME DEFINITIONS (Generated via gulp) 
var __DATE__ = "Fri Mar 24 2017 21:11:15 GMT+0100 (CET)"; 
// END COMPILE TIME DEFINITIONS 
 
console.log('Compiled at', __DATE__);
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.mathgasm = global.mathgasm || {})));
}(this, (function (exports) { 'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var Heap = function () {
    function Heap() {
        classCallCheck(this, Heap);
    }

    createClass(Heap, [{
        key: "__init",
        value: function __init(memory) {
            this.__initHeap(memory.buffer);
        }
    }, {
        key: "__initHeap",
        value: function __initHeap(buffer) {
            this.wasmMemoryBuffer = buffer;
            this.HEAP8 = new Int8Array(buffer);
            this.HEAP16 = new Int16Array(buffer);
            this.HEAP32 = new Int32Array(buffer);
            this.HEAPU8 = new Uint8Array(buffer);
            this.HEAPU16 = new Uint16Array(buffer);
            this.HEAPU32 = new Uint32Array(buffer);
            this.HEAPF32 = new Float32Array(buffer);
            this.HEAPF64 = new Float64Array(buffer);
            this.__initMalloc();
        }
    }, {
        key: "__initMalloc",
        value: function __initMalloc() {
            this.HEAPU32[20 >> 2] = 0;
            this.HEAPU32[24 >> 2] = 0;
            this.HEAPU32[28 >> 2] = 0;
            this.HEAP32[8 >> 2] = 40 | 0;
            this.HEAP32[12 >> 2] = 40 | 0;
        }
    }, {
        key: "malloc",
        value: function malloc(nbytes) {
            nbytes = nbytes | 0;
            var alignment = 8;
            var chunkSize = 0;
            var freeChunk = 0;
            var offset = 0;
            var top = 0;
            var ptr = 0;
            nbytes = (nbytes | 0) + ((alignment | 0) - (1 | 0) | 0) | 0 | 0 | 0 & ~(alignment - (1 | 0)) | 0 | 0 | 0;
            chunkSize = (nbytes | 0) + (8 | 0) | 0;
            freeChunk = this.getFreeChunk(chunkSize | 0) | 0;

            if ((freeChunk | 0 | 0) > (0 | 0) | 0) {
                return freeChunk | 0;
            }

            offset = (this.HEAP32[12 >> 2] | 0) + ((alignment | 0) - (1 | 0) | 0) | 0 | 0 | 0 & ~(alignment - (1 | 0)) | 0;
            top = (offset | 0) + (chunkSize | 0) | 0;
            ptr = (offset | 0) + (4 | 0) | 0;
            this.setHeadSize(ptr | 0, chunkSize | 0);
            this.setInuse((ptr | 0) + (4 | 0) | 0);
            this.setFoot(ptr | 0, chunkSize | 0);
            this.HEAP32[12 >> 2] = (top | 0) + (4 | 0) | 0;
            offset = (offset | 0) + (8 | 0) | 0 | 0 | 0;
            ptr = offset | 0 | 0;

            while ((ptr | 0) < (top | 0) | 0) {
                this.HEAPU32[ptr >> 2] = 0;
                ptr = (ptr | 0) + (4 | 0) | 0 | 0 | 0;
            }

            return offset | 0;
        }
    }, {
        key: "getFreeChunk",
        value: function getFreeChunk(nbytes) {
            nbytes = nbytes | 0;
            var freeChunk = 0;
            if ((this.HEAPU32[20 >> 2] | 0) > (0 | 0) | 0) {
                freeChunk = this.findChunk(nbytes | 0) | 0;

                if ((freeChunk | 0 | 0) > (0 | 0) | 0) {
                    if ((freeChunk | 0) == (this.HEAPU32[24 >> 2] | 0) | 0) {
                        this.HEAPU32[24 >> 2] = this.nextFree(freeChunk | 0) | 0;
                    }

                    if ((freeChunk | 0) == (this.HEAPU32[28 >> 2] | 0) | 0) {
                        this.HEAPU32[28 >> 2] = 0;
                    }

                    this.HEAPU32[20 >> 2] = (this.HEAPU32[20 >> 2] | 0) - (1 | 0) | 0;
                    this.setInuse(freeChunk | 0);
                    this.HEAPU32[16 >> 2] = (this.HEAPU32[16 >> 2] | 0) - (this.getChunkSize(freeChunk | 0) | 0) | 0;
                    return freeChunk | 0;
                }
            }
            return 0;
        }
    }, {
        key: "setHeadSize",
        value: function setHeadSize(ptr, s) {
            ptr = ptr | 0;
            s = s | 0;
            this.HEAPU32[ptr >> 2] = (this.HEAPU32[ptr >> 2] | 0) & (7 | 0) | 0 | 0 | (s | 0) | 0;
        }
    }, {
        key: "setInuse",
        value: function setInuse(ptr) {
            ptr = ptr | 0;
            var chunkptr = 0;
            chunkptr = (ptr | 0) - (4 | 0) | 0;
            this.HEAPU32[chunkptr >> 2] = this.HEAPU32[chunkptr >> 2] | 0 | (1 | 0) | 0;
        }
    }, {
        key: "setFoot",
        value: function setFoot(ptr, s) {
            ptr = ptr | 0;
            s = s | 0;
            var size = 0;
            var chunkptr = 0;
            size = this.HEAPU32[ptr >> 2] | 0;
            chunkptr = (ptr | 0) + (size | 0) | 0;
            this.HEAPU32[chunkptr >> 2] = s | 0;
        }
    }, {
        key: "nextFree",
        value: function nextFree(ptr) {
            ptr = ptr | 0;
            return this.HEAP32[ptr >> 2] | 0 | 0 | 0;
        }
    }, {
        key: "findChunk",
        value: function findChunk(nbytes) {
            nbytes = nbytes | 0;
            var chunk = 0;
            chunk = this.HEAPU32[24 >> 2] | 0;

            while ((chunk | 0) != 0 | 0) {
                if ((this.getChunkSize(chunk | 0) | 0) == (nbytes | 0) | 0) {
                    return chunk | 0;
                }

                chunk = this.HEAPU32[chunk >> 2] | 0 | 0;
            }
            return 0;
        }
    }, {
        key: "getFreeChunk",
        value: function getFreeChunk(nbytes) {
            nbytes = nbytes | 0;
            var freeChunk = 0;
            if ((this.HEAPU32[20 >> 2] | 0) > (0 | 0) | 0) {
                freeChunk = this.findChunk(nbytes | 0) | 0;

                if ((freeChunk | 0 | 0) > (0 | 0) | 0) {
                    if ((freeChunk | 0) == (HEAPU32[24 >> 2] | 0) | 0) {
                        this.HEAPU32[24 >> 2] = this.nextFree(freeChunk | 0) | 0;
                    }

                    if ((freeChunk | 0) == (this.HEAPU32[28 >> 2] | 0) | 0) {
                        this.HEAPU32[28 >> 2] = 0;
                    }

                    this.HEAPU32[20 >> 2] = (this.HEAPU32[20 >> 2] | 0) - (1 | 0) | 0;
                    this.setInuse(freeChunk | 0);
                    this.HEAPU32[16 >> 2] = (this.HEAPU32[16 >> 2] | 0) - (this.getChunkSize(freeChunk | 0) | 0) | 0;
                    return freeChunk | 0;
                }
            }
            return 0;
        }
    }, {
        key: "getChunkSize",
        value: function getChunkSize(ptr) {
            ptr = ptr | 0;
            var chunkptr = 0;
            chunkptr = (ptr | 0) - (4 | 0) | 0;
            return (this.HEAPU32[chunkptr >> 2] | 0) & (-2 | 0) | 0;
        }
    }]);
    return Heap;
}();



var heap = new Heap();

// Global native interface object. 
// Can be accessed through mathgasm.__Native
exports.__Native = {};

// This loads the wasm file and merges the result into the global scope

var Bootstrapper = function () {
    function Bootstrapper() {
        classCallCheck(this, Bootstrapper);
    }

    createClass(Bootstrapper, [{
        key: 'initialize',
        value: function initialize(path, callback) {
            // fetch( path )
            // .then( response => response.arrayBuffer() )
            // .then( buffer => WebAssembly.compile( buffer ) )
            // .then( module => {
            //     const imports = {
            //         env: {
            //             memoryBase: 0,
            //             tableBase: 0,
            //             memory: new WebAssembly.Memory({
            //                 initial: 128
            //             }),
            //             table: new WebAssembly.Table({
            //                 initial: 0,
            //                 element: 'anyfunc'
            //             }),
            //             DYNAMICTOP_PTR : 0,
            //             tempDoublePtr : 0,
            //             STACKTOP: 0,
            //             STACK_MAX: 0,
            //             ABORT : 0,
            //             abortStackOverflow : function(){},
            //             _malloc : Heap.malloc.bind( Heap ),
            //             _printf : console.log
            //         },
            //         global: {
            //             NaN :0,
            //             Infinity : 0
            //         }
            //     }

            //     const wasmModule = new WebAssembly.Instance( module, imports );
            //     Heap.__init( imports.env.memory );
            //     __Native = wasmModule.exports;
            // })
            // .then( callback );

            var imports = {
                env: {
                    memoryBase: 0,
                    tableBase: 0,
                    memory: new WebAssembly.Memory({
                        initial: 256
                    }),
                    table: new WebAssembly.Table({
                        initial: 0,
                        element: 'anyfunc'
                    }),
                    DYNAMICTOP_PTR: 0,
                    tempDoublePtr: 0,
                    STACKTOP: 0,
                    STACK_MAX: 0,
                    ABORT: 0,
                    abortStackOverflow: function abortStackOverflow() {},
                    _malloc: heap.malloc.bind(heap),
                    _printf: console.log
                },
                global: {
                    NaN: 0,
                    Infinity: 0
                }
            };

            fetch(path).then(function (response) {
                return response.arrayBuffer();
            }).then(function (bytes) {
                return WebAssembly.instantiate(bytes, imports);
            }).then(function (results) {
                var wasmModule = results.instance;
                heap.__init(imports.env.memory);
                exports.__Native = wasmModule.exports;
            }).then(callback);
        }
    }]);
    return Bootstrapper;
}();

var bootstrapper = new Bootstrapper();

var Vec2 = function () {
    function Vec2(x, y) {
        classCallCheck(this, Vec2);

        this.x = x;
        this.y = y;

        // this.byteSize = 8;
    }

    createClass(Vec2, [{
        key: 'add',
        value: function add(v) {
            // load vectors into memory
            mathgasm.Heap.HEAPF32[0] = this.x;
            mathgasm.Heap.HEAPF32[1] = this.y;
            mathgasm.Heap.HEAPF32[2] = v.x;
            mathgasm.Heap.HEAPF32[3] = v.y;

            // execute
            mathgasm.__Native._mathgasm_float2_add(0, 8, 16);

            // copy result
            return new Vec2(mathgasm.Heap.HEAPF32[4], mathgasm.Heap.HEAPF32[5]);
        }
    }, {
        key: 'sub',
        value: function sub(v) {
            // load vectors into memory
            mathgasm.Heap.HEAPF32[0] = this.x;
            mathgasm.Heap.HEAPF32[1] = this.y;
            mathgasm.Heap.HEAPF32[2] = -v.x;
            mathgasm.Heap.HEAPF32[3] = -v.y;

            // execute
            mathgasm.__Native._mathgasm_float2_add(0, 8, 16);

            // copy result
            return new Vec2(mathgasm.Heap.HEAPF32[4], mathgasm.Heap.HEAPF32[5]);
        }
    }, {
        key: 'mul',
        value: function mul() {
            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

            // load vectors into memory
            mathgasm.Heap.HEAPF32[0] = this.x;
            mathgasm.Heap.HEAPF32[1] = this.y;
            mathgasm.Heap.HEAPF32[2] = x;
            mathgasm.Heap.HEAPF32[3] = y;

            // execute
            mathgasm.__Native._mathgasm_float2_mul(0, 8, 16);

            // copy result
            return new Vec2(mathgasm.Heap.HEAPF32[4], mathgasm.Heap.HEAPF32[5]);
        }
    }, {
        key: 'mad',
        value: function mad(v, u) {
            // load vectors into memory
            mathgasm.Heap.HEAPF32[0] = this.x;
            mathgasm.Heap.HEAPF32[1] = this.y;
            mathgasm.Heap.HEAPF32[2] = v.x;
            mathgasm.Heap.HEAPF32[3] = v.y;
            mathgasm.Heap.HEAPF32[4] = u.x;
            mathgasm.Heap.HEAPF32[5] = u.y;

            // execute
            mathgasm.__Native._mathgasm_float2_mad(0, 8, 16, 24);

            // copy result
            return new Vec2(mathgasm.Heap.HEAPF32[6], mathgasm.Heap.HEAPF32[7]);
        }
    }, {
        key: 'length',
        value: function length() {
            // load vectors into memory
            mathgasm.Heap.HEAPF32[0] = this.x;
            mathgasm.Heap.HEAPF32[1] = this.y;

            // execute
            mathgasm.__Native._mathgasm_float2_length(0, 8);

            // copy result
            return mathgasm.Heap.HEAPF32[2];
        }
    }, {
        key: 'dot',
        value: function dot(v) {
            // load vectors into memory
            mathgasm.Heap.HEAPF32[0] = this.x;
            mathgasm.Heap.HEAPF32[1] = this.y;
            mathgasm.Heap.HEAPF32[2] = v.x;
            mathgasm.Heap.HEAPF32[3] = v.y;

            // execute
            mathgasm.__Native._mathgasm_float2_dot(0, 8, 16);

            // copy result
            return mathgasm.Heap.HEAPF32[4];
        }
    }, {
        key: 'normalized',
        value: function normalized() {
            // load vectors into memory
            mathgasm.Heap.HEAPF32[0] = this.x;
            mathgasm.Heap.HEAPF32[1] = this.y;

            // execute
            mathgasm.__Native._mathgasm_float2_normalize(0, 8);

            // copy result
            return new Vec2(mathgasm.Heap.HEAPF32[2], mathgasm.Heap.HEAPF32[3]);
        }
    }, {
        key: 'lerped',
        value: function lerped(v, dt) {
            // load vectors into memory
            mathgasm.Heap.HEAPF32[0] = this.x;
            mathgasm.Heap.HEAPF32[1] = this.y;
            mathgasm.Heap.HEAPF32[2] = v.x;
            mathgasm.Heap.HEAPF32[3] = v.y;
            mathgasm.Heap.HEAPF32[4] = dt;

            // execute
            mathgasm.__Native._mathgasm_float2_lerp(0, 8, 16, 20);

            // copy result
            return new Vec2(mathgasm.Heap.HEAPF32[5], mathgasm.Heap.HEAPF32[6]);
        }
    }]);
    return Vec2;
}();

// Utils

exports.Vec2 = Vec2;
exports.Bootstrapper = bootstrapper;
exports.Heap = heap;

Object.defineProperty(exports, '__esModule', { value: true });

})));
