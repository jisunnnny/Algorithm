function solution(numbers) {
    let answer = 0;
    let max = 0;
    let negativeArr = numbers.filter((num) => num < 0).sort((a, b) => a - b)
    let positive = numbers.filter((num) => num > 0).sort((a, b) => b - a)
    
    // 배열에 0이 있는 경우
    if(numbers.find(v => v === 0)) return 0
    
    if(numbers.length === 2) return numbers[0] * numbers[1]
    
    // 음수가 두개 이상인 경우
    if(negativeArr.length > 1) {
        answer = negativeArr[0] * negativeArr[1]
    }
    
    max = positive[0] * positive[1]
    
    if(max > answer) {
        answer = max
    }
    
    return answer;
}