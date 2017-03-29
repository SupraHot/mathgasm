# mathgasm
![alt tag](https://raw.githubusercontent.com/SupraHot/mathgasm/master/mathgasm.png)

I am 12 and what is this?
===
mathgasm is a compiled WebAssembly module written in C++ focusing on fast floating point math for game development.

H-how to use this?
===
You have two options here.
* a) You can use the pre-written JavaScript wrappers
* b) You can interface directly with the .wasm-module yourself

Initialization
===
To use this module you have to include the mathgasm.js file in the module/ folder into your html file and place the mathgasm.wasm file next to your index.html. In code you then need to call "mathgasm.Bootstrapper.init( filepath, callback )". After the module has been loaded and linked, the callback is fired and you can interface with the module. Read the next blocks for further instructions.

JavaScript wrappers
===
These classes are math structs for vectors, quaternions, and matrices, with pretty basic functionality. You can just use them as they are, without rewiring their functions to your own classes. But if you decide, that you want to extend YOUR existing math lib with them, then you need to link their functions to your math functions, so that the mathgasm module gets called, when your functions are fired.

Interfacing with .wasm module
===
If you decide that you don't want to use the JS wrappers and you don't have an existing math lib, then you can just interface with the .wasm code directly, by simply calling it's function on the global "__Native" object. For examples you can just check out the files in the src/math/ folder.