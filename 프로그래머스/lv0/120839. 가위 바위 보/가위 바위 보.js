function solution(rsp) {
    let answer = '';
    // 가위2 바위0 보5
    [...rsp].map((e) => {
        if(e === "2") {
            answer += "0"
        } else if (e === "0") {
            answer += "5"
        } else {
            answer += "2"
        }
    })
   
    return answer;
}