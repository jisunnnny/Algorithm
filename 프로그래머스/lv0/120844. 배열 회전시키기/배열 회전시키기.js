function solution(numbers, direction) {
    let start = numbers[0]
    let end = numbers[numbers.length - 1]
    
    if(direction === "right") {
        numbers.pop()
        numbers.unshift(end)
        
        return numbers
    }
    
    numbers.shift()
    numbers.push(start)
    
    return numbers;
}