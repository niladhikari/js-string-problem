//using for loop and if else
// function findSecondLargest(numbers) {
//     let largest =[0];
//     let secondLargest = [1];
  
//     for (let num of numbers) {
//       if (num > largest) {
//         secondLargest = largest;
//         largest = num;
//       } else if (num > secondLargest && num < largest) {
//         secondLargest = num;
//       }
//     }
  
//     return secondLargest;
//   }
  
  let numbersArray = [10, 17, 8, 2, 18, 23];
  let secondLargestNumber = findSecondLargest(numbersArray);
  console.log("Second Largest Number:", secondLargestNumber);

  // short cut for the second learge number
  function findSecondLargest(numbers) {
    // Sort the array in descending order
    numbers.sort(function(a, b) {
      return b - a;
    });
  
    // The second largest number will be at index 1
    return numbers[1];
  }