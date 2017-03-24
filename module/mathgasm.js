// COMPILE TIME DEFINITIONS (Generated via gulp) 
var __DATE__ = "Fri Mar 24 2017 12:55:42 GMT+0100 (CET)"; 
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
        console.log("__Native", exports.__Native);
    }

    createClass(Vec2, [{
        key: "add",
        value: function add(v) {

            // Wrap mathgasm

        }
    }]);
    return Vec2;
}();

// Utils

exports.Vec2 = Vec2;
exports.Bootstrapper = bootstrapper;

Object.defineProperty(exports, '__esModule', { value: true });

})));
