function maxNumArray(max) {
    let maxNum = max[0];
    for (let i = 0; i < max.length; i++) {
        const element = max[i];
        if (element > maxNum) {
            maxNum = element;
        }
    }
    return maxNum;
}
const numbers =  [167, 190, 120, 165, 137, 265];
const maxNumber = maxNumArray(numbers);
console.log('Max Number Is:',maxNumber);