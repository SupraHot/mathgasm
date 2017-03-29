// COMPILE TIME DEFINITIONS (Generated via gulp) 
var __DATE__ = "Wed Mar 29 2017 13:02:57 GMT+0200 (CEST)"; 
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

/**
 * WASM memory heap
 */
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
            // this.HEAP8   = new Int8Array( buffer );
            // this.HEAP16  = new Int16Array( buffer );
            // this.HEAP32  = new Int32Array( buffer );
            // this.HEAPU8  = new Uint8Array( buffer );
            // this.HEAPU16 = new Uint16Array( buffer );
            // this.HEAPU32 = new Uint32Array( buffer );
            this.HEAPF32 = new Float32Array(buffer);
            // this.HEAPF64 = new Float64Array( buffer );
            this.__initMalloc();
        }
    }, {
        key: "__initMalloc",
        value: function __initMalloc() {
            // this.HEAPU32[(20) >> 2] = 0;
            // this.HEAPU32[(24) >> 2] = 0;
            // this.HEAPU32[(28) >> 2] = 0;
            // this.HEAP32[(8) >> 2] = (40|0);
            // this.HEAP32[(12) >> 2] = (40|0);
        }
    }, {
        key: "malloc",
        value: function malloc(nbytes) {
            return 0;
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
                    _printf: console.log,
                    _sinf: Math.sin,
                    _atan2f: Math.atan2,
                    _acosf: Math.acos
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
            heap.HEAPF32[0] = this.x;
            heap.HEAPF32[1] = this.y;
            heap.HEAPF32[2] = v.x;
            heap.HEAPF32[3] = v.y;

            // execute
            exports.__Native._mathgasm_float2_add(0, 8, 16);

            // copy result
            return new Vec2(heap.HEAPF32[4], heap.HEAPF32[5]);
        }
    }, {
        key: 'sub',
        value: function sub(v) {
            // load vectors into memory
            heap.HEAPF32[0] = this.x;
            heap.HEAPF32[1] = this.y;
            heap.HEAPF32[2] = -v.x;
            heap.HEAPF32[3] = -v.y;

            // execute
            exports.__Native._mathgasm_float2_add(0, 8, 16);

            // copy result
            return new Vec2(heap.HEAPF32[4], heap.HEAPF32[5]);
        }
    }, {
        key: 'mul',
        value: function mul() {
            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

            // load vectors into memory
            heap.HEAPF32[0] = this.x;
            heap.HEAPF32[1] = this.y;
            heap.HEAPF32[2] = x;
            heap.HEAPF32[3] = y;

            // execute
            exports.__Native._mathgasm_float2_mul(0, 8, 16);

            // copy result
            return new Vec2(heap.HEAPF32[4], heap.HEAPF32[5]);
        }
    }, {
        key: 'mad',
        value: function mad(v, u) {
            // load vectors into memory
            heap.HEAPF32[0] = this.x;
            heap.HEAPF32[1] = this.y;
            heap.HEAPF32[2] = v.x;
            heap.HEAPF32[3] = v.y;
            heap.HEAPF32[4] = u.x;
            heap.HEAPF32[5] = u.y;

            // execute
            exports.__Native._mathgasm_float2_mad(0, 8, 16, 24);

            // copy result
            return new Vec2(heap.HEAPF32[6], heap.HEAPF32[7]);
        }
    }, {
        key: 'length',
        value: function length() {
            // load vectors into memory
            heap.HEAPF32[0] = this.x;
            heap.HEAPF32[1] = this.y;

            // execute
            exports.__Native._mathgasm_float2_length(0, 8);

            // copy result
            return heap.HEAPF32[2];
        }
    }, {
        key: 'dot',
        value: function dot(v) {
            // load vectors into memory
            heap.HEAPF32[0] = this.x;
            heap.HEAPF32[1] = this.y;
            heap.HEAPF32[2] = v.x;
            heap.HEAPF32[3] = v.y;

            // execute
            exports.__Native._mathgasm_float2_dot(0, 8, 16);

            // copy result
            return heap.HEAPF32[4];
        }
    }, {
        key: 'normalized',
        value: function normalized() {
            // load vectors into memory
            heap.HEAPF32[0] = this.x;
            heap.HEAPF32[1] = this.y;

            // execute
            exports.__Native._mathgasm_float2_normalize(0, 8);

            // copy result
            return new Vec2(heap.HEAPF32[2], heap.HEAPF32[3]);
        }
    }, {
        key: 'lerped',
        value: function lerped(v, dt) {
            // load vectors into memory
            heap.HEAPF32[0] = this.x;
            heap.HEAPF32[1] = this.y;
            heap.HEAPF32[2] = v.x;
            heap.HEAPF32[3] = v.y;
            heap.HEAPF32[4] = dt;

            // execute
            exports.__Native._mathgasm_float2_lerp(0, 8, 16, 20);

            // copy result
            return new Vec2(heap.HEAPF32[5], heap.HEAPF32[6]);
        }
    }]);
    return Vec2;
}();

