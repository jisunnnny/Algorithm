function solution(my_string, n) {
    const strArr = my_string.split("")
    const result = (strArr.map((str) => str.repeat(n))).join("")
    
    return result;
}