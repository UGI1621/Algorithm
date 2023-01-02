function solution(my_string) {
    const str = my_string.split('')
    const set = new Set(str)
    const answer = [...set].join('')
    return answer;
}