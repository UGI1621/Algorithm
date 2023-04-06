function solution(A, B) {
    var answer = 0;
    let Aarr = A.split('');
    let temp = [];
    
    for(let right = 1 ; right < A.length+1; right++){
        Aarr.unshift(Aarr.pop())
        temp.push(Aarr.join(''))
    }
    
    if(A == B){
        answer = 0
    }else{
        if(temp.indexOf(B)+1 == 0){
            answer = -1
        }else{
            answer = temp.indexOf(B)+1
        }
    }
    

    return answer;
}