var Vec3 = function () {
    function Vec3(x, y, z) {
        classCallCheck(this, Vec3);

        this.x = x;
        this.y = y;
        this.z = z;

        // this.byteSize = 12;
    }

    createClass(Vec3, [{
        key: 'add',
        value: function add(v) {
            // load vectors into memory
            heap.HEAPF32[0] = this.x;
            heap.HEAPF32[1] = this.y;
            heap.HEAPF32[2] = this.z;

            heap.HEAPF32[3] = v.x;
            heap.HEAPF32[4] = v.y;
            heap.HEAPF32[5] = v.z;

            // execute
            exports.__Native._mathgasm_float3_add(0, 12, 24);

            // copy result
            return new Vec3(heap.HEAPF32[6], heap.HEAPF32[7], heap.HEAPF32[8]);
        }
    }, {
        key: 'sub',
        value: function sub(v) {
            // load vectors into memory
            heap.HEAPF32[0] = this.x;
            heap.HEAPF32[1] = this.y;
            heap.HEAPF32[2] = this.z;

            heap.HEAPF32[3] = -v.x;
            heap.HEAPF32[4] = -v.y;
            heap.HEAPF32[5] = -v.z;

            // execute
            exports.__Native._mathgasm_float3_add(0, 12, 24);

            // copy result
            return new Vec3(heap.HEAPF32[6], heap.HEAPF32[7], heap.HEAPF32[8]);
        }
    }, {
        key: 'mul',
        value: function mul() {
            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
            var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : x;

            // load vectors into memory
            heap.HEAPF32[0] = this.x;
            heap.HEAPF32[1] = this.y;
            heap.HEAPF32[2] = this.z;

            heap.HEAPF32[3] = x;
            heap.HEAPF32[4] = y;
            heap.HEAPF32[5] = z;

            // execute
            exports.__Native._mathgasm_float3_mul(0, 12, 24);

            // copy result
            return new Vec3(heap.HEAPF32[6], heap.HEAPF32[7], heap.HEAPF32[8]);
        }
    }, {
        key: 'mad',
        value: function mad(v, u) {
            // load vectors into memory
            heap.HEAPF32[0] = this.x;
            heap.HEAPF32[1] = this.y;
            heap.HEAPF32[2] = this.z;

            heap.HEAPF32[3] = v.x;
            heap.HEAPF32[4] = v.y;
            heap.HEAPF32[5] = v.z;

            heap.HEAPF32[6] = u.x;
            heap.HEAPF32[7] = u.y;
            heap.HEAPF32[8] = u.z;

            // execute
            exports.__Native._mathgasm_float3_mad(0, 12, 24, 36);

            // copy result
            return new Vec3(heap.HEAPF32[9], heap.HEAPF32[10], heap.HEAPF32[11]);
        }
    }, {
        key: 'length',
        value: function length() {
            // load vectors into memory
            heap.HEAPF32[0] = this.x;
            heap.HEAPF32[1] = this.y;
            heap.HEAPF32[2] = this.z;

            // execute
            exports.__Native._mathgasm_float3_length(0, 12);

            // copy result
            return heap.HEAPF32[3];
        }
    }, {
        key: 'dot',
        value: function dot(v) {
            // load vectors into memory
            heap.HEAPF32[0] = this.x;
            heap.HEAPF32[1] = this.y;
            heap.HEAPF32[2] = this.z;
            heap.HEAPF32[3] = v.x;
            heap.HEAPF32[4] = v.y;
            heap.HEAPF32[5] = v.z;

            // execute
            exports.__Native._mathgasm_float3_dot(0, 12, 24);

            // copy result
            return heap.HEAPF32[6];
        }
    }, {
        key: 'normalized',
        value: function normalized() {
            // load vectors into memory
            heap.HEAPF32[0] = this.x;
            heap.HEAPF32[1] = this.y;
            heap.HEAPF32[2] = this.z;

            // execute
            exports.__Native._mathgasm_float3_normalize(0, 12);

            // copy result
            return new Vec3(heap.HEAPF32[3], heap.HEAPF32[4], heap.HEAPF32[5]);
        }
    }, {
        key: 'cross',
        value: function cross(v) {
            // load vectors into memory
            heap.HEAPF32[0] = this.x;
            heap.HEAPF32[1] = this.y;
            heap.HEAPF32[2] = this.z;

            heap.HEAPF32[3] = v.x;
            heap.HEAPF32[4] = v.y;
            heap.HEAPF32[5] = v.z;

            // execute
            exports.__Native._mathgasm_float3_cross(0, 12, 24);

            // copy result
            return new Vec3(heap.HEAPF32[6], heap.HEAPF32[7], heap.HEAPF32[8]);
        }
    }, {
        key: 'reflect',
        value: function reflect(n) {
            // load vectors into memory
            heap.HEAPF32[0] = this.x;
            heap.HEAPF32[1] = this.y;
            heap.HEAPF32[2] = this.z;

            heap.HEAPF32[3] = n.x;
            heap.HEAPF32[4] = n.y;
            heap.HEAPF32[5] = n.z;

            // execute
            exports.__Native._mathgasm_float3_reflect(0, 12, 24);

            // copy result
            return new Vec3(heap.HEAPF32[6], heap.HEAPF32[7], heap.HEAPF32[8]);
        }
    }, {
        key: 'lerped',
        value: function lerped(v, dt) {
            // load vectors into memory
            heap.HEAPF32[0] = this.x;
            heap.HEAPF32[1] = this.y;
            heap.HEAPF32[2] = this.z;

            heap.HEAPF32[3] = v.x;
            heap.HEAPF32[4] = v.y;
            heap.HEAPF32[5] = v.z;

            heap.HEAPF32[6] = dt;

            // execute
            exports.__Native._mathgasm_float3_lerp(0, 12, 24, 28);

            // copy result
            return new Vec3(heap.HEAPF32[7], heap.HEAPF32[8], heap.HEAPF32[9]);
        }
    }]);
    return Vec3;
}();

