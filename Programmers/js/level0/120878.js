function solution(a, b) {
    return ((a/b)+"").length >= 16 ? 2 : 1;
}

/*
function solution(a, b) {
    let tmpB = b
    while (tmpB % 2 === 0) tmpB /= 2
    while (tmpB % 5 === 0) tmpB /= 5
    if (a % tmpB === 0) tmpB = 1
    return tmpB === 1 ? 1 : 2
}

이게 맞는듯 함.
*/