

# Notes Taking:

- An empty array is monotonic
- An array of one element is monotonic
- Consecutive numbers can be equal and still be monotonic
- An array of all the same numbers would be monotonic
- Directions can go up or down, but not both up and down in the same array


We need to loop over the entire array, and determine whether the array is increasing or decreasing.

Inside our loop, we need to determine which direction the array is potentially going. We should keep track of whether or not the direction of the array values are not changing by storing the difference in valuesof the previous & next array elements.


array[i + 1]-array[i] = increasing or decreasing
or
array[i] >= array[i + 1] = decreasing

let isIncreasing = bool
let isDecreasing = bool

if number is increasing then change isIncreasing to true

watch to make sure isIncreasing is = true on each pass

If loop ends and isIncreasing is still true,return true, else return false

Same goes for isDecreasing

# Sample Input:

array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]

# Sugguestions to improve for next meeting
