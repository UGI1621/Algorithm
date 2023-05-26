function solution(array) {
    var answer = 0;
    const arr = array.join("").split("")
    for(i of arr){
        if(i == '7'){
            answer++;
        }
    }
    return answer;
}