/*
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was:
hello     world    my    name   is       raman

After the program runs, the output should be:
hello world my name is raman
*/

const fs = require('fs');

function cleanFile() {
    fs.readFile('week2/medium/info.txt', 'utf8', function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        let content = data;
        content = content.split(' ').filter(word => word != "").join(' ');
        fs.writeFile('week2/medium/info.txt', content, function (err) {
            if (err) {
                console.error(err);
                return;
            }
            console.log("File written successfully");
        });
    });
}

cleanFile();