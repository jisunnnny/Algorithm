function solution(my_string, num1, num2) {
    let arr = [...my_string]
    let a = arr[num1]
    let b = arr[num2]
    
    arr[num1] = b
    arr[num2] = a
 
    return arr.join("");
}