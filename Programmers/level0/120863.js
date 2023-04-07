function solution(polynomial) {
    var answer = '';
    let items = polynomial.split(" + ") // ' + ' 제거
    let x = []  // x계수
    let y = []  // 상수

    for(i of items){
        if(i.includes('x')){
            i = i.replace('x','')
            if( i == ''){
                i = 1
            }
            x.push(parseInt(i))     // x계수 수집
        }else{
            y.push(parseInt(i))     // 상수 수집
        }
    }

    x = x.reduce((a = 0,b = 0) => a+b , 0)  // x 계수 합    

    if(x == 1){     // 계수가 1이면 x
        x = 'x'
    }else if(x > 1){
        x = x+'x'   // 계수가 1보다 크면 '계수x'
    }

    y = y.reduce((a = 0,b = 0) => a+b , 0)  // 상수 합

    if(x == 0){
        answer += y // 계수가 0 이면 상수만 넣어라
    }else{
        if(y == 0){
            answer += x
        }else{
            answer += x + ' + '+ y  // answer += "계수x + 상수"
        }
    }

    console.log(x)
    console.log(y)

    return answer;
}