function solution(n) {
    var answer = 0;
    let count = 0;
    while(1){
        answer++

        while(1){
            if((answer+'').includes('3') || answer%3==0){
                answer++
                console.log('!!')
            }else{
                break
            }
        }

        count++
        if(count >= n){
            break
        }
    }
    return answer;
}