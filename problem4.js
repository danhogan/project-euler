function largestPalindromeProduct(n) {
    let largest = 0
    let start = ''.padStart(n, '9')
    let end = '1'.padEnd(n, '0')

    for (let i = start; i >= end; i--) {
        for (let x = start; x >= end; x--) {
            let product = i * x
            let reversed = String(product).split('').reverse().join('')

            if ((product == reversed) && product > largest) {
                largest = product
                break;
            }
        }
    }

    return largest;
}