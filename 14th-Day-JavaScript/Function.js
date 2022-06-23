//Asynchronous Function.
function app(){
    setTimeout(()=> {
        console.log("Starting Async Function");
}, 2000);
}
console.log("Hello,World!");
app();
//An Array Is Kept Under Async Function.
function async(){
    setTimeout(()=> {
        let a =[2,4,6,8,10,12,14,16,18,20];
        console.log(a);
    }, 2000);
}
console.log("Please Wait, Printing An Array");
async();