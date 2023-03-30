function solution(id_pw, db) {
    var answer = '';
    for(i in db){
        if(id_pw[0] == db[i][0]){
            if(id_pw[1] == db[i][1]){
                answer = 'login'
            }else{
                answer = 'wrong pw'
                break
            }
        }else{
            answer = 'fail'
        }
    }
    return answer;
}


/*
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}

Map.has(key) => key랑 같은게 map에 있는가 ?
    true 라면
        map.get(id) => id-pw로 연결된 map에 get(id) == pw 인게 있는가?
            
            true 라면
                login
            
            false 라면
                wrong pw
    
    false 라면
        fail
*/