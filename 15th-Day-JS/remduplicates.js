//Remove Duplicates
var arr = [1,1,2];
function remove(arr){
   var u = [];
   arr.forEach(element => {
      if (!u.includes(element)) {
          u.push(element);
      }
  });
  return u;
}
console.log(remove(arr));