function solution(array, n) {
    var answer = array.sort().reduce((a,b) => Math.abs(a - n) > Math.abs(b - n) ? b:a);
    return answer;
}