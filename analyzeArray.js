function analyzeArray(array) {
    let sum = 0;
    let average;
    
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    average = sum / array.length;

    array.sort((a, b) => a - b);
    const min = array[0];

    array.sort((a, b) => b - a);
    const max = array[0]; 

    const length = array.length;

    return {
        Average: average,
        Min: min,
        Max: max,
        Length: length
    }
}

module.exports = analyzeArray;