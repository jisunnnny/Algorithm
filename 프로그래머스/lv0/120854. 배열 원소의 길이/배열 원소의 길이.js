function solution(strlist) {
    var strLengthArr = [];
    strlist.map((i) => strLengthArr.push(i.length))
    return strLengthArr;
}