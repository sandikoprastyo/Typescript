const Getprime = () => {
    for (let a = 322; a < 177013; a++) {
        if (a % 2 == 0) {
            console.log(`${a} not prime`)
        } else {
            console.log(`${a} prime`)

        }
    }
} 

Getprime()