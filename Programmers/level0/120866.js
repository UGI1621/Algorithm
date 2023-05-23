function solution(board) {
    var answer = 0;
    const length = board.length -1
    let boom = []
    // console.log(length)

    for(i in board){
            if(board[i].includes(1)){
                for(j in board[i]){
                    if(board[i][j] == 1){
                        boom.push([parseInt(i),parseInt(j)])
                    }
                }
            }
        }

    for(i of boom){
        if(isOver(i[0]-1) && isOver(i[1]-1))board[i[0]-1][i[1]-1] = 1
        if(isOver(i[0]-1) && isOver(i[1]))board[i[0]-1][i[1]] = 1
        if(isOver(i[0]-1) && isOver(i[1]+1))board[i[0]-1][i[1]+1] = 1
        if(isOver(i[0]) && isOver(i[1]-1))board[i[0]][i[1]-1] = 1
        if(isOver(i[0]) && isOver(i[1]+1))board[i[0]][i[1]+1] = 1
        if(isOver(i[0]+1) && isOver(i[1]-1))board[i[0]+1][i[1]-1] = 1
        if(isOver(i[0]+1) && isOver(i[1]))board[i[0]+1][i[1]] = 1
        if(isOver(i[0]+1) && isOver(i[1]+1))board[i[0]+1][i[1]+1] = 1
    }

    // console.log(boom)
    console.log(board)

    function isOver(a){
        if(a > length || a < 0){
            return false
        }else{
            return true
        }
    }

    for(i of board){
        for(j of i){
            if(j == 0){
                answer++
            }
        }
    }

    return answer;
}