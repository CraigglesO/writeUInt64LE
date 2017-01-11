'use strict';
const Buffer = require('buffer').Buffer;

// writeInt32BE(value, number[, offest])

function writeUInt64LE(buf, int64, offset) {
  if (typeof int64 !== 'number'){
    int64 = Number(int64);
  }

  const MAX_UINT32 = 0xFFFFFFFF; // 64 bits / 8 bytes.
  // write
  const big = ~~(int64 / MAX_UINT32); // ~~ is equivalent to Math.floor()
  const low = (int64 % MAX_UINT32) - big;

  if (!offset) {
    buf.writeUInt32LE(low, 0);
    buf.writeUInt32LE(big, 4);
    return buf;
  } else {
    buf.writeUInt32LE(low, offset);
    buf.writeUInt32LE(big, offset + 4);
    return buf;
  }
}

module.exports = writeUInt64LE;
