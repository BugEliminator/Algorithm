function solution(a, b) {

    if(Number("" + a + b) > 2 * a * b ) {
        return Number("" + a + b)
    } else {
        return 2 * a * b
    }

}