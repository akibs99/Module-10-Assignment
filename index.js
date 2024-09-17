function calculateDifference(a, b){
    return a - b;
}

console.log(calculateDifference(2, 2))

function isOdd(num){
    return num % 2 !== 0;

}

console.log(isOdd(3))

function findMin(arr){
    return Math.min(...arr);
}

console.log(findMin([-1, 4, 6, 3, 6]))

function filterEvenNumbers(arr){
    return arr.filter(num => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 3, 2, 7, 5, 4]))

function sortArrayDescending(arr){
    return arr.sort((a, b) => b - a);
}

console.log(sortArrayDescending([1, 3, -1, 0, 4, 2]))

function lowercaseFirstLetter(str){
    if(str.length === 0)
        return str;
    return str.charAt(0).toLowerCase() + str.slice(1);
}

console.log(lowercaseFirstLetter('Hello'))

function countVowels(str){
    const vowels = 'aeiouAEIOU';
    return Array.from(str).filter(char => vowels.includes(char)).length;
}

console.log(countVowels('Sojib'))

function findAverage(arr){
const sum = arr.reduce((acc, num) => acc + num, 0);
return sum / arr.length;

}

console.log(findAverage([1, 2, 3, 4]))