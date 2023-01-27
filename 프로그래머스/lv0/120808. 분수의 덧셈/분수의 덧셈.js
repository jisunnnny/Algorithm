function solution(numer1, denom1, numer2, denom2) {
    // 분자 구하기
    let numerNum = numer1 * denom2 + numer2 * denom1
    // 분모 구하기
    let denomNum = denom1 * denom2
    // 최소 공배수 구하기
    let lcm = 1
    
    for (let i = 1; i <= numerNum; i++) {
        if(numerNum % i === 0 && denomNum % i === 0) {
            lcm = i
        }
    }
    return [numerNum/lcm, denomNum/lcm];
}