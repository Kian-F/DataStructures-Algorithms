// In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.

// Each order is represented by an "order id" (an integer).

// We have our lists of orders sorted numerically
//  already, in arrays. Write a function to merge our arrays of orders into one sorted array.

// For example:

//   const myArray = [3, 4, 6, 10, 11, 15];
// const alicesArray = [1, 5, 8, 12, 14, 19];

// console.log(mergeArrays(myArray, alicesArray));
// // logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

function mergeArrays(myArray, alicesArray) {

    const mergedArray = [];
  
    const headOfMyArray = myArray[0];
    const headOfAlicesArray = alicesArray[0];
  
    // Case: 0th comes from my array
    if (headOfMyArray < headOfAlicesArray) {
      mergedArray[0] = headOfMyArray;
  
      // Case: 0th comes from Alice's array
    } else {
      mergedArray[0] = headOfAlicesArray;
    }
  
    // Eventually we'll want to return the merged array
    return mergedArray;
  }