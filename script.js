// Variables

var x = 0, y = '';
var message = ['Ah ', 'h', 'i', 's', 't', ', something went wrong.'];

// Functions

function doStuff() {
  x = Math.floor(Math.random() * 101);
  if (x !== 55) {
    document.write('Drumroll please...');
    setTimeout(writing(x), 1500);
  } else {
    document.write('Drumroll please...');
    setTimeout(writing(message[0] + message[3] + message[1] + message[2] + message[4] + message[5]), 1500);
}

function writing(y) {
  document.write(y);
}
