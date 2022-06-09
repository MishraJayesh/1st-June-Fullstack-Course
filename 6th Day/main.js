
// Global Scope or File Scope

var a = 10 ;
let b = 15 ;
const c = 3.142;

function java() {

    /*a = 1000;*/

    console.log(a);
    console.log("Hello JavaScript");
    console.log(b);
    console.log(c);
}

function three1() {
    console.log("MID1");
  }
  function three2() {
    console.log("MID2");
  }
  function three3() {
    console.log("MID3");
  }
  function three4() {
    console.log("MID4");
  }

  function END1() {
    setTimeout(() => {
      console.log("END1");
    }, 1000);
  }
  function END2() {
    setTimeout(() => {
      console.log("END2");
    }, 2000);
  }
  
  function END3() {
    setTimeout(() => {
      console.log("END3");
    }, 3000);
  }

  function END4() {
    setTimeout(() => {
      console.log("END4");
    }, 4000);
  }

  

 /* VALUE OF CONST DOES NOT CHANGES 

function java2() {
    c = 3.152
    console.log(a);
    console.log("Hello JavaScript");
    console.log(b);
    console.log(c);
} */

/* Variable d Is Declared Inside The Scope And Is Known As Functional Scope

function java3() {
    var d = 12
    console.log(a);
    console.log("Hello JavaScript");
    console.log(b);
    console.log(c);
}
console.log(d); */

// let Is Blocked Scope Variable

function java4() {
    b  = 150;
    console.log(b);
}

function toss(text) {
    if (text === 'Head') {
        console.log ("India Won The Toss")
    } else if (text === 'Tail') {
        console.log ("South Africa Won The Toss")
    } else {
        console.log ("Toss Again")
    }
}
toss('Head');

three1();
three2();
three3();
three4();

END1();
END2();
END3();
END4();

java();
/*java2();*/
/*java3();*/
java4();