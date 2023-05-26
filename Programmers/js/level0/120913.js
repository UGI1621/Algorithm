function solution(my_str, n) {
    var answer = [];
    const str = my_str.split('')
    let temp = [];
    for(i of str){
        temp.push(i)
        if(temp.length == n){
            answer.push(temp.join(''))
            temp = []
        }
    }
    if(temp.length !== 0){
        answer.push(temp.join(''))
    }

    return answer;
}
