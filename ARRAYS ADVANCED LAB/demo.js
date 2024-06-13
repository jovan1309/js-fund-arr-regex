function doubleNumber(x) {
    console.log(x * 2);
}

doubleNumber(5);
doubleNumber(55);

function test(param1, param2) {
    if (param1 === undefined || param2 === undefined) {
        console.log("Bad params!");
    } else {
        console.log(param1 + param2);
    }
}

test(5, 10);

function subtractPlease(x, y) {
    return x - y;
}

function solve(a, b, c, d, e, f, g, h) {
    const sum1 = subtractPlease(a, b);
    const sum2 = subtractPlease(c, d);
    const sum3 = subtractPlease(e, f);
    const sum4 = subtractPlease(g, h);

    const result = sum1 / sum2 / sum3 / sum4;
    console.log(result);
}

solve(2, 3, 4, 5, 6, 7, 8, 9);

function print1(text) {
    console.log(text);
}

print1('Text from Function Declaration');

const print2 = function (text) {
    console.log(text);
}

print2('Text from Function Expression');

function myRecursion(x) {
    let y = x * 2;

    if (y < 100) {
        console.log(y);
        myRecursion(y);
    }
}

myRecursion(5);

let x = 1;

while (x < 100) {
    console.log(x);
    x += 1;
}

let a = 5;
function double() {
    a *= 2;
}

double();

function print() {
    console.log('Prin Me', a);
}

print();

function sum(a, b) {
    console.log(a + b);
    return a + b;
}

let result = sum(5, 2);
console.log('Result:', result);

function getBiggerNumber(a, b) {
    if (a >= b) {
        return a;
    }

    return b;
}

const result = (getBiggerNumber(5, 15) * 2) ** 2;
console.log(result);

function doubleEvenNumber(number) {
    if (number % 2 === 0) {
        return number * 2;
    }

    return number;
}

function solve(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        result.push(doubleEvenNumber(num));
    }

    console.log(result);
}

solve([1, 2, 3, 4]);

const increment = x => x + 1;
const incrementByNumber = (x, y) => x + y;

// console.log(increment(5));
console.log(incrementByNumber(5, 2));

function characters(character) {
    function checkIfChar(char1) {
        if (char1.length >= 3 && char1.length <= 7) {
            return true;
        } else {
            console.log('Characters must be between 3 and 7');
            return false;
        }
    }

    function checkIfAlphanum(char1) {
        const pattern = /^[A-Za-z0-9]+$/
    
        if (pattern.test(char1)) {
            return true;
        } else {
            console.log('Disabled if is over 7 characters');
            return false;
        }  
    }

    function checkDigits(char1) {
        const pattern = /[0-9]{2,}/;

        if (pattern.test(char1)) {
            return true;
        } else {
            console.log('Password must have any kind of digit');
        }
    }

    const isChar = checkIfChar(character);
    const isAlphanum = checkIfAlphanum(character);
    const hasAnyDigit = checkDigits(character);

    if (isChar && isAlphanum && hasAnyDigit) {
        console.log('Success! Characters are valid between 3 and 7');
    }
}

// characters('goIn');
// characters('3-7');
characters('Disabled');

const arr = [2, 55, 6, 109, 18];

const indexOfValue = arr.indexOf(44);

if (indexOfValue !== -1) {
    console.log('Our number exist at index:', indexOfValue);
} else {
    console.log('Number does not exist in array!');
}

console.log(arr);

arr.push(999, 0, -1);
console.log(arr);

const lastElement = arr.pop()
console.log('Last Element', lastElement);

arr.unshift(1000, 44, 505)
console.log(arr);

const firstElement = arr.shift()
console.log('First Element', firstElement);

const arr = [];

for (let i = 0; i < 100; i++) {
    arr.push(i + 1);
}

console.log(arr);

console.log('------------------');

for (let i = 0; i < 50; i++) {
    arr.shift()
}

console.log(arr);

const arr = [1, 2, 3, 4];
const clonedArray = arr.slice(2);
console.log('Original Array', arr);
console.log('Cloned Array', clonedArray);

const nums = [5, 10, 15, 20, 25, 30];
console.log('Original Nums Array', nums);
const splicedArray = nums.splice(1, 4);
console.log('Spliced Array', splicedArray);
console.log('The Original Array Again', nums);

function myMap(array, callBackFn) {
    const output = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const result = callBackFn(element, i);
        output.push(result);
    }

    return output;
}

const x = myMap(['2', '3', '4', '21'], (e, index) => {
    if (index % 2 === 0) {
        return e * 10;
    }

    return e;
});
console.log(x);

const arr = [1, 2, 13, 11, -7, 77, 19];
console.log(arr);
const sorted = arr.sort((a, b) => {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
});

console.log(sorted);
