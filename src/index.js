module.exports = function reverse(n) {
  n = Math.abs(n)
  arr = n.toString().split("");
  res = arr.reverse();
  return res.join("");
};