var Vec4 = function () {
    function Vec4(x, y, z, w) {
        classCallCheck(this, Vec4);

        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;

        // this.byteSize = 16;
    }

    createClass(Vec4, [{
        key: 'add',
        value: function add(v) {
            // load vectors into memory
            heap.HEAPF32[0] = this.x;
            heap.HEAPF32[1] = this.y;
            heap.HEAPF32[2] = this.z;
            heap.HEAPF32[3] = this.w;

            heap.HEAPF32[4] = v.x;
            heap.HEAPF32[5] = v.y;
            heap.HEAPF32[6] = v.z;
            heap.HEAPF32[7] = v.w;

            // execute
            exports.__Native._mathgasm_float4_add(0, 16, 32);

            // copy result
            return new Vec4(heap.HEAPF32[8], heap.HEAPF32[9], heap.HEAPF32[10], heap.HEAPF32[11]);
        }
    }, {
        key: 'sub',
        value: function sub(v) {
            // load vectors into memory
            heap.HEAPF32[0] = this.x;
            heap.HEAPF32[1] = this.y;
            heap.HEAPF32[2] = this.z;
            heap.HEAPF32[3] = this.w;

            heap.HEAPF32[4] = -v.x;
            heap.HEAPF32[5] = -v.y;
            heap.HEAPF32[6] = -v.z;
            heap.HEAPF32[7] = -v.w;

            // execute
            exports.__Native._mathgasm_float4_add(0, 16, 32);

            // copy result
            return new Vec4(heap.HEAPF32[8], heap.HEAPF32[9], heap.HEAPF32[10], heap.HEAPF32[11]);
        }
    }, {
        key: 'mul',
        value: function mul() {
            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
            var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : x;
            var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : x;

            // load vectors into memory
            heap.HEAPF32[0] = this.x;
            heap.HEAPF32[1] = this.y;
            heap.HEAPF32[2] = this.z;
            heap.HEAPF32[3] = this.w;

            heap.HEAPF32[4] = x;
            heap.HEAPF32[5] = y;
            heap.HEAPF32[6] = z;
            heap.HEAPF32[7] = w;

            // execute
            exports.__Native._mathgasm_float4_mul(0, 16, 32);

            // copy result
            return new Vec4(heap.HEAPF32[8], heap.HEAPF32[9], heap.HEAPF32[10], heap.HEAPF32[11]);
        }
    }, {
        key: 'length',
        value: function length() {
            // load vectors into memory
            heap.HEAPF32[0] = this.x;
            heap.HEAPF32[1] = this.y;
            heap.HEAPF32[2] = this.z;
            heap.HEAPF32[3] = this.w;

            // execute
            exports.__Native._mathgasm_float4_length(0, 16);

            // copy result
            return heap.HEAPF32[4];
        }
    }, {
        key: 'dot',
        value: function dot(v) {
            // load vectors into memory
            heap.HEAPF32[0] = this.x;
            heap.HEAPF32[1] = this.y;
            heap.HEAPF32[2] = this.z;
            heap.HEAPF32[3] = this.w;

            heap.HEAPF32[4] = v.x;
            heap.HEAPF32[5] = v.y;
            heap.HEAPF32[6] = v.z;
            heap.HEAPF32[7] = v.w;

            // execute
            exports.__Native._mathgasm_float4_dot(0, 16, 32);

            // copy result
            return heap.HEAPF32[8];
        }
    }, {
        key: 'normalized',
        value: function normalized() {
            // load vectors into memory
            heap.HEAPF32[0] = this.x;
            heap.HEAPF32[1] = this.y;
            heap.HEAPF32[2] = this.z;
            heap.HEAPF32[3] = this.w;

            // execute
            exports.__Native._mathgasm_float4_normalize(0, 16);

            // copy result
            return new Vec4(heap.HEAPF32[4], heap.HEAPF32[5], heap.HEAPF32[6], heap.HEAPF32[7]);
        }
    }, {
        key: 'lerped',
        value: function lerped(v, dt) {
            // load vectors into memory
            heap.HEAPF32[0] = this.x;
            heap.HEAPF32[1] = this.y;
            heap.HEAPF32[2] = this.z;
            heap.HEAPF32[3] = this.w;

            heap.HEAPF32[4] = v.x;
            heap.HEAPF32[5] = v.y;
            heap.HEAPF32[6] = v.z;
            heap.HEAPF32[7] = v.w;

            heap.HEAPF32[8] = dt;

            // execute
            exports.__Native._mathgasm_float4_lerp(0, 16, 32, 36);

            // copy result
            return new Vec4(heap.HEAPF32[9], heap.HEAPF32[10], heap.HEAPF32[11], heap.HEAPF32[12]);
        }
    }]);
    return Vec4;
}();

