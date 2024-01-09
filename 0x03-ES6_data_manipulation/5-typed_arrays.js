/*
 * createInt8TypedArray - creates  new ArrayBuffer with an Int8 value at a specific position
 * @param {number} lenght: the length of the buffer
 * @param {number} position - position to add a value
 * @param {number] value - value to be added in the position
 * @return {typedarray}
 */
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  const dataView = new DataView(buffer);

  if (position >= 0 && position < length) {
    dataView.setInt8(position, value);
    return dataView;
  }
  throw new Error('Position outside range');
}
