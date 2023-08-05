function wordReverse(text) {
    let word = text.split(' '); // Separate the word  and give the output
    let result = [];   // stroge the word
    for(let i = word.length - 1; i>=0; i--){
        const element = word[i];
        result.push(element);
    }
    const reverse = result.join(' ') // Separate the word value add there in line.
    return reverse;
}

const str = 'i like the coding';
let reverseString = wordReverse(str);
console.log(reverseString);