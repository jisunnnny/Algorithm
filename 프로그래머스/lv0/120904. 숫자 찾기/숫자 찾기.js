function solution(num, k) {
    numArr = num.toString().split("")
    
    if(numArr.indexOf(k.toString()) === -1) return -1
    
    return num.toString().split("").map((e) => Number(e)).indexOf(k)+1 || -1
}