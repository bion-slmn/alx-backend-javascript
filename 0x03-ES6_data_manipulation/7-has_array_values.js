/*
 * hasValuesFromArray - check if all element is the array exis in the  set
 * @param{array} arr - array whose elementst to be check
 * @param{Set} set - whose valuse is checked against
 * @return {boolean} true if all elements of the array exist in the set else false
 */
export default function hasValuesFromArray(set, arr) {
  return arr.every((val) => set.has(val));
}
