function solution(n) {
    let answer = 1
    
    if(n === 0) return 0
    
    for(let i=1; i<=10; i++) {
        answer *= i
        
        if(answer === n) return i
        
        if(answer > n) return i-1
    }
    
}