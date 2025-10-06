# Javascript FizzBuzz assignment
## What I did
I created a JavaScript program that prints all integers from 1 to 100.  

Numbers divisible by 3 print “Fizz
Numbers divisible by 5 print “Buzz”
 Numbers divisible by both 3 and 5 print “FizzBuzz”.


## How I made it
1. I wrote a `for` loop that counts from 1 to 100.
2. I used same code from codealongs which is:
// ✅ Finding numbers divisible by 7 and 5 between 1500 and 2700
for (let i = 1500; i <= 2700; i++) {
  if (i % 7 === 0 && i % 5 === 0) {
    console.log(i);
  }

## The problems I faced
I accidentally checked divisibility in the wrong order (if (i % 3 === 0) before checking i % 3 === 0 && i % 5 === 0), so “FizzBuzz” never appeared.
Also, still don't feel comfortable for writing the code so it took long for me.

## How I overcame them
I reviewed the example output to confirm my results matched exactly.