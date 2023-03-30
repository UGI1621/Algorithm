function solution(dots) {
    const dot = dots.sort()
    const a = Math.abs(dot[3][0] - dot[1][0])
    const b = Math.abs(dot[3][1] - dot[2][1])
    var answer = a*b;
    return answer;
}