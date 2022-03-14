# Array Insert Shift
<!-- Description of the challenge -->
Write a function that takes an input array and a value. The function will return an array that has the value inserted at the middle index of the array, and the middle index rounded up if there are an odd number of index values.


## Whiteboard Process
<!-- Embedded whiteboard image -->
![whiteboard image](/javascript/code-challenges/array-insert-shift/array-insert-shift.png)
## Approach & Efficiency
<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->
I set the value of the Index I wanted to insert the value at by using a ternary operator to check if the length of the array was even. I then looped through the length of the array +1 to checking the value of i relative to the indexValue and performed the necesarry actions to build out the newArr appropriately. I believe the effiecency is O(n) because it loops through the array 1 time completely.