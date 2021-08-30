export default function sorting(obj, order = []) {
  const orderedArray = [];
  const alphabetSortedArray = [];

  for (const prop of order) {
    if (prop in obj) {
      orderedArray.push({
        key: prop,
        value: obj[prop],
      });
    }
  }

  for (const key in obj) {
    if (!order.includes(key)) {
      alphabetSortedArray.push({
        key,
        value: obj[key],
      });
      alphabetSortedArray.sort((a, b) => a.key.localeCompare(b.key));
    }
  }

  return [...orderedArray, ...alphabetSortedArray];
}
