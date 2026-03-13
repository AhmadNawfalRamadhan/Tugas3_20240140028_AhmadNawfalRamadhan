
function updateClock(){

    let now = new Date();

    let jam = String(now.getHours()).padStart(2,'0');
    let menit = String(now.getMinutes()).padStart(2,'0');
    let detik = String(now.getSeconds()).padStart(2,'0');

    document.getElementById("clock").innerHTML =
        jam + ":" + menit + ":" + detik;
}

setInterval(updateClock,1000);

updateClock();

function tampil(){
    alert("ini adalah button")
}

function show(){
    alert("Nama saya Ahmad Nawfal Ramadhan NIM 20240140028 Kelas A, saya adalah seorang mahasiswa yang sedang belajar pemrograman web dasar")
}