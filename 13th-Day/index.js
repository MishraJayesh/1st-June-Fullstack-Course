let arr = [100, 2, 3, 6344, 145, 60, 98754, 96, 52];

function maxValue(arr){
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i++){
        if(arr[i] > arr[i+1]){
            maxValue = arr[i];
        } else{
            maxValue = arr[i+1];
        }
    }
    return maxValue
}

console.log(arr);
