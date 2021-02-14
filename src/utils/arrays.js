export const arrToObj = (array) =>
  Array.isArray(array) &&
  array.reduce((obj, item) => {
    if (item) obj[item.id] = item;
    return obj;
  }, {});

export const objToArr = (object) =>
  typeof object === "object" &&
  Object.keys(object)
    .map((key) => object[key])
    .filter((item) => item);
