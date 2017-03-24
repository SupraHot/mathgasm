#include <stdio.h>
#include <stdlib.h>

extern "C" {
    struct v3{
        int a[3];
    };

    int int_square( int i ) {
        return i * i;
    }

    unsigned int* ejaculate( int a, int* b ) {
        unsigned int* s = (unsigned int*)malloc( 8 );
        s[0] = 1;
        s[1] = 2;
        return s;
    }
}

extern "C" {
    int func(int *, int);
}

int func(int arr[], int num){
    int res = 0;
    for (int i = 0; i < num; i++) {
        res += arr[i];
    }
    return res;
}