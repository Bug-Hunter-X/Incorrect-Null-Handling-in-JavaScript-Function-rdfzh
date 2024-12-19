function foo(a, b) {
  if (a === null || b === null) {
    return undefined; 
  }
  return a + b;
}

console.log(foo(null, 1)); // Output: undefined, Expected: undefined
console.log(foo(1, null)); // Output: undefined, Expected: undefined
console.log(foo(1, 2)); // Output: 3, Expected: 3