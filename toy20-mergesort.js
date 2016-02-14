/*Implement a function that sorts an array of numbers using the “mergesort” algorithm.

Mergesort uses a divide-and-conquer strategy. It begins by treating the input list of length N as a set of N “sublists” of length 1, which are considered to be sorted. Adjacent sublists are then “merged” into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so on, until only a single sorted list remains. (Note, if N is odd, an extra sublist of length 1 will be left
after the first merge, and so on.)

This can be implemented using either a recursive (“top-down”) or an iterative (“bottom-up”) approach.*/


/*Illustration of an iterative approach:*/

/*1.Initial step: Input array is split into "sorted" sublists
   [4,7,4,3,9,1,2] -> [[4],[7],[4],[3],[9],[1],[2]]

2.Merge step: Adjacent sublists are merged into sorted sublists
   [[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]]

3.Repeat merge step:
   [[4,7],[3,4],[1,9],[2]] -> [[3,4,4,7], [1,2,9]]

4.Repeat merge step:
   [[3,4,4,7], [1,2,9]] -> [[1,2,3,4,4,7,9]]

5.Done! Return the sorted array:
   [1,2,3,4,4,7,9]*/

/*Illustration of a recursive approach:

1.Split the input array in half
 [4, 7, 4, 3, 9, 1, 2] -> [4, 7, 4], [3, 9, 1, 2

2.Both sides are sorted recursively:
 [4, 7, 4] -> [4, 4, 7]
 [3, 9, 1, 2] -> [1, 2, 3, 9]

3.Both halves are merged:
 [4, 7, 4], [3, 9, 1, 2] -> [1, 2, 3, 4, 4, 7, 9]*/

 function mergeSort(arr) {

     if (arr.length === 1) {
         return arr
     }

     var left = [];
     var right = [];

     var mid = Math.floor(arr.length / 2);

     left = mergeSort(arr.slice(0, mid));
     right = mergeSort(arr.slice(mid));

     var storage = [];

     for (var i = 0; i < arr.length ; i++) {
         if (left[0] < right[0]) {
             storage.push(left[0]);
              left = left.slice(1);
         } else if (left[0] >= right[0]){
             storage.push(right[0]);
             right = right.slice(1);
         }
     }

     if (left.length === 0) {
       storage = storage.concat(right);
     } else if (right.length === 0) {
       storage = storage.concat(left);
     }

     return storage;
 }
