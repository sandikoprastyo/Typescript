// type data on type script
console.log('--------type data primitive-----------');
// type string
var a = 'hello';
console.log(typeof a);
// type number
var b = 1;
console.log(typeof b);
// type boolen
var c = true;
console.log(typeof c);
// type null
var d = null; //note type null dalam js dan ts akan me return object
console.log(typeof d);
// type undefined
var e = undefined;
console.log(typeof e);
// type symbol
var f = Symbol("Sym");
console.log(typeof f);
//?? type data object / modern
console.log('--------type data object / modern-----------');
// type array
var g = [];
console.log(typeof g);
// type object
var h = {};
console.log(typeof h);
// type function
var i = function myFunc() {
    return;
};
console.log(typeof i);
// type any untuk type data apapun string number boolen
var j;
j = 'string';
j = 12;
j = true;
console.log(typeof j);
// type union untuk type data string or number dan seterusnya
var k = 'string';
console.log(typeof k);
