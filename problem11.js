function largestGridProduct(arr) {
    let largest = 0
    let max = arr.length - 3
    let otherMax = arr.length

    for (let a = 0; a < max; a++) {
        for (let b = 0; b < max; b++) {
            let vertical = arr[b][a] * arr[b + 1][a] * arr[b + 2][a] * arr[b + 3][a]
            if (vertical > largest) {
                largest = vertical
            }

            let horizontal = arr[b][a] * arr[b][a + 1] * arr[b][a + 2] * arr[b][a + 3]
            if (horizontal > largest) {
                largest = horizontal
            }

            let diagonal1 = arr[b][a] * arr[b + 1][a + 1] * arr[b + 2][a + 2] * arr[b + 3][a + 3]
            if (diagonal1 > largest) {
                largest = diagonal1
            }

            let diagonal2 = arr[b][otherMax - a] * arr[b + 1][otherMax - a - 1] * arr[b + 2][otherMax - a - 2] * arr[b + 3][otherMax - a - 3]
            if (diagonal2 > largest) {
                largest = diagonal2
            }
        }
    }

    return largest
}