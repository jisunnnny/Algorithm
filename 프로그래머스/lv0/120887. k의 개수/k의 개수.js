function solution(i, j, k) {
    const rangeStr = [...Array(j+1)].map((v,i) => i).filter((e) => e >= i).join("")
    
    const regexAll = new RegExp(k, "g");
    const replaceStr = rangeStr.replace(regexAll, "")
    
    return rangeStr.length - replaceStr.length
}