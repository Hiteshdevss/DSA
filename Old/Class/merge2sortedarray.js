function mergeSortedArrays(a, b) {
    let result = [];
    let i = 0;
    let j = 0;

    // Traverse both arrays
    while (i < a.length && j < b.length) {
        // If current element of first array is smaller, add it to result and move to next element in first array
        if (a[i] < b[j]) {
            result.push(a[i]);
            i++;
        }
        // If current element of second array is smaller, add it to result and move to next element in second array
        else {
            result.push(b[j]);
            j++;
        }
    }

    // If there are remaining elements in array 'a', append them to result
    while (i < a.length) {
        result.push(a[i]);
        i++;
    }

    // If there are remaining elements in array 'b', append them to result
    while (j < b.length) {
        result.push(b[j]);
        j++;
    }

    return result;
}

// Define the arrays
const a = [1, 6, 9, 13, 14, 19];
const b = [2, 3, 7, 8, 16, 20];

// Call the function to merge the arrays
const mergedArray = mergeSortedArrays(a, b);

// Print the merged array
console.log(mergedArray);
