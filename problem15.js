function latticePaths(gridSize) {
    let x = 1
    for (let i = 0; i < gridSize; ++i) {
        x = x * ((gridSize * 2) - i) / (i + 1)
    }
    return x
}