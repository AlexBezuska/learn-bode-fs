var fs = require('fs');

fs.readFile('file1.json', function (err, data) {
  if (err) throw err;
  var file1 = JSON.parse(data);
  file1.file2 = [
    {"stuff":"things"}
  ];
  file1.file3 = [
    {"stuff":"things"}
  ];
  writeOut(file1);
});

function writeOut(data){
  fs.writeFile('newfile.json', JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log(data);
    console.log('It\'s saved!');
  });
}
