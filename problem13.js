function largeSum(arr) {
    let l = arr.length
    let sum = 0

    for (let i = 0; i < l; i++) {
        sum += parseInt(arr[i])
    }

    return parseInt(sum.toPrecision(100).substring(0, 10))
}