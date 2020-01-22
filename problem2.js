function fiboEvenSum(n) {
    let x = 1
    let sum = 1
    let evenSum = 0

    for (let i = 0; i < n; i++) {
        let y = x
        x = sum + x
        sum = y

        if (sum % 2 == 0) {
            evenSum += sum
        }
    }

    return evenSum
}