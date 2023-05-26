function solution(quiz) {
    var answer = [];
    let temp = [];

    let qarr = quiz.map(c => c.split("=")[0])
    console.log(qarr)

    let aarr = quiz.map(c => c.split("=")[1].replaceAll(" " , ""))
    console.log(aarr)

    for(i in aarr){
        if(qarr[i].includes(' - ')){
            let Q = qarr[i].split(' - ')
            if(parseInt(Q[0]) - parseInt(Q[1]) == aarr[i]){
                answer.push("O")
            }else{
                answer.push("X")
            }
        }else{
            let Q = qarr[i].split(' + ')
            if(parseInt(Q[0]) + parseInt(Q[1]) == aarr[i]){
                answer.push("O")
            }else{
                answer.push("X")
            }
        }
    }

    return answer;
}