function findAverage(number) {
    let sum  = 0;
    let average;
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        sum = sum + element
    }
    average = sum / number.length;
    return average;
}

const number = [10,12,22,33,2,4];
var arrayAverage = findAverage(number);
console.log(arrayAverage);