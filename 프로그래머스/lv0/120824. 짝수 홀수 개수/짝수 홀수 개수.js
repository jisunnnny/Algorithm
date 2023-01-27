function solution(num_list) {
    let odd = 0
    let even = 0
    
    num_list.map((n) => {
        if(n % 2 === 0) {
            even += 1
        } else {
            odd += 1
        }
    })
    return [even, odd];
}