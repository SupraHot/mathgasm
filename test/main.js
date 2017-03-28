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

    // Vec2
    {
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
        console.log( "dot v u ", v.dot( u ) );
        console.log( "dot normalized v v", v.normalized().dot( v.normalized() ) );
        console.log( "lerped", v.lerped( u, 0.5 ) );
        console.log( "length norm", norm.length() );
    }

    // Vec3 
    {
        var v = new mathgasm.Vec3( 1, 2, 3 );
        var u = new mathgasm.Vec3( 4, 5, 6 );
        var w = new mathgasm.Vec3( 10, 20, 30 );
        var n = new mathgasm.Vec3( 0, 1, 0 );

        console.log( "v", v );
        console.log( "u", u );
        console.log( "w", w );
        console.log( "n", n );
        console.log( "add v u", v.add( u ) );
        console.log( "sub v u", v.sub( u ) );
        console.log( "mul 10", v.mul( 10 ) );
        console.log( "mul 10, 20", v.mul( 10, 20 ) );
        console.log( "mul 10, 20, 30", v.mul( 10, 20, 30 ) );
        console.log( "mad v u w", v.mad( u, w ) );
        console.log( "length v", v.length() );
        console.log( "normalized v", v.normalized() );
        console.log( "normalized length v", v.normalized().length() );
        console.log( "dot v u", v.dot( u ) );
        console.log( "dot normlized v normalized v", v.normalized().dot( v.normalized() ) );
        console.log( "lerped", v.lerped( u, 0.5 ) );
        console.log( "reflect", new mathgasm.Vec3( 12, 3, 1 ).reflect( new mathgasm.Vec3( 0, 1, 0 ) ) );
    }

    // Vec4
    {
        var v = new mathgasm.Vec4( 1, 2, 3, 4 );
        var u = new mathgasm.Vec4( 5, 6, 7, 8 );
        var w = new mathgasm.Vec4( 10, 20, 30, 40 );
        var n = new mathgasm.Vec4( 0, 1, 0, 0 );

        console.log( "v", v );
        console.log( "u", u );
        console.log( "w", w );
        console.log( "n", n );
        console.log( "add v u", v.add( u ) );
        console.log( "sub v u", v.sub( u ) );
        console.log( "mul v 10", v.mul( 10 ) );
        console.log( "mul v 10, 20", v.mul( 10, 20 ) );
        console.log( "mul v 10, 20, 30", v.mul( 10, 20, 30 ) );
        console.log( "mul v 10, 20, 30, 40", v.mul( 10, 20, 30, 40 ) );
        console.log( "length v", v.length() );
        console.log( "length n", n.length() );
        console.log( "dot v u", v.dot( u ) );
        console.log( "n normlized", n.normalized() );
        console.log( "v normlized", v.normalized() );
        console.log( "v normlized length", v.normalized().length() );
        console.log( "lerp v u", v.lerped( u, 0.5 ) );
    }

    // mat4
    {
        var A = new mathgasm.Mat4( 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 );
        var B = new mathgasm.Mat4( 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2 );
        var C = new mathgasm.Mat4( 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3 );
        var v = new mathgasm.Vec3( 1, 2, 3 );
        
        console.log( "A", A );
        console.log( "B", B );
        console.log( "C", C );
        console.log( "v", v );
        console.log( "B * C", B.mulMat( C ) );
        console.log( "A * v", A.mulVec( v ) );
        console.log( "B * v", B.mulVec( v ) );
        console.log( "C * v", C.mulVec( v ) );
        console.log( "A * 12", A.mulScalar( 12.0 ) );
        console.log( "B * 12", B.mulScalar( 12.0 ) );
        console.log( "C * 12", C.mulScalar( 12.0 ) );

        var bINVTR = B.invertedTR();
        var bINV = B.inverted();

        console.log( "InvertedTR B", bINVTR );
        console.log( "Inverted B", bINV );
        console.log( "Inverted B * ( B * v )", bINV.mulVec( B.mulVec( v ) ) );

        var composed = new mathgasm.Mat4(
            12, 0, 0, 0,
            0, 13, 0, 0,
            0, 0, 14, 0,
            1, 2, 3, 1
        );

        var decomposed = composed.decompose();
        console.log( "decomposed", decomposed );

        var q = new mathgasm.Quat4( new mathgasm.Vec3( 0.5, 0.5, 0.0 ), 33.0 );
        var m = new mathgasm.Mat4();
        console.log( "q", q );
        console.log( "m", m );
        console.log( "from quaternion", m.setFromQuaternion( q ) );
    }
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