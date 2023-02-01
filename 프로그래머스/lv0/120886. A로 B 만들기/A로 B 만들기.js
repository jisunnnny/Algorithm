function solution(before, after) {
    before = [...before].sort().join("")
    after = [...after].sort().join("")
    
    if(after.includes(before)) return 1
    
    return 0;
}