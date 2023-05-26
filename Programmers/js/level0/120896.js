function solution(s) {
    var answer = [];
    let arr = s.split('').sort()
    const getElCount = (arr) => arr.reduce((ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 1 }), {});
    const count = getElCount(arr)
    
    for(i in count){
        if(count[i] <= 1){
            answer.push(i)
        }
    }
    
    return answer.join("");
}

/*

function solution(s) {
    let res = [];
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
    return res.sort().join('');
}

*/