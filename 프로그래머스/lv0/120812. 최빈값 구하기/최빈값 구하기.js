function solution(array) {
    // 배열의 길이가 1인 경우
    if (array.length === 1) return array[0]
    if ([...new Set(array)].length === 1) return array[0]
    
    const countObj = {}
    const countArr = []
    
    array.forEach((n) => {
        if(!countObj[n]) {
            countObj[n] = 1
        }
        
        countObj[n] += 1
    })
    
    for (let key in countObj){
        countArr.push([key, countObj[key]])
    }
    
    countArr.sort((a, b) => b[1] - a[1])
    
    if(countArr[0][1] === countArr[1][1]) return -1

    return Number(countArr[0][0])
}