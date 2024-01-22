function mixColors() {
    // Mendapatkan nilai warna dari input
    var color1 = document.getElementById('color1').value;
    var color2 = document.getElementById('color2').value;

    // Menghitung perpaduan warna
    var mixedColor = mixHexColors(color1, color2);

    // Menampilkan hasil perpaduan warna
    var resultColorDiv = document.getElementById('resultColor');
    resultColorDiv.style.backgroundColor = mixedColor;
}

// Fungsi untuk menghitung perpaduan warna
function mixHexColors(color1, color2) {
    var hex1 = color1.substring(1); // Menghapus karakter '#' dari kode warna
    var hex2 = color2.substring(1);

    var r1 = parseInt(hex1.substring(0, 2), 16);
    var g1 = parseInt(hex1.substring(2, 4), 16);
    var b1 = parseInt(hex1.substring(4, 6), 16);

    var r2 = parseInt(hex2.substring(0, 2), 16);
    var g2 = parseInt(hex2.substring(2, 4), 16);
    var b2 = parseInt(hex2.substring(4, 6), 16);

    // Menghitung rata-rata warna
    var mixedR = Math.floor((r1 + r2) / 2);
    var mixedG = Math.floor((g1 + g2) / 2);
    var mixedB = Math.floor((b1 + b2) / 2);

    // Menggabungkan nilai rata-rata ke dalam kode warna hex
    var mixedColor = "#" +
        mixedR.toString(16).padStart(2, '0') +
        mixedG.toString(16).padStart(2, '0') +
        mixedB.toString(16).padStart(2, '0');

    return mixedColor;
}
