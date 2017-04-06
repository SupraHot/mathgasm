#include <cmath>

// Basic sanity test
extern "C" {
    void ejaculate( int a, float* b ) {
        b[0] = 77.7f;
        b[1] = 333.03f;
    }
}

extern "C" {

    // - - - - - - float - - - - - - -

    void mathgasm_mad( float a, float b, float c, float* dest ) {
        dest[ 0 ] = a * b + c;
    }

    // - - - - - - float2 - - - - - - -

    void mathgasm_float2_add( float* a, float* b, float* dest ) {
        dest[ 0 ] = a[ 0 ] + b[ 0 ];
        dest[ 1 ] = a[ 1 ] + b[ 1 ];
    }

    void mathgasm_float2_mul( float* a, float* b, float* dest ) {
        dest[ 0 ] = a[ 0 ] * b[ 0 ];
        dest[ 1 ] = a[ 1 ] * b[ 1 ];
    }

    void mathgasm_float2_mad( float* a, float* b, float* c, float* dest ) {
        dest[ 0 ] = a[ 0 ] * b[ 0 ] + c[ 0 ];
        dest[ 1 ] = a[ 1 ] * b[ 1 ] + c[ 1 ];
    }

    void mathgasm_float2_length( float* a, float* dest ) {
        dest[ 0 ] = sqrtf( a[ 0 ] * a[ 0 ] + a[ 1 ] * a[ 1 ] );
    }

    void mathgasm_float2_dot( float* a, float* b, float* dest ) {
        dest[ 0 ] = a[ 0 ] * b[ 0 ] + a[ 1 ] * b[ 1 ];
    }

    void mathgasm_float2_normalize( float* a, float* dest ) {
        const float inverseLength = 1.0f / sqrtf( a[ 0 ] * a[ 0 ] + a[ 1 ] * a[ 1 ] );
        dest[ 0 ] = a[ 0 ] * inverseLength;
        dest[ 1 ] = a[ 1 ] * inverseLength;
    }

    void mathgasm_float2_lerp( float* a, float* b, float* dt, float* dest ) {
        dest[ 0 ] = a[ 0 ] + ( b[ 0 ] - a[ 0 ] ) * dt[ 0 ];
        dest[ 1 ] = a[ 1 ] + ( b[ 1 ] - a[ 1 ] ) * dt[ 0 ];
     }

    // - - - - - - - - - - float3 - - - - - - - - -

    void mathgasm_float3_add( float* a, float* b, float* dest ) {
        dest[ 0 ] = a[ 0 ] + b[ 0 ];
        dest[ 1 ] = a[ 1 ] + b[ 1 ];
        dest[ 2 ] = a[ 2 ] + b[ 2 ];
    }

    void mathgasm_float3_mul( float* a, float* b, float* dest ) {
        dest[ 0 ] = a[ 0 ] * b[ 0 ];
        dest[ 1 ] = a[ 1 ] * b[ 1 ];
        dest[ 2 ] = a[ 2 ] * b[ 2 ];
    }

    void mathgasm_float3_mad( float* a, float* b, float* c, float* dest ) {
        dest[ 0 ] = a[ 0 ] * b[ 0 ] + c[ 0 ];
        dest[ 1 ] = a[ 1 ] * b[ 1 ] + c[ 1 ];
        dest[ 2 ] = a[ 2 ] * b[ 2 ] + c[ 2 ];
    }

    void mathgasm_float3_length( float* a, float* dest ) {
        dest[ 0 ] = sqrtf( a[ 0 ] * a[ 0 ] + a[ 1 ] * a[ 1 ] + a[ 2 ] * a[ 2 ] );
    }

    void mathgasm_float3_dot( float* a, float* b, float* dest ) {
        dest[ 0 ] = a[ 0 ] * b[ 0 ] + a[ 1 ] * b[ 1 ] + a[ 2 ] * b[ 2 ];
    }

    void mathgasm_float3_normalize( float* a, float* dest ) {
        const float inverseLength = 1.0f / sqrtf( a[ 0 ] * a[ 0 ] + a[ 1 ] * a[ 1 ] + a[ 2 ] * a[ 2 ] );
        dest[ 0 ] = a[ 0 ] * inverseLength;
        dest[ 1 ] = a[ 1 ] * inverseLength;
        dest[ 2 ] = a[ 2 ] * inverseLength;
    }

    void mathgasm_float3_cross( float* a, float* b, float* dest ) {
        dest[ 0 ] = a[ 1 ] * b[ 2 ] - a[ 2 ] * b[ 1 ];
        dest[ 1 ] = a[ 2 ] * b[ 0 ] - a[ 0 ] * b[ 2 ];
        dest[ 2 ] = a[ 0 ] * b[ 1 ] - a[ 1 ] * b[ 0 ];
    }

    void mathgasm_float3_reflect( float* a, float* b, float* dest ) {
        float dot = a[ 0 ] * b[ 0 ] + a[ 1 ] * b[ 1 ] + a[ 2 ] * b[ 2 ];
        dest[ 0 ] = b[ 0 ] * ( -2.0f ) * ( dot ) + a[ 0 ];
        dest[ 1 ] = b[ 1 ] * ( -2.0f ) * ( dot ) + a[ 1 ];
        dest[ 2 ] = b[ 2 ] * ( -2.0f ) * ( dot ) + a[ 2 ];
    }

    void mathgasm_float3_lerp( float* a, float* b, float* dt, float* dest ) {
        dest[ 0 ] = a[ 0 ] + ( b[ 0 ] - a[ 0 ] ) * dt[ 0 ];
        dest[ 1 ] = a[ 1 ] + ( b[ 1 ] - a[ 1 ] ) * dt[ 0 ];
        dest[ 2 ] = a[ 2 ] + ( b[ 2 ] - a[ 2 ] ) * dt[ 0 ];
    }

    // - - - - - - - - - - float4 - - - - - - - - - - - 

    void mathgasm_float4_add( float* a, float* b, float* dest ) {
        dest[ 0 ] = a[ 0 ] + b[ 0 ];
        dest[ 1 ] = a[ 1 ] + b[ 1 ];
        dest[ 2 ] = a[ 2 ] + b[ 2 ];
        dest[ 3 ] = a[ 3 ] + b[ 3 ];
    }

    void mathgasm_float4_mul( float* a, float* b, float* dest ) {
        dest[ 0 ] = a[ 0 ] * b[ 0 ];
        dest[ 1 ] = a[ 1 ] * b[ 1 ];
        dest[ 2 ] = a[ 2 ] * b[ 2 ];
        dest[ 3 ] = a[ 3 ] * b[ 3 ];
    }

    void mathgasm_float4_length( float* a, float* dest ) {
        dest[ 0 ] = sqrtf( a[ 0 ] * a[ 0 ] + a[ 1 ] * a[ 1 ] + a[ 2 ] * a[ 2 ] + a[ 2 ] * a[ 2 ] + a[ 3 ] * a[ 3 ] );
    }

    void mathgasm_float4_normalize( float* a, float* dest ) {
        const float inverseLength = 1.0f / sqrtf( a[ 0 ] * a[ 0 ] + a[ 1 ] * a[ 1 ] + a[ 2 ] * a[ 2 ] + a[ 2 ] * a[ 2 ] + a[ 3 ] * a[ 3 ] );
        dest[ 0 ] = a[ 0 ] * inverseLength;
        dest[ 1 ] = a[ 1 ] * inverseLength;
        dest[ 2 ] = a[ 2 ] * inverseLength;
        dest[ 3 ] = a[ 3 ] * inverseLength;
    }

    void mathgasm_float4_dot( float* a, float* b, float* dest ) {
        dest[ 0 ] = a[ 0 ] * b[ 0 ] + a[ 1 ] * b[ 1 ] + a[ 2 ] * b[ 2 ] + a[ 3 ] * b[ 3 ];
    }

    void mathgasm_float4_lerp( float* a, float* b, float* dt, float* dest ) {
        dest[ 0 ] = a[ 0 ] + ( b[ 0 ] - a[ 0 ] ) * dt[ 0 ];
        dest[ 1 ] = a[ 1 ] + ( b[ 1 ] - a[ 1 ] ) * dt[ 0 ];
        dest[ 2 ] = a[ 2 ] + ( b[ 2 ] - a[ 2 ] ) * dt[ 0 ];
        dest[ 3 ] = a[ 3 ] + ( b[ 3 ] - a[ 3 ] ) * dt[ 0 ];
    }

    // - - - - - - - - - - float4x4 - - - - - - - - - - - 

    void mathgasm_float4x4_from_quaternion( float* q, float* dest ) { // Outputs 35 floats 
        // forward
        dest[ 0 ] = 2.0f * (q[ 0 ] * q[ 2 ] - q[ 3 ] * q[ 1 ]);
        dest[ 1 ] = 2.0f * (q[ 1 ] * q[ 2 ] + q[ 3 ] * q[ 0 ]);
        dest[ 2 ] = 1.0f - 2.0f * (q[ 0 ] * q[ 0 ] + q[ 1 ] * q[ 1 ]);

        // up
        dest[ 3 ] = 2.0f * (q[ 0 ] * q[ 1 ] + q[ 3 ] * q[ 2 ]);
        dest[ 4 ] = 1.0f - 2.0f * (q[ 0 ] * q[ 0 ] + q[ 2 ] * q[ 2 ]);
        dest[ 5 ] = 2.0f * (q[ 1 ] * q[ 2 ] - q[ 3 ] * q[ 0 ]);

        // right
        dest[ 6 ] = 1.0f - 2.0f * (q[ 1 ] * q[ 1 ] + q[ 2 ] * q[ 2 ]);
        dest[ 7 ] = 2.0f * (q[ 0 ] * q[ 1 ] - q[ 3 ] * q[ 2 ]);
        dest[ 8 ] = 2.0f * (q[ 0 ] * q[ 2 ] + q[ 3 ] * q[ 1 ]);

        dest[ 9 ] = dest[ 6 ];  dest[ 13 ] = dest[ 7 ];  dest[ 17 ] = dest[ 8 ];  dest[ 21 ] = 0.0f;
        dest[ 10 ] = dest[ 3 ]; dest[ 14 ] = dest[ 4 ];  dest[ 18 ] = dest[ 5 ];  dest[ 22 ] = 0.0f;
        dest[ 11 ] = dest[ 0 ]; dest[ 15 ] = dest[ 1 ];  dest[ 19 ] = dest[ 2 ];  dest[ 23 ] = 0.0f;
        dest[ 12 ] = 0.0f;      dest[ 16 ] = 0.0f;       dest[ 20 ] = 0.0f;       dest[ 24 ] = 1.0f;
    }

    void mathgasm_float4x4_mul_vec( float* m, float* v, float* dest ) { // Outputs 3 floats
        dest[ 0 ] = m[ 0 ] * v[ 0 ] + m[ 4 ] * v[ 1 ] + m[ 8 ]  * v[ 2 ] + m[ 12 ];
        dest[ 1 ] = m[ 1 ] * v[ 0 ] + m[ 5 ] * v[ 1 ] + m[ 9 ]  * v[ 2 ] + m[ 13 ];
        dest[ 2 ] = m[ 2 ] * v[ 0 ] + m[ 6 ] * v[ 1 ] + m[ 10 ] * v[ 2 ] + m[ 14 ];
    }

    void mathgasm_float4x4_mul_scalar( float* m, float* s, float* dest ) { // Outputs 16 floats
        dest[ 0 ]  = m[ 0 ]  * s[ 0 ];
        dest[ 1 ]  = m[ 1 ]  * s[ 0 ];
        dest[ 2 ]  = m[ 2 ]  * s[ 0 ];
        dest[ 3 ]  = m[ 3 ]  * s[ 0 ];
        dest[ 4 ]  = m[ 4 ]  * s[ 0 ];
        dest[ 5 ]  = m[ 5 ]  * s[ 0 ];
        dest[ 6 ]  = m[ 6 ]  * s[ 0 ];
        dest[ 7 ]  = m[ 7 ]  * s[ 0 ];
        dest[ 8 ]  = m[ 8 ]  * s[ 0 ];
        dest[ 9 ]  = m[ 9 ]  * s[ 0 ];
        dest[ 10 ] = m[ 10 ] * s[ 0 ];
        dest[ 11 ] = m[ 11 ] * s[ 0 ];
        dest[ 12 ] = m[ 12 ] * s[ 0 ];
        dest[ 13 ] = m[ 13 ] * s[ 0 ];
        dest[ 14 ] = m[ 14 ] * s[ 0 ];
        dest[ 15 ] = m[ 15 ] * s[ 0 ];
    }

    void mathgasm_float4x4_inverse_tr( float* m, float* dest ) { // Outputs 16 floats
        dest[ 0 ] = m[ 0 ];
        dest[ 1 ] = m[ 4 ];
        dest[ 2 ] = m[ 8 ];
        dest[ 3 ] = 1.0f;
  
        dest[ 4 ] = m[ 1 ];
        dest[ 5 ] = m[ 5 ];
        dest[ 6 ] = m[ 9 ];
        dest[ 7 ] = 1.0f;

        dest[ 8 ]  = m[ 2 ];
        dest[ 9 ]  = m[ 6 ];
        dest[ 10 ] = m[ 10 ];
        dest[ 11 ] = 1.0f;

        dest[ 12 ] = 0.0f;
        dest[ 13 ] = 0.0f;
        dest[ 14 ] = 0.0f;
        dest[ 15 ] = 1.0f; 

        float translationX = dest[ 0 ] * -m[ 12 ] + dest[ 4 ] * -m[ 13 ] + dest[ 8 ]  * -m[ 14 ] + dest[ 12 ];
        float translationY = dest[ 1 ] * -m[ 12 ] + dest[ 5 ] * -m[ 13 ] + dest[ 9 ]  * -m[ 14 ] + dest[ 13 ];
        float translationZ = dest[ 2 ] * -m[ 12 ] + dest[ 6 ] * -m[ 13 ] + dest[ 10 ] * -m[ 14 ] + dest[ 14 ];

        dest[ 12 ] = translationX;
        dest[ 13 ] = translationY;
        dest[ 14 ] = translationZ;
     }

     
     void mathgasm_float4x4_inverse( float* m, float* dest ) { // Outputs 16 floats
        float det = 0;
        
        dest[ 0 ]  = m[ 5 ] * m[ 10 ] * m[ 15 ] -
                         m[ 5 ] * m[ 11 ] * m[ 14 ] -
                         m[ 9 ] * m[ 6 ] * m[ 15 ] +
                         m[ 9 ] * m[ 7 ] * m[ 14 ] +
                         m[ 13 ] * m[ 6 ] * m[ 11 ] -
                         m[ 13 ] * m[ 7 ] * m[ 10 ];

        dest[ 4 ]  = -m[ 4 ] * m[ 10 ] * m[ 15 ] +
                        m[ 4 ] * m[ 11 ] * m[ 14 ] +
                        m[ 8 ] * m[ 6 ] * m[ 15 ] -
                        m[ 8 ] * m[ 7 ] * m[ 14 ] -
                        m[ 12 ] * m[ 6 ] * m[ 11 ] +
                        m[ 12 ] * m[ 7 ] * m[ 10 ];

        dest[ 8 ]  = m[ 4 ] * m[ 9 ] * m[ 15 ] -
                         m[ 4 ] * m[ 11 ] * m[ 13 ] -
                         m[ 8 ] * m[ 5 ] * m[ 15 ] +
                         m[ 8 ] * m[ 7 ] * m[ 13 ] +
                         m[ 12 ] * m[ 5 ] * m[ 11 ] -
                         m[ 12 ] * m[ 7 ] * m[ 9 ];

        dest[ 12 ]  = -m[ 4 ] * m[ 9 ] * m[ 14 ] +
                        m[ 4 ] * m[ 10 ] * m[ 13 ] +
                        m[ 8 ] * m[ 5 ] * m[ 14 ] -
                        m[ 8 ] * m[ 6 ] * m[ 13 ] -
                        m[ 12 ] * m[ 5 ] * m[ 10 ] +
                        m[ 12 ] * m[ 6 ] * m[ 9 ];

        dest[ 1 ]  = -m[ 1 ] * m[ 10 ] * m[ 15 ] +
                        m[ 1 ] * m[ 11 ] * m[ 14 ] +
                        m[ 9 ] * m[ 2 ] * m[ 15 ] -
                        m[ 9 ] * m[ 3 ] * m[ 14 ] -
                        m[ 13 ] * m[ 2 ] * m[ 11 ] +
                        m[ 13 ] * m[ 3 ] * m[ 10 ];

        dest[ 5 ]  = m[ 0 ] * m[ 10 ] * m[ 15 ] -
                         m[ 0 ] * m[ 11 ] * m[ 14 ] -
                         m[ 8 ] * m[ 2 ] * m[ 15 ] +
                         m[ 8 ] * m[ 3 ] * m[ 14 ] +
                         m[ 12 ] * m[ 2 ] * m[ 11 ] -
                         m[ 12 ] * m[ 3 ] * m[ 10 ];

        dest[ 9 ]  = -m[ 0 ] * m[ 9 ] * m[ 15 ] +
                            m[ 0 ] * m[ 11 ] * m[ 13 ] +
                            m[ 8 ] * m[ 1 ] * m[ 15 ] -
                            m[ 8 ] * m[ 3 ] * m[ 13 ] -
                            m[ 12 ] * m[ 1 ] * m[ 11 ] +
                            m[ 12 ] * m[ 3 ] * m[ 9 ];
                            
        dest[ 13 ]  = m[ 0 ] * m[ 9 ] * m[ 14 ] -
                            m[ 0 ] * m[ 10 ] * m[ 13 ] -
                            m[ 8 ] * m[ 1 ] * m[ 14 ] +
                            m[ 8 ] * m[ 2 ] * m[ 13 ] +
                            m[ 12 ] * m[ 1 ] * m[ 10 ] -
                            m[ 12 ] * m[ 2 ] * m[ 9 ];

        dest[ 2 ]  = m[ 1 ] * m[ 6 ] * m[ 15 ] -
                            m[ 1 ] * m[ 7 ] * m[ 14 ] -
                            m[ 5 ] * m[ 2 ] * m[ 15 ] +
                            m[ 5 ] * m[ 3 ] * m[ 14 ] +
                            m[ 13 ] * m[ 2 ] * m[ 7 ] -
                            m[ 13 ] * m[ 3 ] * m[ 6 ];

        dest[ 6 ]  = -m[ 0 ] * m[ 6 ] * m[ 15 ] +
                            m[ 0 ] * m[ 7 ] * m[ 14 ] +
                            m[ 4 ] * m[ 2 ] * m[ 15 ] -
                            m[ 4 ] * m[ 3 ] * m[ 14 ] -
                            m[ 12 ] * m[ 2 ] * m[ 7 ] +
                            m[ 12 ] * m[ 3 ] * m[ 6 ];

        dest[ 10 ]  = m[ 0 ] * m[ 5 ] * m[ 15 ] -
                            m[ 0 ] * m[ 7 ] * m[ 13 ] -
                            m[ 4 ] * m[ 1 ] * m[ 15 ] +
                            m[ 4 ] * m[ 3 ] * m[ 13 ] +
                            m[ 12 ] * m[ 1 ] * m[ 7 ] -
                            m[ 12 ] * m[ 3 ] * m[ 5 ];

        dest[ 14 ]  = -m[ 0 ] * m[ 5 ] * m[ 14 ] +
                            m[ 0 ] * m[ 6 ] * m[ 13 ] +
                            m[ 4 ] * m[ 1 ] * m[ 14 ] -
                            m[ 4 ] * m[ 2 ] * m[ 13 ] -
                            m[ 12 ] * m[ 1 ] * m[ 6 ] +
                            m[ 12 ] * m[ 2 ] * m[ 5 ];

        dest[ 3 ]  = -m[ 1 ] * m[ 6 ] * m[ 11 ] +
                            m[ 1 ] * m[ 7 ] * m[ 10 ] +
                            m[ 5 ] * m[ 2 ] * m[ 11 ] -
                            m[ 5 ] * m[ 3 ] * m[ 10 ] -
                            m[ 9 ] * m[ 2 ] * m[ 7 ] +
                            m[ 9 ] * m[ 3 ] * m[ 6 ];

        dest[ 7 ]  = m[ 0 ] * m[ 6 ] * m[ 11 ] -
                            m[ 0 ] * m[ 7 ] * m[ 10 ] -
                            m[ 4 ] * m[ 2 ] * m[ 11 ] +
                            m[ 4 ] * m[ 3 ] * m[ 10 ] +
                            m[ 8 ] * m[ 2 ] * m[ 7 ] -
                            m[ 8 ] * m[ 3 ] * m[ 6 ];

        dest[ 11 ]  = -m[ 0 ] * m[ 5 ] * m[ 11 ] +
                            m[ 0 ] * m[ 7 ] * m[ 9 ] +
                            m[ 4 ] * m[ 1 ] * m[ 11 ] -
                            m[ 4 ] * m[ 3 ] * m[ 9 ] -
                            m[ 8 ] * m[ 1 ] * m[ 7 ] +
                            m[ 8 ] * m[ 3 ] * m[ 5 ];

        dest[ 15 ]  = m[ 0 ] * m[ 5 ] * m[ 10 ] -
                            m[ 0 ] * m[ 6 ] * m[ 9 ] -
                            m[ 4 ] * m[ 1 ] * m[ 10 ] +
                            m[ 4 ] * m[ 2 ] * m[ 9 ] +
                            m[ 8 ] * m[ 1 ] * m[ 6 ] -
                            m[ 8 ] * m[ 2 ] * m[ 5 ];

        det = m[ 0 ] * dest[ 0 ]  + m[ 1 ] * dest[ 4 ]  + m[ 2 ] * dest[ 8 ]  + m[ 3 ] * dest[ 12 ] ;

        if ( det != 0 )
        {
            det = 1.0 / det;

            dest[ 0 ]  *= det;
            dest[ 1 ]  *= det;
            dest[ 2 ]  *= det;
            dest[ 3 ]  *= det;

            dest[ 4 ]  *= det;
            dest[ 5 ]  *= det;
            dest[ 6 ]  *= det;
            dest[ 7 ]  *= det;

            dest[ 8 ]  *= det;
            dest[ 9 ]  *= det;
            dest[ 10 ]  *= det;
            dest[ 11 ]  *= det;

            dest[ 12 ]  *= det;
            dest[ 13 ]  *= det;
            dest[ 14 ]  *= det;
            dest[ 15 ]  *= det;
        }

    }

    void mathgasm_float4x4_decompose( float* m, float* dest ) { // Outputs 26 floats
        
        float determinat = 0;
        
        dest[ 0 ]  = m[ 5 ] * m[ 10 ] * m[ 15 ] -
                         m[ 5 ] * m[ 11 ] * m[ 14 ] -
                         m[ 9 ] * m[ 6 ] * m[ 15 ] +
                         m[ 9 ] * m[ 7 ] * m[ 14 ] +
                         m[ 13 ] * m[ 6 ] * m[ 11 ] -
                         m[ 13 ] * m[ 7 ] * m[ 10 ];

        dest[ 4 ]  = -m[ 4 ] * m[ 10 ] * m[ 15 ] +
                        m[ 4 ] * m[ 11 ] * m[ 14 ] +
                        m[ 8 ] * m[ 6 ] * m[ 15 ] -
                        m[ 8 ] * m[ 7 ] * m[ 14 ] -
                        m[ 12 ] * m[ 6 ] * m[ 11 ] +
                        m[ 12 ] * m[ 7 ] * m[ 10 ];

        dest[ 8 ]  = m[ 4 ] * m[ 9 ] * m[ 15 ] -
                         m[ 4 ] * m[ 11 ] * m[ 13 ] -
                         m[ 8 ] * m[ 5 ] * m[ 15 ] +
                         m[ 8 ] * m[ 7 ] * m[ 13 ] +
                         m[ 12 ] * m[ 5 ] * m[ 11 ] -
                         m[ 12 ] * m[ 7 ] * m[ 9 ];

        dest[ 12 ]  = -m[ 4 ] * m[ 9 ] * m[ 14 ] +
                        m[ 4 ] * m[ 10 ] * m[ 13 ] +
                        m[ 8 ] * m[ 5 ] * m[ 14 ] -
                        m[ 8 ] * m[ 6 ] * m[ 13 ] -
                        m[ 12 ] * m[ 5 ] * m[ 10 ] +
                        m[ 12 ] * m[ 6 ] * m[ 9 ];

        dest[ 1 ]  = -m[ 1 ] * m[ 10 ] * m[ 15 ] +
                        m[ 1 ] * m[ 11 ] * m[ 14 ] +
                        m[ 9 ] * m[ 2 ] * m[ 15 ] -
                        m[ 9 ] * m[ 3 ] * m[ 14 ] -
                        m[ 13 ] * m[ 2 ] * m[ 11 ] +
                        m[ 13 ] * m[ 3 ] * m[ 10 ];

        dest[ 5 ]  = m[ 0 ] * m[ 10 ] * m[ 15 ] -
                         m[ 0 ] * m[ 11 ] * m[ 14 ] -
                         m[ 8 ] * m[ 2 ] * m[ 15 ] +
                         m[ 8 ] * m[ 3 ] * m[ 14 ] +
                         m[ 12 ] * m[ 2 ] * m[ 11 ] -
                         m[ 12 ] * m[ 3 ] * m[ 10 ];

        dest[ 9 ]  = -m[ 0 ] * m[ 9 ] * m[ 15 ] +
                            m[ 0 ] * m[ 11 ] * m[ 13 ] +
                            m[ 8 ] * m[ 1 ] * m[ 15 ] -
                            m[ 8 ] * m[ 3 ] * m[ 13 ] -
                            m[ 12 ] * m[ 1 ] * m[ 11 ] +
                            m[ 12 ] * m[ 3 ] * m[ 9 ];
                            
        dest[ 13 ]  = m[ 0 ] * m[ 9 ] * m[ 14 ] -
                            m[ 0 ] * m[ 10 ] * m[ 13 ] -
                            m[ 8 ] * m[ 1 ] * m[ 14 ] +
                            m[ 8 ] * m[ 2 ] * m[ 13 ] +
                            m[ 12 ] * m[ 1 ] * m[ 10 ] -
                            m[ 12 ] * m[ 2 ] * m[ 9 ];

        dest[ 2 ]  = m[ 1 ] * m[ 6 ] * m[ 15 ] -
                            m[ 1 ] * m[ 7 ] * m[ 14 ] -
                            m[ 5 ] * m[ 2 ] * m[ 15 ] +
                            m[ 5 ] * m[ 3 ] * m[ 14 ] +
                            m[ 13 ] * m[ 2 ] * m[ 7 ] -
                            m[ 13 ] * m[ 3 ] * m[ 6 ];

        dest[ 6 ]  = -m[ 0 ] * m[ 6 ] * m[ 15 ] +
                            m[ 0 ] * m[ 7 ] * m[ 14 ] +
                            m[ 4 ] * m[ 2 ] * m[ 15 ] -
                            m[ 4 ] * m[ 3 ] * m[ 14 ] -
                            m[ 12 ] * m[ 2 ] * m[ 7 ] +
                            m[ 12 ] * m[ 3 ] * m[ 6 ];

        dest[ 10 ]  = m[ 0 ] * m[ 5 ] * m[ 15 ] -
                            m[ 0 ] * m[ 7 ] * m[ 13 ] -
                            m[ 4 ] * m[ 1 ] * m[ 15 ] +
                            m[ 4 ] * m[ 3 ] * m[ 13 ] +
                            m[ 12 ] * m[ 1 ] * m[ 7 ] -
                            m[ 12 ] * m[ 3 ] * m[ 5 ];

        dest[ 14 ]  = -m[ 0 ] * m[ 5 ] * m[ 14 ] +
                            m[ 0 ] * m[ 6 ] * m[ 13 ] +
                            m[ 4 ] * m[ 1 ] * m[ 14 ] -
                            m[ 4 ] * m[ 2 ] * m[ 13 ] -
                            m[ 12 ] * m[ 1 ] * m[ 6 ] +
                            m[ 12 ] * m[ 2 ] * m[ 5 ];

        dest[ 3 ]  = -m[ 1 ] * m[ 6 ] * m[ 11 ] +
                            m[ 1 ] * m[ 7 ] * m[ 10 ] +
                            m[ 5 ] * m[ 2 ] * m[ 11 ] -
                            m[ 5 ] * m[ 3 ] * m[ 10 ] -
                            m[ 9 ] * m[ 2 ] * m[ 7 ] +
                            m[ 9 ] * m[ 3 ] * m[ 6 ];

        dest[ 7 ]  = m[ 0 ] * m[ 6 ] * m[ 11 ] -
                            m[ 0 ] * m[ 7 ] * m[ 10 ] -
                            m[ 4 ] * m[ 2 ] * m[ 11 ] +
                            m[ 4 ] * m[ 3 ] * m[ 10 ] +
                            m[ 8 ] * m[ 2 ] * m[ 7 ] -
                            m[ 8 ] * m[ 3 ] * m[ 6 ];

        dest[ 11 ]  = -m[ 0 ] * m[ 5 ] * m[ 11 ] +
                            m[ 0 ] * m[ 7 ] * m[ 9 ] +
                            m[ 4 ] * m[ 1 ] * m[ 11 ] -
                            m[ 4 ] * m[ 3 ] * m[ 9 ] -
                            m[ 8 ] * m[ 1 ] * m[ 7 ] +
                            m[ 8 ] * m[ 3 ] * m[ 5 ];

        dest[ 15 ]  = m[ 0 ] * m[ 5 ] * m[ 10 ] -
                            m[ 0 ] * m[ 6 ] * m[ 9 ] -
                            m[ 4 ] * m[ 1 ] * m[ 10 ] +
                            m[ 4 ] * m[ 2 ] * m[ 9 ] +
                            m[ 8 ] * m[ 1 ] * m[ 6 ] -
                            m[ 8 ] * m[ 2 ] * m[ 5 ];

        determinat = m[ 0 ] * dest[ 0 ]  + m[ 1 ] * dest[ 4 ]  + m[ 2 ] * dest[ 8 ]  + m[ 3 ] * dest[ 12 ] ;

        // Decompose output begins after 16 floats. @ dest[ 16 ]
        
        
        // Scale 
        dest[ 16 ] = sqrtf( m[ 0 ] * m[ 0 ] + m[ 1 ] * m[ 1 ] + m[ 2 ] * m[ 2 ] );   // x
        dest[ 17 ] = sqrtf( m[ 4 ] * m[ 4 ] + m[ 5 ] * m[ 5 ] + m[ 6 ] * m[ 6 ] );   // y
        dest[ 18 ] = sqrtf( m[ 8 ] * m[ 8 ] + m[ 9 ] * m[ 9 ] + m[ 10 ] * m[ 10 ] ); // z

        if ( determinat < 0 ) {
            dest[ 18 ] = - dest[ 18 ];
        }

        // Translation 
        dest[ 19 ] = m[ 12 ]; // x
        dest[ 20 ] = m[ 13 ]; // y
        dest[ 21 ] = m[ 14 ]; // z
        
        float invScaleX = 1.0f / dest[ 16 ];
        float invScaleY = 1.0f / dest[ 17 ];
        float invScaleZ = 1.0f / dest[ 18 ];

        m[ 0 ] *= invScaleX;
        m[ 1 ] *= invScaleX;
        m[ 2 ] *= invScaleX;
        
        m[ 4 ] *= invScaleY;
        m[ 5 ] *= invScaleY;
        m[ 6 ] *= invScaleY;
        
        m[ 8 ] *= invScaleZ;
        m[ 9 ] *= invScaleZ;
        m[ 10 ] *= invScaleZ;

        // Rotation
        dest[ 22 ] = 0.0f;  // v x
        dest[ 23 ] = 0.0f;  // v y
        dest[ 24 ] = 0.0f;  // v z
        dest[ 25 ] = 0.0f;  // w

        float tr = m[ 0 ] + m[ 5 ] + m[ 10 ];

        if ( tr > 0 ) {
            float S = sqrtf( tr + 1.0f ) * 2.0f; // S=4*qw 
            dest[ 25 ] = 0.25f * S;
            dest[ 22 ] = ( m[ 9 ] - m[ 6 ] ) / S;
            dest[ 23 ] = ( m[ 2 ] - m[ 8 ] ) / S;
            dest[ 24 ] = ( m[ 4 ] - m[ 1 ] ) / S;
        } else if ( ( m[ 0 ] > m[ 5 ] ) & ( m[ 0 ] > m[ 10 ] ) ) {
            float S = sqrtf(1.0f + m[ 0 ] - m[ 5 ] - m[ 10 ]) * 2.0f; // S=4*qx 
            dest[ 25 ] = ( m[ 9 ] - m[ 6 ] ) / S;
            dest[ 22 ] = 0.25f * S;
            dest[ 23 ] = ( m[ 1 ] + m[ 4 ] ) / S;
            dest[ 24 ] = ( m[ 2 ] + m[ 8 ] ) / S;
        } else if ( m[ 5 ] > m[ 10 ] ) {
            float S = sqrtf( 1.0f + m[ 5 ] - m[ 0 ] - m[ 10 ] ) * 2.0f; // S=4*qy
            dest[ 25 ] = ( m[ 2 ] - m[ 8 ] ) / S;
            dest[ 22 ] = ( m[ 1 ] + m[ 4 ] ) / S;
            dest[ 23 ] = 0.25f * S;
            dest[ 24 ] = ( m[ 6 ] + m[ 9 ] ) / S;
        } else {
            float S = sqrtf( 1.0f + m[ 10 ] - m[ 0 ] - m[ 5 ] ) * 2.0f; // S=4*qz
            dest[ 25 ] = ( m[ 4 ] - m[ 1 ] ) / S;
            dest[ 22 ] = ( m[ 2 ] + m[ 8 ] ) / S;
            dest[ 23 ] = ( m[ 6 ] + m[ 9 ] ) / S;
            dest[ 24 ] = 0.25 * S;
        }        
    }

    void mathgasm_float4x4_mul( float* a, float* b, float* dest ) { // Outputs 16 floats
        dest[ 0 ]  = a[ 0 ] * b[ 0 ]  + a[ 4 ] * b[ 1 ]  + a[ 8 ]  * b[ 2 ]  + a[ 12 ] * b[ 3 ];
        dest[ 1 ]  = a[ 1 ] * b[ 0 ]  + a[ 5 ] * b[ 1 ]  + a[ 9 ]  * b[ 2 ]  + a[ 13 ] * b[ 3 ];
        dest[ 2 ]  = a[ 2 ] * b[ 0 ]  + a[ 6 ] * b[ 1 ]  + a[ 10 ] * b[ 2 ]  + a[ 14 ] * b[ 3 ];
        dest[ 3 ]  = a[ 3 ] * b[ 0 ]  + a[ 7 ] * b[ 1 ]  + a[ 11 ] * b[ 2 ]  + a[ 15 ] * b[ 3 ];
        dest[ 4 ]  = a[ 0 ] * b[ 4 ]  + a[ 4 ] * b[ 5 ]  + a[ 8 ]  * b[ 6 ]  + a[ 12 ] * b[ 7 ];
        dest[ 5 ]  = a[ 1 ] * b[ 4 ]  + a[ 5 ] * b[ 5 ]  + a[ 9 ]  * b[ 6 ]  + a[ 13 ] * b[ 7 ];
        dest[ 6 ]  = a[ 2 ] * b[ 4 ]  + a[ 6 ] * b[ 5 ]  + a[ 10 ] * b[ 6 ]  + a[ 14 ] * b[ 7 ];
        dest[ 7 ]  = a[ 3 ] * b[ 4 ]  + a[ 7 ] * b[ 5 ]  + a[ 11 ] * b[ 6 ]  + a[ 15 ] * b[ 7 ];
        dest[ 8 ]  = a[ 0 ] * b[ 8 ]  + a[ 4 ] * b[ 9 ]  + a[ 8 ]  * b[ 10 ] + a[ 12 ] * b[ 11 ];
        dest[ 9 ]  = a[ 1 ] * b[ 8 ]  + a[ 5 ] * b[ 9 ]  + a[ 9 ]  * b[ 10 ] + a[ 13 ] * b[ 11 ];
        dest[ 10 ] = a[ 2 ] * b[ 8 ]  + a[ 6 ] * b[ 9 ]  + a[ 10 ] * b[ 10 ] + a[ 14 ] * b[ 11 ];
        dest[ 11 ] = a[ 3 ] * b[ 8 ]  + a[ 7 ] * b[ 9 ]  + a[ 11 ] * b[ 10 ] + a[ 15 ] * b[ 11 ];
        dest[ 12 ] = a[ 0 ] * b[ 12 ] + a[ 4 ] * b[ 13 ] + a[ 8 ]  * b[ 14 ] + a[ 12 ] * b[ 15 ];
        dest[ 13 ] = a[ 1 ] * b[ 12 ] + a[ 5 ] * b[ 13 ] + a[ 9 ]  * b[ 14 ] + a[ 13 ] * b[ 15 ];
        dest[ 14 ] = a[ 2 ] * b[ 12 ] + a[ 6 ] * b[ 13 ] + a[ 10 ] * b[ 14 ] + a[ 14 ] * b[ 15 ];
        dest[ 15 ] = a[ 3 ] * b[ 12 ] + a[ 7 ] * b[ 13 ] + a[ 11 ] * b[ 14 ] + a[ 15 ] * b[ 15 ];
    }

    // - - - - - - - - - - quaternion (float4) - - - - - - - - - - - 
    void mathgasm_quaternion_mul_quat( float* q0, float* q1, float* dest ) {

        // result.w = this.w * q.w - this.axis.dot( q.axis );
        // result.axis = this.axis.mul( q.w ).add( q.axis.mul( this.w ) ).add( this.axis.cross( q.axis ) );
        // return result;

        dest[ 3 ] = q0[ 3 ] * q1[ 3 ] - ( q0[ 0 ] * q1[ 0 ] + q0[ 1 ] * q1[ 1 ] + q0[ 2 ] * q1[ 2 ] );          // w
        dest[ 0 ] = ( q0[ 0 ] * q1[ 3 ] ) + ( q1[ 0 ] * q0[ 3 ] ) + ( q0[ 1 ] * q1[ 2 ] - q0[ 2 ] * q1[ 1 ] );  // x
        dest[ 1 ] = ( q0[ 1 ] * q1[ 3 ] ) + ( q1[ 1 ] * q0[ 3 ] ) + ( q0[ 2 ] * q1[ 0 ] - q0[ 0 ] * q1[ 2 ] );  // y
        dest[ 2 ] = ( q0[ 2 ] * q1[ 3 ] ) + ( q1[ 2 ] * q0[ 3 ] ) + ( q0[ 0 ] * q1[ 1 ] - q0[ 1 ] * q1[ 0 ] );  // z
    }

    void mathgasm_quaternion_mul_vec( float* q, float* v, float* dest ) {
        float vcVX = q[ 1 ] * v[ 2 ] - q[ 2 ] * v[ 1 ];
        float vcVY = q[ 2 ] * v[ 0 ] - q[ 0 ] * v[ 2 ];
        float vcVZ = q[ 0 ] * v[ 1 ] - q[ 1 ] * v[ 0 ];

        float acVX = q[ 1 ] * vcVZ - q[ 2 ] * vcVY;
        float acVY = q[ 2 ] * vcVX - q[ 0 ] * vcVZ;
        float acVZ = q[ 0 ] * vcVY - q[ 1 ] * vcVX;

        dest[ 0 ] = v[ 0 ] + ( vcVX * 2.0f * q[ 3 ]) + acVX * 2.0f;
        dest[ 1 ] = v[ 1 ] + ( vcVY * 2.0f * q[ 3 ]) + acVY * 2.0f;
        dest[ 2 ] = v[ 2 ] + ( vcVZ * 2.0f * q[ 3 ]) + acVZ * 2.0f;	
    }

    void mathgasm_quaternion_slerp( float* q, float* r, float* dt, float* dest ) {
        float cosOmega = q[ 3 ] * r[ 3 ] + ( r[ 0 ] * q[ 0 ] + r[ 1 ] * q[ 1 ] + r[ 2 ] * q[ 2 ] );

        if (cosOmega < 0) {
            r[ 3 ] = -r[ 3 ];
            r[ 0 ] = -r[ 0 ];
            r[ 1 ] = -r[ 1 ];
            r[ 2 ] = -r[ 2 ];
            cosOmega = -cosOmega;
        }

        float k0, k1;
        if ( cosOmega > 0.9999f ){
            k0 = 1.0f - dt[ 0 ];
            k1 = dt[ 0 ];
        } else {
            float sinOmega = sqrtf( 1.0f - cosOmega * cosOmega );
            float omega = atan2f( sinOmega, cosOmega );
            float oneOverSinOmega = 1.0f / sinOmega;
            k0 = sinf( ( 1.0f - dt[ 0 ] ) * omega ) * oneOverSinOmega;
            k1 = sinf( dt[ 0 ] * omega ) * oneOverSinOmega;
        }

        // Interpolate
        dest[ 3 ] = q[ 3 ] * k0 + r[ 3 ] * k1;
        dest[ 0 ] = q[ 0 ] * k0 + r[ 0 ] * k1;
        dest[ 1 ] = q[ 1 ] * k0 + r[ 1 ] * k1;
        dest[ 2 ] = q[ 2 ] * k0 + r[ 2 ] * k1;
    }

    void mathgasm_quaternion_to_axis_angle( float* q, float* dest ) {
        float lengthSquared = q[ 0 ] * q[ 0 ] + q[ 1 ] * q[ 1 ] + q[ 2 ] * q[ 2 ];

        if ( lengthSquared < 0.0001f ) {
            dest[ 0 ] = 1.0f;
            dest[ 1 ] = 0.0f;
            dest[ 2 ] = 0.0f;
        } else {
            const float inverseLength = 1.0f / sqrtf( lengthSquared );
            dest[ 0 ] = q[ 0 ] * inverseLength;
            dest[ 1 ] = q[ 1 ] * inverseLength;
            dest[ 2 ] = q[ 2 ] * inverseLength;
        }

        dest[ 3 ] = ( acosf( q[ 3 ] ) * 2.0f) * ( 360.0f / ( 2.0f * 3.14159265359f ) );
    }

    void mathgasm_quaternion_normalize( float* q, float* dest ) {
        float length = 1.0f / sqrtf( q[ 0 ] * q[ 0 ] + q[ 1 ] * q[ 1 ] + q[ 2 ] * q[ 2 ] + q[ 3 ] * q[ 3 ] );
        dest[ 0 ] = q[ 0 ] * length;
        dest[ 1 ] = q[ 1 ] * length;
        dest[ 2 ] = q[ 2 ] * length;
        dest[ 3 ] = q[ 3 ] * length;
    }

    void mathgasm_quaternion_set_from_matrix( float* m, float* dest ) {
        // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
        // http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm

        float tr = m[ 0 ] + m[ 5 ] + m[ 10 ];

        if ( tr > 0.0f ) {
            float S = sqrtf( tr + 1.0f ) * 2.0f; // S=4*qx 
            dest[ 3 ] = 0.25f * S;
            dest[ 0 ] = ( m[ 9 ] - m[ 6 ] ) / S;
            dest[ 1 ] = ( m[ 2 ] - m[ 8 ] ) / S;
            dest[ 2 ] = ( m[ 4 ] - m[ 1 ] ) / S;
        } else if ( ( m[ 0 ] > m[ 5 ] ) & ( m[ 0 ] > m[ 10 ] ) ) {
            float S = sqrtf( 1.0f + m[ 0 ] - m[ 5 ] - m[ 10 ] ) * 2.0f; // S=4*qx 
            dest[ 3 ] = ( m[ 9 ] - m[ 6 ] ) / S;
            dest[ 0 ] = 0.25f * S;
            dest[ 1 ] = ( m[ 1 ] + m[ 4 ] ) / S;
            dest[ 2 ] = ( m[ 2 ] + m[ 8 ] ) / S;
        } else if (m[ 5 ] > m[ 10 ]) {
            float S = sqrtf( 1.0f + m[ 5 ] - m[ 0 ] - m[ 10 ] ) * 2.0f; // S=4*qy
            dest[ 3 ] = ( m[ 2 ] - m[ 8 ] ) / S;
            dest[ 0 ] = ( m[ 1 ] + m[ 4 ] ) / S;
            dest[ 1 ] = 0.25f * S;
            dest[ 2 ] = ( m[ 6 ] + m[ 9 ] ) / S;
        } else {
            float S = sqrtf( 1.0f + m[ 10 ] - m[ 0 ] - m[ 5 ] ) * 2.0f; // S=4*qz
            dest[ 3 ] = ( m[ 4 ] - m[ 1 ] ) / S;
            dest[ 0 ] = ( m[ 2 ] + m[ 8 ] ) / S;
            dest[ 1 ] = ( m[ 6 ] + m[ 9 ] ) / S;
            dest[ 2 ] = 0.25f * S;
        }
    }
}