function solution(my_string) {
    var answer = my_string.match(/\d+/g);
    if(answer !== null){
        answer = answer.map(c => Number(c)).reduce((a,b) => a+b,0)
    }else{
        answer = 0 
    }
    return answer;
}