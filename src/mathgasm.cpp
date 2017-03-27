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
        dest[ 0 ] = sqrt( a[ 0 ] * a[ 0 ] + a[ 1 ] * a[ 1 ] );
    }

    void mathgasm_float2_dot( float* a, float* b, float* dest ) {
        dest[ 0 ] = a[ 0 ] * b[ 0 ] + a[ 1 ] * b[ 1 ];
    }

    void mathgasm_float2_normalize( float* a, float* dest ) {
        const float inverseLength = 1.0f / sqrt( a[ 0 ] * a[ 0 ] + a[ 1 ] * a[ 1 ] );
        dest[ 0 ] = a[ 0 ] * inverseLength;
        dest[ 1 ] = a[ 1 ] * inverseLength;
    }

    void mathgasm_float2_lerp( float* a, float* b, float* dt, float* dest ) {
        dest[ 0 ] = a[ 0 ] + ( b[ 0 ] - a[ 0 ] ) * dt[ 0 ];
        dest[ 1 ] = a[ 1 ] + ( b[ 1 ] - a[ 1 ] ) * dt[ 1 ];
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
        dest[ 0 ] = sqrt( a[ 0 ] * a[ 0 ] + a[ 1 ] * a[ 1 ] + a[ 2 ] * a[ 2 ] );
    }

    void mathgasm_float3_dot( float* a, float* b, float* dest ) {
        dest[ 0 ] = a[ 0 ] * b[ 0 ] + a[ 1 ] * b[ 1 ] + a[ 2 ] * b[ 2 ];
    }

    void mathgasm_float3_normalize( float* a, float* dest ) {
        const float inverseLength = 1.0f / sqrt( a[ 0 ] * a[ 0 ] + a[ 1 ] * a[ 1 ] + a[ 2 ] * a[ 2 ] );
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


     // - - - - - - - - - - float4x4 - - - - - - - - - - - 
     void mathgasm_float4x4_mul( float* a, float* b, float* dest ) {
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
}