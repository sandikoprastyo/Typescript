var MAX_CHAR = 26;
const minChanges = (str) => {
  var n = str.length;

  // If length is more than maximum
  // allowed characters, we cannot
  // get the required string.
  if (n > MAX_CHAR) return -1;

  // Variable to store count of
  // distinct characters
  var dist_count = 0;
  var count = Array.from({ length: MAX_CHAR }, (_, i) => 0);

  // To store counts of different
  // characters
  for (var i = 0; i < MAX_CHAR; i++) count[i] = 0;

  for (var i = 0; i < n; i++) {
    if (count[str.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)] == 0)
      dist_count++;
    count[str.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  // Answer is, n - number of distinct char
  return n - dist_count;
}

var str = 'abab';

console.log(minChanges(str));
