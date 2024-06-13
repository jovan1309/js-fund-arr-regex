function lastKNumbersSequence(n, k) {
    const result = [1];

    for (let i = 1; i < n; i++) {
        let lastK = result.slice(-k);
        let sum = 0;

        for (let num of lastK) {
            sum += num;
        }

        result.push(sum);
    }

    console.log(result.join(' '));
}

lastKNumbersSequence(6, 3);
// console.log('-----------------------------');
// lastKNumbersSequence(8, 2);
// console.log('-----------------------------');
// lastKNumbersSequence(9, 5);