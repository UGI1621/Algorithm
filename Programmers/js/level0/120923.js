function solution(num, total) {
    var answer = [];
    const mid = total/num
    let i = 1

    if(num == 1){
        return [total]
    }

    if(Number.isInteger(mid)){
        answer.push(mid)
        while(1){
            answer.push(mid+i)
            answer.push(mid-i)
            if(answer.length == num){
                break
            }
            i++
        }
        i = 0
        return answer = answer.sort((a,b) => a-b)

    }else{
        answer.push(parseInt(mid))
        while(1){
            answer.push(parseInt(mid)+i)
            answer.push(parseInt(mid)-i)
            if(answer.length > num){
                break
            }
            i++
        }
        answer = answer.sort((a,b) => a-b)
        answer.shift()
        return answer
    }
}