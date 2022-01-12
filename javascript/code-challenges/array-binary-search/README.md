# Array Binary Search
<!-- Description of the challenge -->
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.


## Whiteboard Process
<!-- Embedded whiteboard image -->
![whiteboard image](/javascript/code-challenges/array-binary-search/UML.png)
## Approach & Efficiency
<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->
Approach was to track the lower, max index values, and use them to calculate a index value to check. There is a while loop that loops through while a match boolean is false. When a match is found or if at the end no match is found, match is set to true to break the loop and a return value is provided accordingly. I believe the effiecency is O(log n) because it runs in logarithmic time (ratio of operations to size of input decreases towards 0 as n increases) wikipedia.