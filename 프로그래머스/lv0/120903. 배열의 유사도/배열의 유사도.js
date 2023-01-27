function solution(s1, s2) {
    matchArr = []
    matchArr = s1.filter((i) => s2.includes(i))
    return matchArr.length;
}