#include <stdio.h>
#include <stdlib.h>

extern "C" {
    struct v3{
        int a[3];
    };

    int int_square( int i ) {
        return i * i;
    }

    void ejaculate( int a, float* b ) {
        b[0] = 77.7f;
        b[1] = 333.03f;
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