var fs = require('fs');
fs.readFile('sample.html', function (err, data) {
    if (err) throw err;
   console.log(data.toString('utf8'));
    });
    