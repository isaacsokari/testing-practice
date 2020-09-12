module.exports = {
  forEach: (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
      func(arr[i], i);
    }
  },
  map(arr, func) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let value = arr[i];
      newArr.push(func(value));
    }
    return newArr;
  },
};
