const a=[1,2,3,4,5,6,7,8,9,10];
const even=a.filter((i)=>(i%2==0));
console.log("a =", a);
console.log("Even numbers are",even);

const square=even.map((i)=>(i*i));
console.log("Squares of even numbers are",square);
const sum=square.reduce((i,s)=>(i+s));
console.log("Sum of squares of even numbers is",sum);