const fibonacci = function(number) {
    let fib = 0;
    let lastNumber = 1;
    let nextNumber = 1;
    if(number < 0) return "OOPS";
    if(number < 3) return 1;
    for(let i = 0; i < number - 2; i++){
        fib = lastNumber + nextNumber;
        lastNumber = nextNumber;
        nextNumber = fib;
        console.log(fib, lastNumber, nextNumber);
    }
    return fib;
};

module.exports = fibonacci;
