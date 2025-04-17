function fibs(n) {
    let result = [];
    for (let index = 0; index < n; index++) {
        if (index == 0) {
            result.push(0);
        } else if (index == 1) {
            result.push(1);
        } else {
            result.push(result[index-1] + result [index-2]);
        }  
    }
    return result;
}

function fibsRec(n) {
    if (n <= 0) {
        return [0];
    } else if (n == 1) {
        return [0, 1];
    }else {
        let result = fib (n-1);
        return [...result, result[n-1] + result[n-2]];
    }
}

function fib(n) {
    if (n == 0) return [0]
    if (n == 1) return [0, 1]
    const arr = fib(n - 1)
    return [...arr, arr[n-1] + arr[n-2]]
}
  

console.log(fibsRec(7));