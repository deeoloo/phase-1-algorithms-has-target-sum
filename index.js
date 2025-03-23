function hasTargetSum(array, target) {
  // Write your algorithm here
  for(i = 0; i < array.length; i++){
    for(j = i + 1; j < array.length; j++){
  if(array[i] + array[j] === target){
    return true
  }
    }
  }
    return false
}

/* 
  Write the Big O time complexity of your function here
  0(n)
*/

/* 
  Add your pseudocode here
   The function should return true if any two distinct numbers 
   in the array add up to the target integer. 
   If no such pair exists, the function should return false.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
