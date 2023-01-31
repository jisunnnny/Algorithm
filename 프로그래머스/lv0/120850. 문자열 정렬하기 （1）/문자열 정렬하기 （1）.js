function solution(my_string) {
    var answer = [];
   
    return  [...my_string].filter(e => e % 1 === 0).map((e) => Number(e)).sort((a, b) => Number(a) - Number(b));
}