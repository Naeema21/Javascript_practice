getGreeting();
console.log(x);

var x = 7;

function getGreeting() {
    console.log('Namaste, JS');
}

var inputString = 'naeema';
var inputArray = [1, 2, 3, 4, 5, 6, 1, 2, 3];
const arr1 = [1, 0, 0, 0, 5, 0, 0, 7, 0, 0];


// 1. Reverse String 

const reverseString = (str) => {

    var reversedString = ''
    for (let index = str.length - 1; index >= 0; index--) {
        const element = str[index];
        reversedString += element
    }

    return reversedString
}

console.log('Reverse String:', reverseString(inputString), isPalindrome(inputString));

// 2. Is Palindrome 

function isPalindrome(string) {
    return string === reverseString(string);
}

// 3. Remove Duplicate Array 
const removeDuplicates = (array) => {
    var uniqueArr = [];
    var duplicateArr = []

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if (uniqueArr.indexOf(element) == -1) {
            uniqueArr.push(element)
        } else {
            duplicateArr.push(element)
        }

    }

    return { uniqueArr, duplicateArr };
}

console.log('removedupliacte', removeDuplicates(arr1))


// 4. Find Vowels in String

const findVowels = (str) => {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var count = 0;
    var appearedVowels = {};

    for (let index = 0; index < str.length; index++) {
        const element = str[index];

        if (vowels.includes(element)) {
            if (appearedVowels[element]) {
                appearedVowels[element]++

            } else {
                appearedVowels[element] = 1;
            }
            count++;
        }
    }

    return { count, appearedVowels };
}

console.log('Find Number of Vowels:', findVowels(inputString));

// 5. Max and Min Number 
const getMaxMinNumber = (arr) => {
    var max = arr[0];
    var min = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }

        if (min > arr[i]) {
            min = arr[i];
        }
    }

    return { max, min };
}

console.log('Max and Min Number:', getMaxMinNumber(inputArray));

// 6. Get Count of String 

const getCountOfString = (str) => {
    var count = {};
    var maxAppeared = '';
    var maxAppearedCount = 0;

    for (var i = 0; i < str.length; i++) {
        if (count[str[i]]) {
            count[str[i]]++;
        } else {
            count[str[i]] = 1;
        }
    }

    for (const key in count) {
        if (count[key] > maxAppearedCount) {
            maxAppeared = key;
            maxAppearedCount = count[key];
        }
    }

    return { count, maxAppeared, maxAppearedCount };
}

console.log('Get Count of String:', getCountOfString(inputString));

// 7. Factorial 

const factorial = (number) => {
    var factorialNumber = 1;
    for (var i = 1; i <= number; i++) {
        factorialNumber *= i;
    }

    return factorialNumber;
}

console.log('Factorial:', factorial(5));

let arr = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8, 9],
    [10, 11, 12, 13, 14, 15],
];
//output
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let conactArr = arr.reduce((acc, i) => acc.concat(i), []);

let conactArr2 = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        conactArr2.push(arr[i][j]);
    }
}
console.log(conactArr, conactArr2);


function countValues(arr) {
    var countMap = {};
    var maxAppearedCount = 0
    var maxAppearedKey = ''

    for (let i = 0; i < arr.length; i++) {
        const currentValue = arr[i];
        // If the value is not in the countMap, initialize it to 1
        if (countMap[currentValue]) {
            countMap[currentValue]++;
        } else {
            // If the value is already in the countMap, increment its count
            countMap[currentValue] = 1;
        }
    }


    for (const key in countMap) {
        if (countMap[key] > maxAppearedCount) {
            maxAppearedCount = countMap[key]
            maxAppearedKey = key
        }

    }

    return { countMap, maxAppearedCount, maxAppearedKey };
}

console.log('countValues', countValues(arr1))


//   shift zwroes 
const shiftZeros = (arr, dir) => {
    let arrayOfZero = [];
    let arrWithoutZero = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arrayOfZero.push(arr[i])
        } else {
            arrWithoutZero.push(arr[i]);
        }
    }

    if (dir === 'left') {
        return [...arrWithoutZero, ...arrayOfZero];
    } else if (dir === 'right') {
        return [...arrayOfZero, ...arrWithoutZero];
    } else {
        // Handle invalid direction
        console.error('Invalid direction. Use "left" or "right".');
        return arr;
    }
};

// Example

const shiftedLeft = shiftZeros(arr1, 'left');
console.log('Shifted Left:', shiftedLeft);

