function solution(common) {
    var answer = 0;
    const last = common[common.length-1]
    const befor_last = common[common.length-2]

    let step_1 = last - befor_last
    let step_2 = last/befor_last

    if(common[1] == common[0]+step_1){
        answer = last + step_1
    }else{
        answer = last * step_2
    }

    return answer;
}