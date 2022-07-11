const { v4: uuidv4 } = require('uuid');
const fs = require("fs");

exports.writeFile = function (bodyContent) {
    let writeFileSuccess = true;

    const objectKey = uuidv4() + ".html";
    const fileLocation = "/tmp/" + objectKey;
    const result = writeFileSuccess ? objectKey : '';

    fs.writeFile(fileLocation, bodyContent, function (err) {
        if (err) {
            console.log(err);
            writeFileSuccess = false;
        }
    })

    return result;
}