const fs = require("fs");

// fs.writeFile("message.txt", "Node writing success.", (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!");
// });

// fs.writeFile("message.txt", "Node writing with pre-existing file success.", err => {
//     if (err) {
//       console.error(err);
//     }
// });

fs.readFile("./message.txt", "utf8", (err, data) => {
    if (err) throw err;
      console.log(data);
    });