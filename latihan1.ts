// type data on type script

console.log('--------type data primitive-----------')

// type string
let a: string = 'hello'
console.log(typeof a)

// type number
let b: number = 1
console.log(typeof b)

// type boolen
let c: boolean = true
console.log(typeof c)

// type null
let d: null = null  //note type null dalam js dan ts akan me return object
console.log(typeof d)

// type undefined
let e: undefined = undefined
console.log(typeof e)

// type symbol
let f: symbol = Symbol("Sym")
console.log(typeof f)


//?? type data object / modern

console.log('--------type data object / modern-----------')

// type array
let g: [] = []
console.log(typeof g)

// type object
let h: {} = {}
console.log(typeof h)

// type function
let i: () => void = function myFunc() {
    return
}
console.log(typeof i)

// type any untuk type data apapun string number boolen
let j: any;
j = 'string';
j = 12;
j = true;
console.log(typeof j)

// type union untuk type data string or number dan seterusnya
let k: string | number = 'string'
console.log(typeof k)