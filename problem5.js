function leastCommonMultiple(a, b) {
    return (a * b) / greatestCommonDivisor(a, b);
}

function greatestCommonDivisor(a, b) {
    if (b === 0) return a;
    return greatestCommonDivisor(b, a % b);
}

function smallestMult(n) {
    let x = 2;

    for (let i = 2; i <= n; i++) {
        x = leastCommonMultiple(x, i);
    }
    return x;
}