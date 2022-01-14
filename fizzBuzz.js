var i;
var fizzBuzz = function (n) {
    for (i = 1; i <= n; i++) {
        //jika i kelipatan 3 dan 5, cetak FizzBuzz
        if (i % 3 == 0)
            console.log('FizzBuzz');
        // jika i kelipatan 3 (tetapi bukan 5)
        if (i % 5 != 0)
            console.log('buzz');
        //jika i kelipatan 3 dan 5, cetak FizzBuzz
        else if (i % 5 == 0)
            console.log('FizzBuzz');
        // jika i kelipatan 5 (tetapi bukan 3),
        if (i % 3 != 0)
            console.log('Fizz');
        // print the number
        else
            console.log(i);
    }
};
fizzBuzz(10);
// given a number n, for each integer i in the range from 1 to n inclusive, print one value per line as follows: - if i is a multiple of both 3 and 5, print FizzBuzz - if i is a multiple of 3 (but not 5), print Fizz - if i is a multiple of 5 (but not 3), print buzz, - if i is a multiple of 3 or 5, print the value of i  function description create a function fizzBuzz with following parameters         int n: upper limit of values to test (inclusive) returns none prints:         the function must print the appropriate response for each value i in the set {1,2, ...., n} in ascending order, each on separate line
