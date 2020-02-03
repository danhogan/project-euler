function primeSummation(n) {
    const upperBound = Math.ceil(Math.sqrt(n));
    let nums = [...Array(n).keys()]

    nums[1] = 0;

    for (let i = 2; i <= upperBound; i++) {
        if (nums[i] !== 0) {
            for (let j = i * i; j < n; j += i) {
                if (nums[j] % i == 0) {
                    nums[j] = 0;
                }
            }
        }
    }

    return nums.slice(0, n).reduce((a, b) => a + b, 0);
}