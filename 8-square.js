const { argv } = require('process');

if (Number(argv[2])) {
    for (let i = 0; i < Number(argv[2]); i++) {
        let result = "";
        for (let j = 0; j < Number(argv[2]); j++) {
            result += "X";
        }
        console.log(result);
    }
} else {
    console.log("Missing size");
}