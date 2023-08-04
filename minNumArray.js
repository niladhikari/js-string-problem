function minNumArray(min) {
    let minNum = min[0];
    for (let i = 0; i < min.length; i++) {
        const element = min[i];
        if (element < minNum) {
            minNum = element;
        }
    }
    return minNum;
}
const numbers =  [167, 190, 120, 165, 137, 265,33,644,7,88];
const minNumber = minNumArray(numbers);
console.log('Min Number Is:',minNumber);