const shiftedRight = shiftZeros(arr1, 'right');
console.log('Shifted Right:', shiftedRight);



// group of books 

let friends = [
    {
        age: 21,
        name: 'abc',
        book: ['a', 'b', 'c']
    },
    {
        age: 21,
        name: 'xyz',
        book: ['d', 'e', 'f']
    },
    {
        age: 23,
        name: 'pqr',
        book: ['g', 'h', 'i']
    },
]

const collectBooks = () => {
    let books = []
    for (var i = 0; i < friends.length; i++) {
        books = [...books, ...friends[i].book]
    }

    return books;
}

console.log('collect books', collectBooks(friends))


// group by similar age 

const groupBySimiarAge = (array) => {
    var similarAgeArr = {}

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (similarAgeArr[element.age]) {
            similarAgeArr[element.age].push(element)
        } else {
            similarAgeArr[element.age] = [element]
        }
    }

    return similarAgeArr
}

console.log('group by similar age', groupBySimiarAge(friends))

// if book has same name and id then add price

const books = [
    { id: 1, name: 'Book A', price: 20 },
    { id: 2, name: 'Book B', price: 25 },
    { id: 1, name: 'Book A', price: 22 },
    { id: 3, name: 'Book C', price: 30 },
    { id: 2, name: 'Book B', price: 24 }
];


const addPrice = (array) => {
    var aggergateBooks = {}
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const key = `${element.id}_${element.name}`
        if (!aggergateBooks[key]) {
            aggergateBooks[key] = { id: element.id, name: element.name, price: element.price }
        } else {
            aggergateBooks[key].price += element.price
        }
    }

    return Object.values(aggergateBooks)
}

console.log('aggregatebooks', addPrice(books))

// find missing number

var numbers = [1, 2, 4, 5, 8, 9]

const findMissingNumber = (array) => {
    var missing = []
    for (let index = 0; index < array.length; index++) {
        var currentIndex = array[index]
        var nextIndex = array[index + 1]

        while (nextIndex - currentIndex > 1) {
            missing.push(++currentIndex)
        }
    }

    return missing
}

console.log('missing number from arry', findMissingNumber(numbers))

// reverse string store in array and remove duplicate 

const stringInArray = (string) => {
    var reversearray = []
    var uniqueArr = []

    for (let index = string.length - 1; index >= 0; index--) {
        const element = string[index];
        reversearray.push(element)
        if (!uniqueArr.includes(element)) {
            uniqueArr.push(element)
        }
    }

    return { reversearray, uniqueArr }
}

console.log('reverse string store in array and remove duplicate', stringInArray(inputString))


// given array of two element we have to check first element contain letters of all the seond element or not

const a = ['Mary', 'Army']
const b = ["apple", "banana"]

const checkWords = (array) => {


    var fword = array[0].toLowerCase();
    var sword = array[1].toLowerCase();

    for (var index = 0; index < sword.length; index++) {
        var element = sword[index];

        return fword.includes(element)
    }
}

console.log('check array contain ovwels or not', checkWords(a), checkWords(b))


const add = (x, y) => {
    if (!y) {
        return add2 = (y) => {
            return x + y;
        }
    } else {
        return x + y
    }
}

console.log(add(2)(3), add(2, 3))

// from string  sperate number and alphabhates


const sperateString = (string) => {
    var alphabhates = ''
    var number = ''
    for (let index = 0; index < string.length; index++) {
        const element = string[index];
        if (isNaN(element)) {
            alphabhates = alphabhates.concat(element)
        } else {
            number = number.concat(element)
        }
    }

    return { alphabhates, number }

}

console.log(sperateString('abc7d34gh8'))


// input  'abcdef'  '1234' output - a1b2c3d4ef


const mergeString = (string, number) => {
    var marge = ''
    const maxlength = string.length + number.length
    console.log(maxlength)

    for (let index = 0; index < maxlength; index++) {

        if (index < string.length) {
            marge = marge.concat(string[index])
        }

        if (index < number.length) {
            marge = marge.concat(number[index])
        }

    }

    return marge
}


console.log(mergeString('abcdef', '12345'))

var mergeAlternately = function (word1, word2) {
    let result = ''
    let maxlength = word1.length + word2.length
    for (let i = 0; i < maxlength; i++) {
        if (i < word1.length) {
            result = result.concat(word1[i])
        }

        if (i < word2.length) {
            result = result.concat(word2[i])
        }

    }
    return result

};

console.log(mergeAlternately('abc', 'pqr'))

