function largestPrimeFactor(number) {
    let largest = 0

    for (let i = 2; i <= number; i++) {
        if (number % i == 0) {
            largest = i
            number = number / i
        }
    }

    return largest
}