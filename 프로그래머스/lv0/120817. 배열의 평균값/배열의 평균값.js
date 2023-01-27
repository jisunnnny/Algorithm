function solution(numbers) {
    const sum = numbers.reduce((acc, cur) => acc + cur)
    const average = sum / numbers.length
    return average;
}