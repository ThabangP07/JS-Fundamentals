const { argv } = require('process');


function numFactorial(num) {
    
    if (isNaN(num) || num <= 1) {
        return 1;
    } 
    
    return num * numFactorial(num - 1);
}


let result = numFactorial(argv[2]);


console.log(result);
