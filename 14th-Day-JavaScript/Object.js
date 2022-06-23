let obj = {
     name: 'Jayesh',
     age: 22,
};
//Adding New Key-Value Pair In An Object.
obj['Gender'] = 'Male';
console.log(obj);
//Editing Key-Value Pair In An Object.
obj['age'] = 'Not Applicable';
console.log(obj.age);
//Deleting Key-Value Pair In An Object.
delete obj['age'];
console.log(obj);