function evenOdd(number) {
    let num1 = number % 2;
    if (num1 == 0) {
        console.log("even");
    } else if (num1 == Math.round(num1)) {
        console.log("odd");
    } else {
        console.log("invalid");
    }
}
 
evenOdd(2);