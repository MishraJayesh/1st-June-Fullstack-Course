const nums =[2,7,11,15];
const target = 9;
function add (nums,target) {
    let res = [];
    for (let i=0; i < nums.length; i++)
    {
        for( let j=i+1;j<4;j++){
            console.log(i,j);
            if(nums[i] + nums[j] == target){
            res.push(i,j);
           }
        }
         
    }
   return res;
}
console.log(add(nums,target));