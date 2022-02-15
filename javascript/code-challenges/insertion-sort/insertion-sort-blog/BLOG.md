# Insertion Sort Blog

## The Psudeo Code
```js
  InsertionSort(int[] arr)

    FOR i = 1 to arr.length

      int j <-- i - 1
      int temp <-- arr[i]

      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1

      arr[j + 1] <-- temp
```

The psudeo code above drafts a function called insertionSort(), that takes in an array of integers as a argument and sorts them in place (lowest value to highest value). Lets cover the basics here and then walk through each step as it sorts the example array `[8,4,23,42,16,15]`!

- `FOR i = 1 to arr.length`, the code here is asking us to use a for loop that start with i = 1, and ends when we get to the end of the array ( <= array.length -1 OR < array.length).
- `int j <-- i - 1`, variable j is intialized at the value of i - 1.
- `int temp <-- arr[i]`, variable temp is initialized at the value in the array at index i.
- `WHILE j >= 0 AND temp < arr[j]`, while j is greater than or equal to 0 AND temp is less than the value in the array at index j, loop.
- `arr[j + 1] <-- arr[j]`, set the value in the array at index j + 1 equal to the value in the array at index j.
- `j <-- j - 1`, set j equal to the value of j - 1.
- `arr[j + 1] <-- temp`, set the value in the array at index j + 1 equal to the value of temp.

## Pass 1
![insertion sort pass 1](./insertion-sort-pass1.png)

This algorithm enters right into a for loop and remains there until the function is complete.

For the example array `[8,4,23,42,16,15]`, i starts at 1, j starts at 0, and temp starts at 4. The While loop condition is met since j is greater than 0 and temp (4) is less than arr[j](8). As a result the value in the array at index 1 is set to 8 (where the value was 4), and j is now equal to -1. Now that j is less than 0, the while loop condition is no longer met and we break out. 

Finally the value in the array at position 0 is set equal to the temp value (4), and the first pass is complete.


## Pass 2
![insertion sort pass 2](./insertion-sort-pass2.png)

Pass 2 starts with i at 2, j at 1, and temp at 23. Since temp (23) is greater than arr[j] (8), the while loop condition is never met. The value in the array at index j+1 remains the same.

## Pass 3
![insertion sort pass 3](./insertion-sort-pass3.png)

Pass 3 starts with i at 3, j at 2, and temp at 42. Since temp (42) is greater than arr[j] (23), the while loop condition is never met. The value in the array at index j+1 remains the same.

## Pass 4
![insertion sort pass 4](./insertion-sort-pass4.png)

Pass 4 starts with i at 4, j at 3, and temp at 16. Temp (16) is less than arr[j] (42) and j is greater than 0, meeting the while loop condition. The value in the array at index 4 is then set to 42, and j is reduced by 1 to 2.

With j at 2, Temp (16) is less than arr[j] (23) and j is greater than 0, meeting the while loop condition. The value in the array at index 3 is then set to 23, and j is reduced by 1 to 1.

With j at 1, Temp (16) is greater than arr[j] (8) so the while loop condition is no longer met. The value in the array at index 2 is then set to temp (16).

## Pass 5
![insertion sort pass 5](./insertion-sort-pass5.png)

Pass 4 starts with i at 5, j at 4, and temp at 15. Temp (15) is less than arr[j] (42) and j is greater than 0, meeting the while loop condition. The value in the array at index 5 is then set to 42, and j is reduced by 1 to 3.

With j at 3, Temp (15) is less than arr[j] (23) and j is greater than 0, meeting the while loop condition. The value in the array at index 4 is then set to 23, and j is reduced by 1 to 2.

With j at 2, Temp (15) is less than arr[j] (16) and j is greater than 0, meeting the while loop condition. The value in the array at index 3 is then set to 16, and j is reduced by 1 to 1.

With j at 1, Temp (15) is greater than arr[j] (8) so the while loop condition is no longer met. The value in the array at index 2 is then set to temp (15).

## Conclusion

That completes our walk through of the insertion-sort function outlined above. If you have any questions or notice anything I missed, please feel free to leave a reponse!

Erik Savage, Full Stack Software Developer