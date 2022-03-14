# Reverse an Array
<!-- Description of the challenge -->
Write a function that takes an input array and returns an array with the values reversed.


## Whiteboard Process
<!-- Embedded whiteboard image -->
![whiteboard image](/javascript/code-challenges/array-reverse/array-reverse.png)
## Approach & Efficiency
<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->
I used unshift as I looped through the array to insert the value of the current index into index 0 of a new array. This way by the end of looping through the array I would have a new array completely reversed. Then I output the new array. This seemed like a pretty straight forward way to execute this. I believe the effiecency is O(n).