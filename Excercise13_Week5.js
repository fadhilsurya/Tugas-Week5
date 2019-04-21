function sorting(arrNumber) {
    for (var i = 0; i < arrNumber.length; i++) {


        if (arrNumber[i] > arrNumber[i + 1]) {
            var sementara = arrNumber[i]
            arrNumber[i] = arrNumber[i + 1]
            arrNumber[i + 1] = sementara
            i -= 2
        }
    }
    return arrNumber

}

function getTotal(arrNumber) {
    var hasil = 0;
    persamaan = arrNumber[arrNumber.length - 1];
    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] === persamaan) {
            hasil++
        }

    }
    return 'angka paling besar adalah ' + persamaan + ' jumlah kemunculan ' + hasil + ' kali'

}


function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

// console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

// console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'