import { __Native } from '../util/Bootstrapper.js'
import { Heap } from '../util/Heap.js'
import { Vec3 } from './Vec3.js'
import { Quat4 } from './Quat4.js'

class Mat4 {
    // byte size = 
    constructor( m00 = 1.0, m01 = 0.0, m02 = 0.0, m03 = 0.0, 
                 m10 = 0.0, m11 = 1.0, m12 = 0.0, m13 = 0.0, 
                 m20 = 0.0, m21 = 0.0, m22 = 1.0, m23 = 0.0, 
                 m30 = 0.0, m31 = 0.0, m32 = 0.0, m33 = 1.0  ) 
    {
        this.m00 = m00; this.m10 = m10; this.m20 = m20; this.m30 = m30;
        this.m01 = m01; this.m11 = m11; this.m21 = m21; this.m31 = m31;
        this.m02 = m02; this.m12 = m12; this.m22 = m22; this.m32 = m32;
        this.m03 = m03; this.m13 = m13; this.m23 = m23; this.m33 = m33;
    }

    static mulMat( n, m ) {
        // load matrices into memory
        Heap.HEAPF32[ 0 ]  = n.m00;
        Heap.HEAPF32[ 1 ]  = n.m01;
        Heap.HEAPF32[ 2 ]  = n.m02;
        Heap.HEAPF32[ 3 ]  = n.m03;
        Heap.HEAPF32[ 4 ]  = n.m10;
        Heap.HEAPF32[ 5 ]  = n.m11;
        Heap.HEAPF32[ 6 ]  = n.m12;
        Heap.HEAPF32[ 7 ]  = n.m13;
        Heap.HEAPF32[ 8 ]  = n.m20;
        Heap.HEAPF32[ 9 ]  = n.m21;
        Heap.HEAPF32[ 10 ] = n.m22;
        Heap.HEAPF32[ 11 ] = n.m23;
        Heap.HEAPF32[ 12 ] = n.m30;
        Heap.HEAPF32[ 13 ] = n.m31;
        Heap.HEAPF32[ 14 ] = n.m32;
        Heap.HEAPF32[ 15 ] = n.m33;

        Heap.HEAPF32[ 16 ] = m.m00;
        Heap.HEAPF32[ 17 ] = m.m01;
        Heap.HEAPF32[ 18 ] = m.m02;
        Heap.HEAPF32[ 19 ] = m.m03;
        Heap.HEAPF32[ 20 ] = m.m10;
        Heap.HEAPF32[ 21 ] = m.m11;
        Heap.HEAPF32[ 22 ] = m.m12;
        Heap.HEAPF32[ 23 ] = m.m13;
        Heap.HEAPF32[ 24 ] = m.m20;
        Heap.HEAPF32[ 25 ] = m.m21;
        Heap.HEAPF32[ 26 ] = m.m22;
        Heap.HEAPF32[ 27 ] = m.m23;
        Heap.HEAPF32[ 28 ] = m.m30;
        Heap.HEAPF32[ 29 ] = m.m31;
        Heap.HEAPF32[ 30 ] = m.m32;
        Heap.HEAPF32[ 31 ] = m.m33;
        
        // execute
        __Native._mathgasm_float4x4_mul( 0, 64, 128 ); 

        return new Mat4(
            Heap.HEAPF32[ 32 ], Heap.HEAPF32[ 33 ], Heap.HEAPF32[ 34 ], Heap.HEAPF32[ 35 ],
            Heap.HEAPF32[ 36 ], Heap.HEAPF32[ 37 ], Heap.HEAPF32[ 38 ], Heap.HEAPF32[ 39 ],
            Heap.HEAPF32[ 40 ], Heap.HEAPF32[ 41 ], Heap.HEAPF32[ 42 ], Heap.HEAPF32[ 43 ],
            Heap.HEAPF32[ 44 ], Heap.HEAPF32[ 45 ], Heap.HEAPF32[ 46 ], Heap.HEAPF32[ 47 ]
        );
    }

    mulMat( m ) {
        return Mat4.mulMat( this, m );
    }

    static mulVec( m, v ) {
        // load data into memory
        Heap.HEAPF32[ 0 ]  = m.m00;
        Heap.HEAPF32[ 1 ]  = m.m01;
        Heap.HEAPF32[ 2 ]  = m.m02;
        Heap.HEAPF32[ 3 ]  = m.m03;
        Heap.HEAPF32[ 4 ]  = m.m10;
        Heap.HEAPF32[ 5 ]  = m.m11;
        Heap.HEAPF32[ 6 ]  = m.m12;
        Heap.HEAPF32[ 7 ]  = m.m13;
        Heap.HEAPF32[ 8 ]  = m.m20;
        Heap.HEAPF32[ 9 ]  = m.m21;
        Heap.HEAPF32[ 10 ] = m.m22;
        Heap.HEAPF32[ 11 ] = m.m23;
        Heap.HEAPF32[ 12 ] = m.m30;
        Heap.HEAPF32[ 13 ] = m.m31;
        Heap.HEAPF32[ 14 ] = m.m32;
        Heap.HEAPF32[ 15 ] = m.m33;

        Heap.HEAPF32[ 16 ] = v.x;
        Heap.HEAPF32[ 17 ] = v.y;
        Heap.HEAPF32[ 18 ] = v.z;

        // execute
        __Native._mathgasm_float4x4_mul_vec( 0, 64, 76 ); 

        return new Vec3( Heap.HEAPF32[ 19 ], Heap.HEAPF32[ 20 ], Heap.HEAPF32[ 21 ] );
    }

