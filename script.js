let greet = "Selamat";
let date = new Date();
let hour = date.getHours();
let waktu;

if (hour > 18) waktu = "Malam";
else if (hour > 15) waktu = "Sore";
else if (hour > 12) waktu = "Siang";
else waktu = "Pagi";

let nama = prompt("Hi, Siapa nama anda ?");

document.getElementById("greeting").innerHTML = `${greet} ${waktu}, ${nama}`;


let silinder = () => {
    let jari = document.getElementById("jarijaris").value;
    let tinggi = document.getElementById("tinggis").value;
    let volume = Math.PI * Math.pow(jari, 2) * tinggi;
    document.getElementById("volumes").innerHTML = volume.toFixed(2);
    let luas = 2 * Math.PI * Math.pow(jari, 2) + 2 * Math.PI * jari * tinggi;
    document.getElementById("luass").innerHTML = luas.toFixed(2);


}

let kerucut = () => {
    let jari = document.getElementById("jarijarik").value;
    let tinggi = document.getElementById("tinggik").value;
    let garis = document.getElementById("garisk").value;

    let luas = Math.PI * Math.pow(jari, 2) + Math.PI * jari * garis;
    document.getElementById("luask").innerHTML = luas.toFixed(2);
    let volume = 1 / 3 * Math.PI * Math.pow(jari, 2) * tinggi;
    document.getElementById("volumek").innerHTML = volume.toFixed(2);

}

let bola = () => {
    let jari = document.getElementById("jarijarib").value;
    let luas = 4 * Math.PI * Math.pow(jari, 2);
    document.getElementById("luasb").innerHTML = luas.toFixed(2);
    let volume = 4 / 3 * Math.PI * Math.pow(jari, 3);
    document.getElementById("volumeb").innerHTML = volume.toFixed(2);

}
