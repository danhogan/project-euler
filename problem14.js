function longestCollatzSequence(limit) {
    let answer;
    let longest = 0;

    for (let i = 1; i < limit; i += 2) {
        let x = i
        let counter = 0

        while (x > 1) {
            if (x % 2 == 0) {
                x = x / 2
            } else {
                x = (3 * x) + 1
            }

            counter++
        }

        if (counter > longest) {
            longest = counter
            answer = i
        }
    }

    return answer
}

console.log(longestCollatzSequence(46500));
