const value = 120;
const list =  [12, 45, 48, 5, 451, 2,34 ,43,54,66, 90 ]

let linearSearch = (list, value) => {
    //? length list is 11
    // console.log(list.length); 
    //? loop i variabale  Initialize i is 0
    //? if i is less than list.length i sum 
    for (let i = 0; i < list.length; i++) {   
        //? list[i] 12
        // console.log(list[i]); 
        //? condition if list[i] === value is 12 value of the above variable
        // ?return i 
        if (list[i] === value) {
            return i;
        } else {
            return undefined  //? if number dont find we return undefined
        }
    }
}

console.log(linearSearch(list , value)) //? call the function with arguments