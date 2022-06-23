let nums =[3,2,2,3]; 
let val = 3;
{
for (let i = (nums.lenght-1); i>-1; i--){
    if(nums[i] === val){
        nums.splice(i, 1);
    }
}
 return nums.lenght;
};