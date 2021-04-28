function fatorial(n) {
  let result = 1;
  if (n > 1) {
    result = n * fatorial(n-1);
  }
  return result
}

console.log(fatorial(10));