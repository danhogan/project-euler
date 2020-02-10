function powerDigitSum(exponent) {
    let x = String(BigInt(Math.pow(2, exponent)))
    let xLength = x.length
    let sum = 0
    for (let i = 0; i < xLength; i++) {
        sum += parseInt(x[i])
    }
    return sum
}