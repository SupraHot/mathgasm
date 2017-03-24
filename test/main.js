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

    var v = new mathgasm.Vec2( 1, 2 );
    var u = new mathgasm.Vec2( 3, 4 );
    var w = new mathgasm.Vec2( 10, 20 );
    var norm = new mathgasm.Vec2( 1, 0 );
    
    console.log( "v", v );
    console.log( "u", u );
    console.log( "w", w );
    console.log( "add", v.add(u) );
    console.log( "sub", v.sub(u) );
    console.log( "mul 10", v.mul( 10 ) );
    console.log( "mul 10, 20", v.mul( 10, 20 ) );
    console.log( "mad", v.mad( u, w ) );
    console.log( "length", v.length() );
    console.log( "normalized", v.normalized() );
    console.log( "normalized.length", v.normalized().length() );
    console.log( "dot", v.normalized().dot(v) );
    console.log( "dot", v.normalized().dot(u) );
    console.log( "lerped", v.lerped( u, 0.5 ) );
    console.log( "length norm", norm.length() );
};

gogogo = function() {   
    var byteOffset = 0; // must be multiple of 4!
    var elements = 2;
    var bytesToWrite = 4 * elements;
    //var dataHeap = new Float32Array(mathgasm.Heap.HEAPU8.buffer, byteOffset, bytesToWrite);

    mathgasm.__Native._ejaculate( 1, byteOffset ); // byte offset into the wasm memory
    
    // var data = new Float32Array( dataHeap.buffer, dataHeap.byteOffset, elements );
    //console.log( "data", data );
    
    console.log( "heap[0]", mathgasm.Heap.HEAPF32[ byteOffset / 4 + 0 ] );
    console.log( "heap[1]", mathgasm.Heap.HEAPF32[ byteOffset / 4 + 1 ] );
};