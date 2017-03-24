// COMPILE TIME DEFINITIONS (Generated via gulp) 
var __DATE__ = "Fri Mar 24 2017 13:44:02 GMT+0100 (CET)"; 
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
            fetch(path).then(function (response) {
                return response.arrayBuffer();
            }).then(function (buffer) {
                return WebAssembly.compile(buffer);
            }).then(function (module) {
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
                        })
                    }
                };

                var wasmModule = new WebAssembly.Instance(module, imports);
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
    }

    createClass(Vec2, [{
        key: "add",
        value: function add(v) {
            // load values into memory
            console.log("heap pointer", exports.__Native.getHeapPtr());
            console.log("this", this);
            console.log("v", v);
            var ptrV0 = exports.__Native.new_mathgasm_float2(this.x, this.y);
            var ptrV1 = exports.__Native.new_mathgasm_float2(v.x, v.y);
            var ptrV2 = exports.__Native.mathgasm_float2_add(ptrV0, ptrV1);
            exports.__Native.free(ptrV0);
            exports.__Native.free(ptrV1);

            var heap = exports.__Native.memory.buffer;
            var dataHeap = new Uint8Array(heap, ptrV2, 2 * 4);
            var data = new Float32Array(dataHeap.buffer, dataHeap.byteOffset, 2);
            var result = new Vec2(data[0], data[1]);
            exports.__Native.free(ptrV2);
            // __Native.getHeapPtr()
            return result;
        }
    }]);
    return Vec2;
}();

// Utils

exports.Vec2 = Vec2;
exports.Bootstrapper = bootstrapper;

Object.defineProperty(exports, '__esModule', { value: true });

})));
