//? flowchart alogitma bubbleSort

//? langkah-1: Anda membandingkan item pertama dengan item kedua. Jika item pertama lebih besar dari item kedua. Anda menukarnya sehingga yang lebih besar tetap di posisi kedua.

//! langkah-2: Dan kemudian bandingkan item kedua dengan item ketiga. jika item kedua lebih besar dari yang ketiga, kami menukarnya. jika tidak, mereka tetap di posisi mereka. Karenanya, yang terbesar di antara tiga yang pertama ada di posisi ketiga.

//? langkah-3: kami terus melakukannya. sampai kita menekan elemen terakhir dari array. Dengan cara itu kita menggelembungkan item terbesar dari array ke posisi paling kanan dari array.

//! langkah-4: Lihatlah loop dalam pada kode di bawah ini.

//? langkah-5: Kami mengulangi proses ini, mulai dari item terakhir dari array. lihat loop luar dalam kode di bawah ini. Kami melakukan cara ini, sehingga setelah menyelesaikan loop dalam pertama, yang terbesar akan berada di item terakhir dari array.

//! langkah-6: dan kemudian kita bergerak mundur di dalam lingkaran luar.

const bubbleSort = (arr) => {
  let arrLength = arr.length;

  for (let first = arrLength - 1; first >= 0; first--) {
    for (let second = 1; second <= first; second++) {
      if (arr[second - 1] > arr[second]) {
        let temp = arr[second - 1];
        arr[second - 1] = arr[second];
        arr[second] = temp;
      }
    }
  }
    return arr;
};

console.log(bubbleSort([100, 23, 48, 44, 16, 900, 99, 345, 12]));
