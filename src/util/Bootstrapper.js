// Global native interface object. 
// Can be accessed through mathgasm.__Native
let __Native = {};

// This loads the wasm file and merges the result into the global scope
class Bootstrapper {
    
    constructor() {

    }

    initialize( path, callback ) {
        fetch( path )
        .then( response => response.arrayBuffer() )
        .then( buffer => WebAssembly.compile( buffer ) )
        .then( module => {
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
                })
                }
            }

            const wasmModule = new WebAssembly.Instance( module, imports );
            __Native = wasmModule.exports;
        })
        .then( callback );
    }
}

let bootstrapper = new Bootstrapper();
export { bootstrapper as Bootstrapper, __Native };