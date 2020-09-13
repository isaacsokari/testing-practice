module.exports = {
  forEach(arr, cb) {
    for (let elem of arr) {
      cb(elem);
    }
  },
};
