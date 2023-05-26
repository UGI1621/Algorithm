function solution(my_string) {
    var answer = my_string.split('').map(c => c.toLowerCase()).sort().join('');
    return answer;
}