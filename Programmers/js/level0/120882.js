function solution(score) {
    var answer = [];
    let count = 1;
    for(i = 0 ; i < score.length ; i++){
        for(j = 0 ; j < score.length ; j++){
            if((score[i][0]+score[i][1]) < (score[j][0]+score[j][1])){
                count++;
            }else if((score[i][0]+score[i][1]) == (score[j][0]+score[j][1])){
                continue;
            }
        }
        answer.push(count)
        count = 1;
    }
    return answer;
}

/*
function solution(score) {
  return score.map((el) => {
    return (
      score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
    );
  });
}
WA!
*/