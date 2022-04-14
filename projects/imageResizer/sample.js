var sharp = require("sharp");

sharp('input.jpg')
  .resize(320, 240)
  .toFile('output.jpg');

  sharp('input.jpg')
  .rotate(90)
  .toFile('output2.jpg');

  //store the properties in a dictionary i.e. rotate, resize, source & destination