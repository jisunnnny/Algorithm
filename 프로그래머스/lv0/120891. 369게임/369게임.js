function solution(order) {
    let count = 0
    order.toString().split("").map((v) => {
      if(v === "3" || v === "6" || v === "9") {
          count++
      }
    })
    
    return count
}