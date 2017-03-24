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
    var byteOffset = 0;
    var elements = 2;
    var bytesToWrite = 4 * elements;
    var dataHeap = new Float32Array(mathgasm.Heap.HEAPU8.buffer, byteOffset, bytesToWrite);

    mathgasm.__Native._ejaculate( 1, byteOffset ); // byte offset into the wasm memory
    
    // var data = new Float32Array( dataHeap.buffer, dataHeap.byteOffset, elements );
    //console.log( "data", data );

    console.log( "heap[0]", dataHeap[0] );
    console.log( "heap[0]", dataHeap[1] );
};