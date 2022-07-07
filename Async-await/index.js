//1.
async function getData() {
    const response = await fetch('Hello World');
    const data = await response.json();
    console.log(data);
};
getData();
console.log(getData());

//2.
async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data = await response.json();
    console.log(data);
};
fetchData();
console.log(fetchData());
