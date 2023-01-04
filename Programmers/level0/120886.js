function solution(before, after) {
    var answer = 0;
    before = before.split('').sort()
    after = after.split('').sort()
    if(before.join('') == after.join('')){
        answer = 1;
    }else{
        answer = 0;
    }
    return answer;
}