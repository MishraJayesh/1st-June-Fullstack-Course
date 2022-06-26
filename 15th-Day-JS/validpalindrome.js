//Valid Palindrome
let s = "A man, a plan, a canal: Panama" ;
let str = s.toLowerCase().replaceAll(/[_\W]/g, '');
let r = str.split('').reverse().join('') === str;
console.log(r);