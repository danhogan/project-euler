let primes = []

function isPrime(x) {
    for (let z = 0; primes[z] <= Math.sqrt(x); z++) {
        if (x % primes[z] === 0) {
            return false
        }
    }

    return true
}

function nthPrime(n) {
    let primeCounter = 1 //skip 2
    let y = 3

    while (primes.length < n) {
        if (isPrime(y)) {
            primes.push(y)
            primeCounter++
        }

        if (primeCounter == n) {
            return y
        } else {
            y +=2
        }
    }
}