var Quat4 = function () {
    function Quat4() {
        var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Vec3();
        var angle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;
        classCallCheck(this, Quat4);

        this.axis = new Vec3();
        this.w = angle;

        var a = angle * (Math.PI / 180.0);

        var sinHalfAngle = Math.sin(a / 2.0);
        var cosHalfAngle = Math.cos(a / 2.0);

        this.axis.x = axis.x * sinHalfAngle;
        this.axis.y = axis.y * sinHalfAngle;
        this.axis.z = axis.z * sinHalfAngle;
        this.w = cosHalfAngle;
    }

    createClass(Quat4, [{
        key: 'mulQuat',
        value: function mulQuat(q) {
            // load data into memory
            heap.HEAPF32[0] = this.axis.x;
            heap.HEAPF32[1] = this.axis.y;
            heap.HEAPF32[2] = this.axis.z;
            heap.HEAPF32[3] = this.w;

            heap.HEAPF32[4] = q.axis.x;
            heap.HEAPF32[5] = q.axis.y;
            heap.HEAPF32[6] = q.axis.z;
            heap.HEAPF32[7] = q.w;

            // execute
            exports.__Native._mathgasm_quaternion_mul_quat(0, 16, 32);

            var result = new Quat4();
            result.w = heap.HEAPF32[11];
            result.axis.x = heap.HEAPF32[8];
            result.axis.y = heap.HEAPF32[9];
            result.axis.z = heap.HEAPF32[10];
            return result;
        }
    }, {
        key: 'mulVec',
        value: function mulVec(v) {
            // load data into memory
            heap.HEAPF32[0] = this.axis.x;
            heap.HEAPF32[1] = this.axis.y;
            heap.HEAPF32[2] = this.axis.z;
            heap.HEAPF32[3] = this.w;

            heap.HEAPF32[4] = v.x;
            heap.HEAPF32[5] = v.y;
            heap.HEAPF32[6] = v.z;

            // execute
            exports.__Native._mathgasm_quaternion_mul_vec(0, 16, 28);

            return new Vec3(heap.HEAPF32[7], heap.HEAPF32[8], heap.HEAPF32[9]);
        }
    }, {
        key: 'slerp',
        value: function slerp(q, dt) {
            // load data into memory
            heap.HEAPF32[0] = this.axis.x;
            heap.HEAPF32[1] = this.axis.y;
            heap.HEAPF32[2] = this.axis.z;
            heap.HEAPF32[3] = this.w;

            heap.HEAPF32[4] = q.axis.x;
            heap.HEAPF32[5] = q.axis.y;
            heap.HEAPF32[6] = q.axis.z;
            heap.HEAPF32[7] = q.w;

            heap.HEAPF32[8] = dt;

            // execute
            exports.__Native._mathgasm_quaternion_slerp(0, 16, 32, 36);

            var result = new Quat4();
            result.axis.x = heap.HEAPF32[9];
            result.axis.y = heap.HEAPF32[10];
            result.axis.z = heap.HEAPF32[11];
            result.w = heap.HEAPF32[12];
            return result;
        }
    }, {
        key: 'normalized',
        value: function normalized() {
            // load data into memory
            heap.HEAPF32[0] = this.axis.x;
            heap.HEAPF32[1] = this.axis.y;
            heap.HEAPF32[2] = this.axis.z;
            heap.HEAPF32[3] = this.w;

            // execute
            exports.__Native._mathgasm_quaternion_normalize(0, 16);

            var result = new Quat4();
            result.axis.x = heap.HEAPF32[4];
            result.axis.y = heap.HEAPF32[5];
            result.axis.z = heap.HEAPF32[6];
            result.w = heap.HEAPF32[7];
            return result;
        }
    }, {
        key: 'toAxisAngle',
        value: function toAxisAngle() {
            // load data into memory
            heap.HEAPF32[0] = this.axis.x;
            heap.HEAPF32[1] = this.axis.y;
            heap.HEAPF32[2] = this.axis.z;
            heap.HEAPF32[3] = this.w;

            // execute
            exports.__Native._mathgasm_quaternion_to_axis_angle(0, 16);

            return {
                axis: new Vec3(heap.HEAPF32[4], heap.HEAPF32[5], heap.HEAPF32[6]),
                angle: heap.HEAPF32[7]
            };
        }
    }, {
        key: 'fromRotationMatrix',
        value: function fromRotationMatrix(m) {
            // load data into memory
            heap.HEAPF32[0] = m.m00;
            heap.HEAPF32[1] = m.m01;
            heap.HEAPF32[2] = m.m02;
            heap.HEAPF32[3] = m.m03;
            heap.HEAPF32[4] = m.m10;
            heap.HEAPF32[5] = m.m11;
            heap.HEAPF32[6] = m.m12;
            heap.HEAPF32[7] = m.m13;
            heap.HEAPF32[8] = m.m20;
            heap.HEAPF32[9] = m.m21;
            heap.HEAPF32[10] = m.m22;
            heap.HEAPF32[11] = m.m23;
            heap.HEAPF32[12] = m.m30;
            heap.HEAPF32[13] = m.m31;
            heap.HEAPF32[14] = m.m32;
            heap.HEAPF32[15] = m.m33;

            // execute
            exports.__Native._mathgasm_quaternion_set_from_matrix(0, 64);

            var result = new Quat4();
            result.axis.x = heap.HEAPF32[16];
            result.axis.y = heap.HEAPF32[17];
            result.axis.z = heap.HEAPF32[18];
            result.w = heap.HEAPF32[19];
            return result;
        }
    }]);
    return Quat4;
}();

