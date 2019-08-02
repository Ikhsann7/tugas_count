let tambah = document.querySelector('.plus');
let kurang = document.querySelector('.minus');
let awal = document.getElementById('awal');
let akhir = document.getElementById('akhir');
let hasil = document.getElementById('hasil');
let hasilAkhir = hasil.innerHTML;

tambah.addEventListener('click',() => {
            hasil.innerHTML = Number(awal.value) + Number(akhir.value)
        })

kurang.addEventListener('click',() => {
            hasil.innerHTML = Number(awal.value) - Number(akhir.value)
        })