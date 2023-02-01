function solution(array, n) {
    let arr = [...array, n].sort((a, b) => Number(a) - b)
    let num = arr.indexOf(n)
    let leftNum = arr[num-1] || 0
    let rightNum = arr[num+1] || 0
    let leftResult = Math.abs(leftNum - n)
    let rightResult = Math.abs(rightNum - n)
    
    return (leftResult <= rightResult)? leftNum : rightNum
}