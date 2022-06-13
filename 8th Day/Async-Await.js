async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data = await response.json();
    console.log(data);
};
