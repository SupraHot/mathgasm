import { Heap } from './Heap.js'

// Global native interface object. 
// Can be accessed through mathgasm.__Native
let __Native = {};

// This loads the wasm file and merges the result into the global scope
class Bootstrapper {
    
    constructor() {
        
    }

    initialize( path, callback ) {
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

        const imports = {
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
                DYNAMICTOP_PTR : 0,
                tempDoublePtr : 0,
                STACKTOP: 0,
                STACK_MAX: 0,
                ABORT : 0,
                abortStackOverflow : function(){},
                _malloc : Heap.malloc.bind( Heap ),
                _printf : console.log,
                _sinf : Math.sin,
                _atan2f : Math.atan2,
                _acosf : Math.acos
            },
            global: {
                NaN :0,
                Infinity : 0
            }
        };

        fetch( path )
        .then(response =>response.arrayBuffer())
        .then(bytes => WebAssembly.instantiate( bytes, imports ))
        .then(results => {
            const wasmModule = results.instance;
            Heap.__init( imports.env.memory );
            __Native = wasmModule.exports;
        })
        .then( callback );
    }
}

let bootstrapper = new Bootstrapper();
export { bootstrapper as Bootstrapper, __Native };