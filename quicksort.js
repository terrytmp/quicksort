var n;
var i;
var p;
var A = new Array(n);
var pivot;
var lo = 0;
var hi = 8;

for (var k = 0; k <= 8; k++) {
  A[k] = Math.floor(Math.random() * 9);
}

console.log(A);

quicksort(A, lo, hi);

function quicksort(A, lo, hi) {
  if (lo < hi) {
    p = partition(A, lo, hi);
    quicksort(A, lo, p-1);
    quicksort(A, p + 1, hi);
    return A;
  }
  console.log(A);
}

function partition(A, lo, hi) {
  pivot = A[hi];
  i = lo - 1;

  for (var j = lo; j <= hi - 1; j++ ) {
    if (pivot > A[j] ) {
      i++;
      A = swap(A, i, j);
    }
  }

  if (A[hi] < A[i + 1]) {
    A = swap(A, i+1, hi);
  }
  return i + 1;
  return A;
}


function swap(A, x, y) {
  var b = A[y];
  A[y] = A[x];
  A[x] = b;
  return A;
}
