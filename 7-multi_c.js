const { argv } = require('process');

if (argv.length <= 2) {
  console.log('Missing number of occurrences');
}

while (Number(argv[2]) > 0) {
  console.log('C is fun');
  argv[2]--;
}