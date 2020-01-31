function specialPythagoreanTriplet(n) {
    for (let c = 2; c < n; c++) {
        for (let b = 1; b < c; b++) {
            let a = n - b - c
            let py = (a ** 2 + b ** 2 == c ** 2)

            if (a + b + c == n && py) {
                return a * b * c
            }
        }
    }
}