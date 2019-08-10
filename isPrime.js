// Define a function that takes an integer argument and returns logical value true or false depending on if the integer is a prime.
// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */


function isPrime(num) {
    if (num <= 1) return false; // negatives
    if (num % 2 == 0 && num > 2) return false; // even numbers
    let s = Math.sqrt(num); // store the square to loop faster
    for(let i = 3; i <= s; i++) { // start from 3, stop at the square, increment
        if(num % i === 0) return false; // modulo shows a divisor was found
    }
    return true;
  }

  isPrime(7);