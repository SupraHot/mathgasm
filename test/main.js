// (function(){
//     console.log("main.js");
//     loadModule("../build/mathgasm.wasm").then(instance => {    
//         wasmModule = instance;
//         console.log( "wasmModule", wasmModule );
//         for( var i = 0; i < 5; i++ ) {
//             __runTests( wasmModule.exports );
//         }
//     });
// })();


(function(){
    console.log( "executing.js" );

    mathgasm.Bootstrapper.initialize( "../module/mathgasm.wasm", function() {
        console.log( "Loaded the module, bro" );
        __runTests( mathgasm.__Native );
    });

})();

// Tests
var __runTests = function( module ) {
    
    console.log( "module", module );

};

gogogo = function() {
    var ptr = mathgasm.__Native._ejaculate(1,2) - 1;
    console.log( "ptr", ptr );
    var heap = mathgasm.Heap.wasmMemoryBuffer;
    var dataHeap = new Uint8Array( heap, ptr, 2 * 8 );
    var data = new Int32Array( dataHeap.buffer, dataHeap.byteOffset, 2 );
    console.log("data", data);
};