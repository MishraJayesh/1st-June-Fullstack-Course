const details = {
id: 7,
name: "Kurtis Weissnat",
username: "Elwyn.Skiles",
email: "Telly.Hoeger@billy.biz",
address: {
           street: "Rex Trail",
           suite: "Suite 280",
           city: "Howemouth",
           zipcode: "58804-1099",
           geo: {
                  lat: "24.8918",
                  lng: "21.8984",
                }
        },

phone: "210.067.6132",
website: "elvis.io",
company: {
          name: "Johns Group",
          catchPhrase: "Configurable multimedia task-force",
          bs: "generate enterprise e-tailers"
         },
}

console.log(details.name);
console.log(details.address.zipcode);
console.log(details.address.suite);
console.log(details.address.geo.lng);
console.log(details.company.bs);


let arr = ['Apple', 'Banana', 'Orange', "Pineapple", 'Peach', 'Watermelon', 'Strawberry', 'Muskmelon', 'Mango'];

function mapping(arr){
  arr.map(function(item){
    console.log(item);
  })
}
mapping(arr);

const a = [
    {
      Name:"Jayesh",
      Age:"22",
      Hobbies: {
                personal:["Reading", "Cooking", "Singing", "Writing"],
                working:["Coding", "DSA"]
      }
    },
    {
      Name:"Priya",
      Age:"24"
    },
    {
      Name:"Priyansh",
      Age:"22"
    },
    {
      Name:"Naresh",
      Age:"20"
    },
];
mapping(a);