function duplicateNumber(number) {
    let uniqeId = [];     // stroge the uniqe value
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        let index = uniqeId.indexOf(element); // index postion check kora
        if (index === -1) {    //the index postion is -1 thats mine value is not in the array
            uniqeId.push(element);
        }
    }

    return uniqeId;
}
const numbers = [2,4,6,8,2,3,7,9,6,4,2,9];
let uniqeNumber = duplicateNumber(numbers);
console.log('Uniqe Numbers is:',uniqeNumber);