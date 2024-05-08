let arr = [
    [2,3,4],
    [6,7,8],
    [9,10,11],
    [7,5,2],
];

for (let j =  arr[0].length-1;j>=0; j--) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i][j]);
    }
}