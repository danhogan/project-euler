function sumSquareDifference(n) {
    let sumofSquares = 0
    let squareofSum = 0

    for (let i = 1; i <= n; i++) {
        sumofSquares += i ** 2
    }

    for (let x = 1; x <= n; x++) {
        squareofSum += x
    }
    squareofSum = squareofSum ** 2

    return squareofSum - sumofSquares
}