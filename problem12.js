function divisibleTriangleNumber(n) {
    function triangleNum(z) {
        let sum = 0
        for (let q = 0; q <= z; q++) {
            sum += q
        }
        return sum
    }

    function factors(w) {
        let i = 1
        let max = w
        let factorsArray = []

        while (i < max) {
            if (w % i == 0) {
                factorsArray.push(i)

                if (i != w / i) {
                    factorsArray.push(w / i)
                }

                max = w / i
            }

            i++
        }

        return factorsArray.sort(function (a, b) { return a - b })
    }

    let x = 1
    while (factors(triangleNum(x)).length <= n) {
        x++
    }

    return triangleNum(x)
}

console.log(divisibleTriangleNumber(5));