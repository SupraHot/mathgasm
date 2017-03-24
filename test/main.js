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
var __runTests = function( mod ) {
    console.log("Heap ptr", mod.getHeapPtr());

    var Vptr = mod.new_mathmgasm_vec3(4, 5, 6);
    console.log("Heap ptr", mod.getHeapPtr());

    var heap = mod.memory.buffer;
    var dataHeap = new Uint8Array(heap, Vptr, 3 * 4);
    var data = new Float32Array(dataHeap.buffer, dataHeap.byteOffset, 3);

    console.log("Heap ptr", mod.getHeapPtr());

    console.log("data", data);
    mod.destroy_mathmgasm_vec3( Vptr );
    //mathgasm.free( Vptr );
    console.log("data", data);

    console.log("Heap ptr", mod.getHeapPtr());
};