    mulVec( v ) {
        return Mat4.mulVec( this, v );
    }

    static mulScalar( m, s ) {
        // load data into memory
        Heap.HEAPF32[ 0 ]  = m.m00;
        Heap.HEAPF32[ 1 ]  = m.m01;
        Heap.HEAPF32[ 2 ]  = m.m02;
        Heap.HEAPF32[ 3 ]  = m.m03;
        Heap.HEAPF32[ 4 ]  = m.m10;
        Heap.HEAPF32[ 5 ]  = m.m11;
        Heap.HEAPF32[ 6 ]  = m.m12;
        Heap.HEAPF32[ 7 ]  = m.m13;
        Heap.HEAPF32[ 8 ]  = m.m20;
        Heap.HEAPF32[ 9 ]  = m.m21;
        Heap.HEAPF32[ 10 ] = m.m22;
        Heap.HEAPF32[ 11 ] = m.m23;
        Heap.HEAPF32[ 12 ] = m.m30;
        Heap.HEAPF32[ 13 ] = m.m31;
        Heap.HEAPF32[ 14 ] = m.m32;
        Heap.HEAPF32[ 15 ] = m.m33;

        Heap.HEAPF32[ 16 ] = s;

        // execute
        __Native._mathgasm_float4x4_mul_scalar( 0, 64, 68 ); 

        return new Mat4( 
            Heap.HEAPF32[ 17 ], Heap.HEAPF32[ 18 ], Heap.HEAPF32[ 19 ], Heap.HEAPF32[ 20 ],
            Heap.HEAPF32[ 21 ], Heap.HEAPF32[ 22 ], Heap.HEAPF32[ 23 ], Heap.HEAPF32[ 24 ],
            Heap.HEAPF32[ 25 ], Heap.HEAPF32[ 26 ], Heap.HEAPF32[ 27 ], Heap.HEAPF32[ 28 ],
            Heap.HEAPF32[ 29 ], Heap.HEAPF32[ 30 ], Heap.HEAPF32[ 31 ], Heap.HEAPF32[ 32 ]
        );
    }

    mulScalar( s ) {
        return Mat4.mulScalar( this, s );
    }

    static invertedTR( m ) {
        // load data into memory
        Heap.HEAPF32[ 0 ]  = m.m00;
        Heap.HEAPF32[ 1 ]  = m.m01;
        Heap.HEAPF32[ 2 ]  = m.m02;
        Heap.HEAPF32[ 3 ]  = m.m03;
        Heap.HEAPF32[ 4 ]  = m.m10;
        Heap.HEAPF32[ 5 ]  = m.m11;
        Heap.HEAPF32[ 6 ]  = m.m12;
        Heap.HEAPF32[ 7 ]  = m.m13;
        Heap.HEAPF32[ 8 ]  = m.m20;
        Heap.HEAPF32[ 9 ]  = m.m21;
        Heap.HEAPF32[ 10 ] = m.m22;
        Heap.HEAPF32[ 11 ] = m.m23;
        Heap.HEAPF32[ 12 ] = m.m30;
        Heap.HEAPF32[ 13 ] = m.m31;
        Heap.HEAPF32[ 14 ] = m.m32;
        Heap.HEAPF32[ 15 ] = m.m33;

        // execute
        __Native._mathgasm_float4x4_inverse_tr( 0, 64 ); 

        return new Mat4( 
            Heap.HEAPF32[ 16 ], Heap.HEAPF32[ 17 ], Heap.HEAPF32[ 18 ], Heap.HEAPF32[ 19 ],
            Heap.HEAPF32[ 20 ], Heap.HEAPF32[ 21 ], Heap.HEAPF32[ 22 ], Heap.HEAPF32[ 23 ],
            Heap.HEAPF32[ 24 ], Heap.HEAPF32[ 25 ], Heap.HEAPF32[ 26 ], Heap.HEAPF32[ 27 ],
            Heap.HEAPF32[ 28 ], Heap.HEAPF32[ 29 ], Heap.HEAPF32[ 30 ], Heap.HEAPF32[ 31 ]
        );
    }

    invertedTR() {
        return Mat4.invertedTR( this );
    }

