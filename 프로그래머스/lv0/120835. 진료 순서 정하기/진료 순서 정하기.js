function solution(emergency) {
    let answer = [];
    let sort = [...emergency].sort((a, b) => b - a)
    emergency.map((v, i) => answer.push(sort.indexOf(v) + 1))
    
    return answer;
}