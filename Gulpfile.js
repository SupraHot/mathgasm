const gulp         = require( 'gulp-param' )( require( 'gulp' ), process.argv );
const concat       = require( 'gulp-concat' );
const minify       = require( 'gulp-minify' );
const watch        = require( 'gulp-watch' );
const babel        = require( 'rollup-plugin-babel' ); 
const inject       = require( 'gulp-inject-string' ); 
const exec         = require( 'child_process' ).exec;
const sourcemaps   = require( 'gulp-sourcemaps' );  
const rollup       = require( 'rollup' ).rollup;  
const rename       = require( 'gulp-rename' );  
const source       = require( 'vinyl-source-stream' );
const buffer       = require( 'vinyl-buffer' );
const util         = require( 'gulp-util' );
const file         = require( 'gulp-file' );
const fs           = require( 'fs-extra' );
const path         = require( 'path' );


gulp.task( 'build', function() {
    exec('tc src/mathgasm.tbs --wasm --out build/mathgasm.wasm', function( err, stdout, stderr ) {
        console.log(stdout);
        console.log(stderr);
    });
});
gulp.task( 'bundle', function() {
    var d = new Date();
    var __DATE__ = JSON.stringify(d.toString());
        
    rollup({
        entry: './src/mathgasm.js',
        sourceMap: false,
        plugins: [
            babel({
                presets: [
                    [
                        "es2015", {
                            "modules": false
                        }
                    ]
                ],
                babelrc: false,
                exclude: 'node_modules/**',
                plugins: [
                    "external-helpers"
                ]
            })
        ]
    })
    .then( function(bundle) {
        return bundle.generate({
            format: 'umd',
            moduleName: 'mathgasm'
        })
    })
    .then(gen => {
        var d = new Date();
        var __DATE__ = JSON.stringify(d.toString());

        return file('./mathgasm.js', gen.code, {src: true})
        .pipe(inject.prepend(
            "// COMPILE TIME DEFINITIONS (Generated via gulp) \n" +
            "var __DATE__ = " + __DATE__ + "; \n" +
            "// END COMPILE TIME DEFINITIONS \n \n" + 
            "console.log('Compiled at', __DATE__);\n"
        ))
        .pipe(minify({
            ext: {
                src:'.js',
                min:'.min.js'
            }
        }))
        .pipe( gulp.dest( 'module/' ) )
        .on('data', util.log)
    });

     fs.copySync( './build/mathgasm.wasm', './module/mathgasm.wasm' );
});

gulp.task( 'default', [ 'build', 'bundle' ], function() {
    return watch(['./src/**/*.tbs' ], function() {
        gulp.start([ 'build' ]);
    })
});