    static inverted( m ) {
        // load data into memory
        Heap.HEAPF32[ 0 ]  = m.m00;
        Heap.HEAPF32[ 1 ]  = m.m01;
        Heap.HEAPF32[ 2 ]  = m.m02;
        Heap.HEAPF32[ 3 ]  = m.m03;
        Heap.HEAPF32[ 4 ]  = m.m10;
        Heap.HEAPF32[ 5 ]  = m.m11;
        Heap.HEAPF32[ 6 ]  = m.m12;
        Heap.HEAPF32[ 7 ]  = m.m13;
        Heap.HEAPF32[ 8 ]  = m.m20;
        Heap.HEAPF32[ 9 ]  = m.m21;
        Heap.HEAPF32[ 10 ] = m.m22;
        Heap.HEAPF32[ 11 ] = m.m23;
        Heap.HEAPF32[ 12 ] = m.m30;
        Heap.HEAPF32[ 13 ] = m.m31;
        Heap.HEAPF32[ 14 ] = m.m32;
        Heap.HEAPF32[ 15 ] = m.m33;

        // execute
        __Native._mathgasm_float4x4_inverse( 0, 64 ); 

        return new Mat4( 
            Heap.HEAPF32[ 16 ], Heap.HEAPF32[ 17 ], Heap.HEAPF32[ 18 ], Heap.HEAPF32[ 19 ],
            Heap.HEAPF32[ 20 ], Heap.HEAPF32[ 21 ], Heap.HEAPF32[ 22 ], Heap.HEAPF32[ 23 ],
            Heap.HEAPF32[ 24 ], Heap.HEAPF32[ 25 ], Heap.HEAPF32[ 26 ], Heap.HEAPF32[ 27 ],
            Heap.HEAPF32[ 28 ], Heap.HEAPF32[ 29 ], Heap.HEAPF32[ 30 ], Heap.HEAPF32[ 31 ]
        );
    }

    inverted() {
        return Mat4.inverted( this );
    }

    static setFromQuaternion( q ) {
        // load data into memory
        Heap.HEAPF32[ 0 ] = q.axis.x;
        Heap.HEAPF32[ 1 ] = q.axis.y;
        Heap.HEAPF32[ 2 ] = q.axis.z;
        Heap.HEAPF32[ 3 ] = q.w;

        // execute
        __Native._mathgasm_float4x4_from_quaternion( 0, 16 ); 

        return new Mat4( 
            Heap.HEAPF32[ 13 ], Heap.HEAPF32[ 14 ], Heap.HEAPF32[ 15 ], Heap.HEAPF32[ 16 ],
            Heap.HEAPF32[ 17 ], Heap.HEAPF32[ 18 ], Heap.HEAPF32[ 19 ], Heap.HEAPF32[ 20 ],
            Heap.HEAPF32[ 21 ], Heap.HEAPF32[ 22 ], Heap.HEAPF32[ 23 ], Heap.HEAPF32[ 24 ],
            Heap.HEAPF32[ 25 ], Heap.HEAPF32[ 26 ], Heap.HEAPF32[ 27 ], Heap.HEAPF32[ 28 ]
        );
    }

    setFromQuaternion( q ) {
        return Mat4.setFromQuaternion( q );
    }

    static decompose( m ) {
        // load data into memory
        Heap.HEAPF32[ 0 ]  = m.m00;
        Heap.HEAPF32[ 1 ]  = m.m01;
        Heap.HEAPF32[ 2 ]  = m.m02;
        Heap.HEAPF32[ 3 ]  = m.m03;
        Heap.HEAPF32[ 4 ]  = m.m10;
        Heap.HEAPF32[ 5 ]  = m.m11;
        Heap.HEAPF32[ 6 ]  = m.m12;
        Heap.HEAPF32[ 7 ]  = m.m13;
        Heap.HEAPF32[ 8 ]  = m.m20;
        Heap.HEAPF32[ 9 ]  = m.m21;
        Heap.HEAPF32[ 10 ] = m.m22;
        Heap.HEAPF32[ 11 ] = m.m23;
        Heap.HEAPF32[ 12 ] = m.m30;
        Heap.HEAPF32[ 13 ] = m.m31;
        Heap.HEAPF32[ 14 ] = m.m32;
        Heap.HEAPF32[ 15 ] = m.m33;

        // execute
        __Native._mathgasm_float4x4_decompose( 0, 64 ); 

        return {
            scale       : new Vec3(
                Heap.HEAPF32[ 32 ], Heap.HEAPF32[ 33 ], Heap.HEAPF32[ 34 ]
            ),
            translation : new Vec3(
                Heap.HEAPF32[ 35 ], Heap.HEAPF32[ 36 ], Heap.HEAPF32[ 37 ]
            ),
            rotation    : new Quat4(
                new Vec3( 
                    Heap.HEAPF32[ 38 ], Heap.HEAPF32[ 39 ], Heap.HEAPF32[ 40 ] 
                ), 
                Heap.HEAPF32[ 41 ]
            )
        };
    }

    decompose() {
        return Mat4.decompose( this );
    }
}

export { Mat4 };