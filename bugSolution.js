function foo(a,b){return Number(a) + Number(b);}
console.log(foo(1, "2")); // Output: 3
This solution uses the Number() function to explicitly convert both operands to numbers before performing the addition. This ensures the correct numerical addition occurs, avoiding the unexpected string concatenation behavior.