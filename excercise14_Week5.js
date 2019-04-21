function changeVocals(str) {
    var kosong = ''
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < alphabet.length; j++) {

            if (str.length < 5) {
                return 'minimal input karakter adalah 5 karakter'
            }

            if (str[i] === alphabet[j]) {
                kosong += alphabet[j + 1]

            }

        }
    }
    return kosong;
}
console.log(changeVocals('hallo'))

function reverseWord(str) {
    var balikKata = ''
    for (var i = str.length - 1; i >= 0; i--) {
        balikKata += str[i]
    }

    return balikKata
}
console.log(reverseWord('haai'))


function setLowerUpperCase(str) {
    var kataKecil = 'abcdefghijklmnopqrstuvwxyz'
    kataBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    sementara = ''
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < kataKecil.length; j++) {
            if (str[i] === kataKecil[j]) {
                sementara += kataBesar[j]
            } else if (str[i] === kataBesar[j]) {
                sementara += kataKecil[j]
            }
        }
    }
    return sementara
}
console.log(setLowerUpperCase('Hallo Bro'))

function removeSpaces(str) {

}

function passwordGenerator(name) {
    //code di sini
}

// console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
// console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
// console.log(passwordGenerator('Alexei')); // 'JFXFLb'
// console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'