var Mat4 = function () {
    // byte size = 
    function Mat4() {
        var m00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.0;
        var m01 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.0;
        var m02 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.0;
        var m03 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.0;
        var m10 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0.0;
        var m11 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1.0;
        var m12 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0.0;
        var m13 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0.0;
        var m20 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0.0;
        var m21 = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0.0;
        var m22 = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 1.0;
        var m23 = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : 0.0;
        var m30 = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : 0.0;
        var m31 = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : 0.0;
        var m32 = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : 0.0;
        var m33 = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : 1.0;
        classCallCheck(this, Mat4);

        this.m00 = m00;this.m10 = m10;this.m20 = m20;this.m30 = m30;
        this.m01 = m01;this.m11 = m11;this.m21 = m21;this.m31 = m31;
        this.m02 = m02;this.m12 = m12;this.m22 = m22;this.m32 = m32;
        this.m03 = m03;this.m13 = m13;this.m23 = m23;this.m33 = m33;
    }

    createClass(Mat4, [{
        key: 'mulMat',
        value: function mulMat(m) {
            // load matrices into memory
            heap.HEAPF32[0] = this.m00;
            heap.HEAPF32[1] = this.m01;
            heap.HEAPF32[2] = this.m02;
            heap.HEAPF32[3] = this.m03;
            heap.HEAPF32[4] = this.m10;
            heap.HEAPF32[5] = this.m11;
            heap.HEAPF32[6] = this.m12;
            heap.HEAPF32[7] = this.m13;
            heap.HEAPF32[8] = this.m20;
            heap.HEAPF32[9] = this.m21;
            heap.HEAPF32[10] = this.m22;
            heap.HEAPF32[11] = this.m23;
            heap.HEAPF32[12] = this.m30;
            heap.HEAPF32[13] = this.m31;
            heap.HEAPF32[14] = this.m32;
            heap.HEAPF32[15] = this.m33;

            heap.HEAPF32[16] = m.m00;
            heap.HEAPF32[17] = m.m01;
            heap.HEAPF32[18] = m.m02;
            heap.HEAPF32[19] = m.m03;
            heap.HEAPF32[20] = m.m10;
            heap.HEAPF32[21] = m.m11;
            heap.HEAPF32[22] = m.m12;
            heap.HEAPF32[23] = m.m13;
            heap.HEAPF32[24] = m.m20;
            heap.HEAPF32[25] = m.m21;
            heap.HEAPF32[26] = m.m22;
            heap.HEAPF32[27] = m.m23;
            heap.HEAPF32[28] = m.m30;
            heap.HEAPF32[29] = m.m31;
            heap.HEAPF32[30] = m.m32;
            heap.HEAPF32[31] = m.m33;

            // execute
            exports.__Native._mathgasm_float4x4_mul(0, 64, 128);

            return new Mat4(heap.HEAPF32[32], heap.HEAPF32[33], heap.HEAPF32[34], heap.HEAPF32[35], heap.HEAPF32[36], heap.HEAPF32[37], heap.HEAPF32[38], heap.HEAPF32[39], heap.HEAPF32[40], heap.HEAPF32[41], heap.HEAPF32[42], heap.HEAPF32[43], heap.HEAPF32[44], heap.HEAPF32[45], heap.HEAPF32[46], heap.HEAPF32[47]);
        }
    }, {
        key: 'mulVec',
        value: function mulVec(v) {
            // load data into memory
            heap.HEAPF32[0] = this.m00;
            heap.HEAPF32[1] = this.m01;
            heap.HEAPF32[2] = this.m02;
            heap.HEAPF32[3] = this.m03;
            heap.HEAPF32[4] = this.m10;
            heap.HEAPF32[5] = this.m11;
            heap.HEAPF32[6] = this.m12;
            heap.HEAPF32[7] = this.m13;
            heap.HEAPF32[8] = this.m20;
            heap.HEAPF32[9] = this.m21;
            heap.HEAPF32[10] = this.m22;
            heap.HEAPF32[11] = this.m23;
            heap.HEAPF32[12] = this.m30;
            heap.HEAPF32[13] = this.m31;
            heap.HEAPF32[14] = this.m32;
            heap.HEAPF32[15] = this.m33;

            heap.HEAPF32[16] = v.x;
            heap.HEAPF32[17] = v.y;
            heap.HEAPF32[18] = v.z;

            // execute
            exports.__Native._mathgasm_float4x4_mul_vec(0, 64, 76);

            return new Vec3(heap.HEAPF32[19], heap.HEAPF32[20], heap.HEAPF32[21]);
        }
    }, {
        key: 'mulScalar',
        value: function mulScalar(s) {
            // load data into memory
            heap.HEAPF32[0] = this.m00;
            heap.HEAPF32[1] = this.m01;
            heap.HEAPF32[2] = this.m02;
            heap.HEAPF32[3] = this.m03;
            heap.HEAPF32[4] = this.m10;
            heap.HEAPF32[5] = this.m11;
            heap.HEAPF32[6] = this.m12;
            heap.HEAPF32[7] = this.m13;
            heap.HEAPF32[8] = this.m20;
            heap.HEAPF32[9] = this.m21;
            heap.HEAPF32[10] = this.m22;
            heap.HEAPF32[11] = this.m23;
            heap.HEAPF32[12] = this.m30;
            heap.HEAPF32[13] = this.m31;
            heap.HEAPF32[14] = this.m32;
            heap.HEAPF32[15] = this.m33;

            heap.HEAPF32[16] = s;

            // execute
            exports.__Native._mathgasm_float4x4_mul_scalar(0, 64, 68);

            return new Mat4(heap.HEAPF32[17], heap.HEAPF32[18], heap.HEAPF32[19], heap.HEAPF32[20], heap.HEAPF32[21], heap.HEAPF32[22], heap.HEAPF32[23], heap.HEAPF32[24], heap.HEAPF32[25], heap.HEAPF32[26], heap.HEAPF32[27], heap.HEAPF32[28], heap.HEAPF32[29], heap.HEAPF32[30], heap.HEAPF32[31], heap.HEAPF32[32]);
        }
    }, {
        key: 'invertedTR',
        value: function invertedTR() {
            // load data into memory
            heap.HEAPF32[0] = this.m00;
            heap.HEAPF32[1] = this.m01;
            heap.HEAPF32[2] = this.m02;
            heap.HEAPF32[3] = this.m03;
            heap.HEAPF32[4] = this.m10;
            heap.HEAPF32[5] = this.m11;
            heap.HEAPF32[6] = this.m12;
            heap.HEAPF32[7] = this.m13;
            heap.HEAPF32[8] = this.m20;
            heap.HEAPF32[9] = this.m21;
            heap.HEAPF32[10] = this.m22;
            heap.HEAPF32[11] = this.m23;
            heap.HEAPF32[12] = this.m30;
            heap.HEAPF32[13] = this.m31;
            heap.HEAPF32[14] = this.m32;
            heap.HEAPF32[15] = this.m33;

            // execute
            exports.__Native._mathgasm_float4x4_inverse_tr(0, 64);

            return new Mat4(heap.HEAPF32[16], heap.HEAPF32[17], heap.HEAPF32[18], heap.HEAPF32[19], heap.HEAPF32[20], heap.HEAPF32[21], heap.HEAPF32[22], heap.HEAPF32[23], heap.HEAPF32[24], heap.HEAPF32[25], heap.HEAPF32[26], heap.HEAPF32[27], heap.HEAPF32[28], heap.HEAPF32[29], heap.HEAPF32[30], heap.HEAPF32[31]);
        }
    }, {
        key: 'inverted',
        value: function inverted() {
            // load data into memory
            heap.HEAPF32[0] = this.m00;
            heap.HEAPF32[1] = this.m01;
            heap.HEAPF32[2] = this.m02;
            heap.HEAPF32[3] = this.m03;
            heap.HEAPF32[4] = this.m10;
            heap.HEAPF32[5] = this.m11;
            heap.HEAPF32[6] = this.m12;
            heap.HEAPF32[7] = this.m13;
            heap.HEAPF32[8] = this.m20;
            heap.HEAPF32[9] = this.m21;
            heap.HEAPF32[10] = this.m22;
            heap.HEAPF32[11] = this.m23;
            heap.HEAPF32[12] = this.m30;
            heap.HEAPF32[13] = this.m31;
            heap.HEAPF32[14] = this.m32;
            heap.HEAPF32[15] = this.m33;

            // execute
            exports.__Native._mathgasm_float4x4_inverse(0, 64);

            return new Mat4(heap.HEAPF32[16], heap.HEAPF32[17], heap.HEAPF32[18], heap.HEAPF32[19], heap.HEAPF32[20], heap.HEAPF32[21], heap.HEAPF32[22], heap.HEAPF32[23], heap.HEAPF32[24], heap.HEAPF32[25], heap.HEAPF32[26], heap.HEAPF32[27], heap.HEAPF32[28], heap.HEAPF32[29], heap.HEAPF32[30], heap.HEAPF32[31]);
        }
    }, {
        key: 'setFromQuaternion',
        value: function setFromQuaternion(q) {
            // load data into memory
            heap.HEAPF32[0] = q.axis.x;
            heap.HEAPF32[1] = q.axis.y;
            heap.HEAPF32[2] = q.axis.z;
            heap.HEAPF32[3] = q.w;

            // execute
            exports.__Native._mathgasm_float4x4_from_quaternion(0, 16);

            return new Mat4(heap.HEAPF32[13], heap.HEAPF32[14], heap.HEAPF32[15], heap.HEAPF32[16], heap.HEAPF32[17], heap.HEAPF32[18], heap.HEAPF32[19], heap.HEAPF32[20], heap.HEAPF32[21], heap.HEAPF32[22], heap.HEAPF32[23], heap.HEAPF32[24], heap.HEAPF32[25], heap.HEAPF32[26], heap.HEAPF32[27], heap.HEAPF32[28]);
        }
    }, {
        key: 'decompose',
        value: function decompose() {
            // load data into memory
            heap.HEAPF32[0] = this.m00;
            heap.HEAPF32[1] = this.m01;
            heap.HEAPF32[2] = this.m02;
            heap.HEAPF32[3] = this.m03;
            heap.HEAPF32[4] = this.m10;
            heap.HEAPF32[5] = this.m11;
            heap.HEAPF32[6] = this.m12;
            heap.HEAPF32[7] = this.m13;
            heap.HEAPF32[8] = this.m20;
            heap.HEAPF32[9] = this.m21;
            heap.HEAPF32[10] = this.m22;
            heap.HEAPF32[11] = this.m23;
            heap.HEAPF32[12] = this.m30;
            heap.HEAPF32[13] = this.m31;
            heap.HEAPF32[14] = this.m32;
            heap.HEAPF32[15] = this.m33;

            // execute
            exports.__Native._mathgasm_float4x4_decompose(0, 64);

            return {
                scale: new Vec3(heap.HEAPF32[32], heap.HEAPF32[33], heap.HEAPF32[34]),
                translation: new Vec3(heap.HEAPF32[35], heap.HEAPF32[36], heap.HEAPF32[37]),
                rotation: new Quat4(new Vec3(heap.HEAPF32[38], heap.HEAPF32[39], heap.HEAPF32[40]), heap.HEAPF32[41])
            };
        }
    }]);
    return Mat4;
}();

// Utils

exports.Vec2 = Vec2;
exports.Vec3 = Vec3;
exports.Vec4 = Vec4;
exports.Quat4 = Quat4;
exports.Mat4 = Mat4;
exports.Bootstrapper = bootstrapper;
exports.Heap = heap;

Object.defineProperty(exports, '__esModule', { value: true });

})));
