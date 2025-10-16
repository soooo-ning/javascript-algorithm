function sum(a, b, ...rest) {
  console.log(a, b, rest) // 1 2 [3, 4, 5, 6, 7, 8]
  return rest.reduce((acc, cur) => acc + cur, 0)
}
const res = sum(1, 2, 3, 4, 5, 6, 7, 8)
console.log(res) // 33
