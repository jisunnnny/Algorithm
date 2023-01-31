function solution(d, budget) {
    const sortD = d.sort((a, b) => a - b)
    
    while(sortD.reduce((acc, cur) => acc + cur, 0) > budget) {
        sortD.pop()
    }
    
    return sortD.length
}