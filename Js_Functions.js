TERMINOLOGIES:
-> Functions & Methods
-> Declaration & Definition
-> Arguments & Parameters
-> Callback & Higher Order Function

/* Example */


/*Normal Function*/
function printMe() {
    console.log("Print me");
    console.log("Printed");
}


const printMe = function() {
    // console.log("Print me");
    // console.log("Printed");
}

function printThis() {
    // console.log(this);
}

/* Returing values from functions */
function printThis(param1, param2) {
    console.log("Printing: ", param1, param2);
}

// printThis("Js", 401);

function sum(a, b) {
    const ret = a + b;
    return ret;
}

// console.log(sum(2,4));


/* default peramiter values */


function calc(a=0, b=0) {
    return (2 * (a+b));
}
// console.log(calc(3));


/* Rest Operator */
function collectThis(x, ...y) {
    console.log(x);
    console.log(y);
}

collectThis(1, 2, 3, 4, 5);
