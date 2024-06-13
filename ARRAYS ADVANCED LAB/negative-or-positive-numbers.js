function negativeOrPositiveNumbers(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (element >= 0) {
            result.push(element);
        } else {
            result.unshift(element);
        }
    
        
    }

    console.log(result.join('\n'));
}

negativeOrPositiveNumbers([7, -2, 8, 9]);
console.log('-----------');
negativeOrPositiveNumbers([3, -2, 0, -1]);
console.log('-----------');
negativeOrPositiveNumbers([-3, 2, -1, 0]);