let arr = [10,20,30,40,50];
for (let value of arr) {
    value += 1;
    console.log(value);
}
arr.push(60);
arr.reverse();


function sortF(arr){
    let done = false;
    while (!done){
        done = true;
        for(let i=1 ; i < arr.length; i++){
            if(arr[i-1] > arr[i]){
                done = false;
                let tmp = arr[i-1];
                arr[i-1]= arr[i];
                arr[i] = tmp;
            }
        }
    }
    console.log(arr);
    return arr[arr.length -1];
}