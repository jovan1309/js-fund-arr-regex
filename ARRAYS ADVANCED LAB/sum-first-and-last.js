function sumFirstAndLast(arr) {
    if (arr.length === 1) {
        console.log(Number(arr[0]) + (arr[0]));
        return;
    }

    const firstNum = Number(arr.shift());
    const lastNum = Number(arr.pop())

    console.log(firstNum + lastNum);
}

sumFirstAndLast(['5']);
sumFirstAndLast(['5', '10']);
sumFirstAndLast(['20', '30', '40']);