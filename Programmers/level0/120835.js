function solution(emergency) {
    const sorted = emergency.slice().sort((a,b)=>b-a);
    const answer = emergency.map(v=>sorted.indexOf(v)+1);
    return answer
}