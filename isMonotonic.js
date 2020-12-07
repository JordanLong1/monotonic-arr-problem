function isMonotonic(array) {
  

  if (array.length === 0) {
    return true;
  }

  let isIncreasing = false;
  let isDecreasing = false;

  // step#2: for loop, loop thru every element of the array
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      isDecreasing = true;
    }
    if (array[i] < array[i + 1]) {
      isIncreasing = true;
    }
    if (isDecreasing && isIncreasing) {
      return false;
    }
  }
  return true;
}

//time is linear because even if the size of the array doubles, we still have to traverse it once. 

// space is constance because we arent storing anything extra. just isIncreasing and isDecreasing