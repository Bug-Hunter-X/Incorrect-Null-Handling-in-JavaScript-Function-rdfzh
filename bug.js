function foo(a, b) {
  if (a == null || b == null) {
    return 0; //This is incorrect, should return undefined
  }
  return a + b;
}

console.log(foo(null, 1)); // Output: 0, Expected: undefined
console.log(foo(1, null)); // Output: 0, Expected: undefined
console.log(foo(1, 2)); // Output: 3, Expected: 3