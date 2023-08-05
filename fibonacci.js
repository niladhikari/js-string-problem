// const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ]
/* 
    fibo[3] = fibo[2] + fibo[1]
    fibo[4] = fibo[3] + fibo[2]
    fibo[5] = fibo[4] + fibo[3]
    fibo[n] = fibo[n-1] + fibo[n-2]
    fibo[i] = fibo[i-1] + fibo[i-2]
*/

function fibonacciSeries(num) {
    let fibo = [0 , 1];
     for (let i = 2; i <= num; i++) {
         let element = fibo[i - 1] + fibo[i - 2];
         fibo.push(element);
     }
     return fibo;
}
const fibo = fibonacciSeries(5);
console.log(fibo);
