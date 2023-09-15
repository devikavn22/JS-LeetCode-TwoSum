function twoSum(arr, targetSum) {
  let hashMap = {};

  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];

    if (hashMap[targetSum - currentValue] !== undefined) {
      return [hashMap[targetSum - currentValue], i];
    }

    hashMap[currentValue] = i;
  }
  return [];
}

const arr = [2, 7, 11, 15];
const pairOfIndices = twoSum(arr, 9);
console.log(pairOfIndices); // [0,1]
