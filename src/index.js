module.exports = function reverse (n) {
  let rev = 0;
        n = (n < 0) ? n * -1 : n;
       while (n) {
           rev = rev * 10 + n % 10;
           n = Math.floor(n / 10);
       }

       return rev;
}
