const firstName = 'BlackPink';
const secondName = 'blackpinK';
//there both name have small and capital latter .so name same but char ar not same.so we use the toLowerCase() function.This function convate the all char in small char.
if (firstName.toLowerCase() === secondName.toLowerCase()) {
    console.log('user is valid');
}
else{
    console.log('user is Invalid');
}