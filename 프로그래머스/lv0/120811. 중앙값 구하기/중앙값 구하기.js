function solution(array) {
    let sortArray = array.sort((a, b) => a - b)
    let midIndex = parseInt(sortArray.length / 2)
    return sortArray[midIndex];
}