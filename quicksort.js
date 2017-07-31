

    var n = getRandomArbitrary(5, 20);
    var arr = new Array(n);
    var arrLength = n - 1;
    var pivot;
    var i = -1;
    var j = 0;

    for (var k = 0; k <= arrLength; k++) {
      arr[k] =   Math.floor(Math.random() * 100);
    }

    console.log(arr);

    pivot = arr[arrLength];

    for (k = 0; k <= arrLength - 1; k++ ) {
      if (pivot => arr[j]) {
        arr = swap(arr, i, j);
        i++;
      }
      j++;
    }

console.log(arr);

    function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    function swap(arr, x, y) {
      var b = arr[y];
      arr[y] = arr[x];
      arr[x] = b;
      return arr;

    }


