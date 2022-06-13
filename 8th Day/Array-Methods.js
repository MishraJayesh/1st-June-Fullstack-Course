let arr = ['Apple', 'Banana', 'Orange', "Pineapple", 'Peach', 'Watermelon'];
arr.push('Grapes');
arr.splice(2, 0, "Lemon", "Kiwi");
arr.pop();
arr.toString();
arr.shift();
arr.unshift('Pears','Papaya');
arr.reverse();
arr.sort();
arr.includes('Pears');
console.log(arr.length);
console.log(arr);

let fruits = ['Apple', 'Banana', 'Orange', "Pineapple", 'Peach', 'Watermelon', 'Strawberry', 'Muskmelon', 'Mango'];
fruits.push('Grapes');
fruits.splice(2, 0, "Lemon", "Blueberry");
fruits.pop();
fruits.toString();
fruits.shift();
fruits.unshift('Figg','Papaya');
fruits.reverse();
fruits.sort();
fruits.includes('Figg');
console.log(fruits.length);
console.log(fruits);

let citrus = fruits.concat(arr);
console.log(citrus);