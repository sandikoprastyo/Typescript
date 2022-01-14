var Getprime = function () {
    for (var a = 322; a < 177013; a++) {
        if (a % 2 == 0) {
            console.log("".concat(a, " not prime"));
        }
        else {
            console.log("".concat(a, " prime"));
        }
    }
};
Getprime();
