const Buffer = require('buffer').Buffer;
const writeUInt64LE = require('./writeUInt64LE');

// First example, writing to a buffer at a specified location:

let buf = new Buffer(16);
buf.fill(0);

buf.writeUInt32LE(0x417, 0);
buf.writeUInt32LE(0x27101980, 4);
writeUInt64LE(buf, 123456789, 8);

console.log(buf); // <Buffer 17 04 00 00 80 19 10 27 15 cd 5b 07 00 00 00 00>

// Second example, without an offset

let buf2 = new Buffer(8);

writeUInt64LE(buf2, 123456789);

console.log(buf2); // <Buffer 15 cd 5b 07 00 00 00 00>
