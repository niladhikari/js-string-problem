function stringReverse(str) {
    let reversed = ''; // stroge the string value
    for(let i = str.length-1; i >= 0; i--){
        const element = str[i];
        reversed = reversed + element; // i er value gula ke reversed er value er shate add jore stroge kora.
        // console.log(element, reversed);
    }
    return reversed;
}
const str = 'i like the coding';
let reverseString = stringReverse(str);
console.log(reverseString);