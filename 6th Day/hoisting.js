a = 2
var a; 
console.log(a);

Start4();
Start3();

function one() {
    let name= 'Jayesh'
    console.log("CPU");
  }
  function two() {
    setTimeout(() => {
      console.log("RAM");
    }, 2000);
  }
  function three() {
    setTimeout(() => {
      console.log("ROM");
    }, 3000);
  }
  
  function four() {
    setTimeout(() => {
      console.log("URL");
    }, 1000);
  }

  function Start1() {
    console.log("Start1");
  }
  function Start2() {
    console.log("Start2");
  }
  function Start3() {
    console.log("Start3");
  }
  function Start4() {
    console.log("Start4");
  }

  Start1();
  Start2();
  one();
  two();
  three();
  four();