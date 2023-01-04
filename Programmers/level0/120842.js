function solution(num_list, n) {
    var answer = [];
    let cep = [];
    let j = 0;

    let time = num_list.length/n;

    for(time ; time > 0 ; time--){
        for(let i = n ; i >= 1 ; i--){
            cep.push(num_list[j])
            j += 1
        }
        answer.push(cep)
        cep = []
    }

    return answer
}