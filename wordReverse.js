function wordReverse(text) {
    let word = text.split(' ');
    let result = [];
    for(let i = word.length - 1; i>=0; i--){
        const element = word[i];
        result.push(element);
    }
    const reverse = result.join(' ')
    return reverse;
}

const str = 'i like the coding';
let reverseString = wordReverse(str);
console.log(reverseString);