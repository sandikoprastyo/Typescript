var fibonaciSums = function (n) {
    if (n <= 1)
        return n;
    return fibonaciSums(n - 1) + fibonaciSums(n - 2);
};
console.log(fibonaciSums(9));
