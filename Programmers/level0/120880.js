function solution(numlist, n) {
    var answer = [];
    numlist = numlist.map(c => [c,c-n])

    for(i in numlist){
        numlist[i][1] = Math.abs(numlist[i][1])
    }

    numlist = numlist.sort((a,b) => {
        if (a[1] === b[1]) {
            return b[0] - a[0]
        } else {
            return a[1] - b[1]
        }
    })

    for(i in numlist){
        answer.push(numlist[i][0])
    }
    return answer;
}