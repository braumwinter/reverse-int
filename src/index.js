module.exports = function reverse (n) {
    if(n < 0){
        n = -n;
    }
    let str_temp = String(n);
    let arr = str_temp.split('').reverse();

    if(arr[0] === 0){
        arr.shift();
    }

    let str = arr.join('');

    return Number(str);
}
