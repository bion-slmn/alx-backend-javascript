export default function appendToEachArrayValue(array, appendString) {
  const array1 = [...array];
  for (const [index, value] of array1.entries()) {
    array1[index] = `${appendString}${value}`;
  }

  return array1;
}
