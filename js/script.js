// varibel tombol "Hitung BMI" dan "Reset"

function Calc() {
  let bb = document.getElementById("bb").value;
  let tb = document.getElementById("tb").value;

  // rumus perhitungan BMI
  let hasil = bb * (tb*tb) ; 

  // varibel yang di gunakan untuk output
  let Main = document.getElementById("resMain");
  let BMI = document.getElementById("resBMI");
  let desc = document.getElementById("resDesc");
  const p1 = document.getElementById("penjelasan1");
  const p2 = document.getElementById("penjelasan2");
  const p3 = document.getElementById("penjelasan3");
  const p4 = document.getElementById("penjelasan4");
  const s1 = document.getElementById("penyakit1");
  const s2 = document.getElementById("penyakit2");

  if (hasil <= 18.5) {
    Main.innerHTML = "Kekurangan berat badan";
    desc.innerHTML = "Anda kekurangan berat badan"; 
    BMI.innerHTML = hasil;
  } else if (hasil > 18.5 && a <= 24.9) {
    Main.innerHTML = "Normal (ideal)";
    desc.innerHTML = "Anda memiliki berat badan Normal atau ideal"; 
    BMI.innerHTML = hasil;
  } else if (hasil >= 25 && a <= 29.9) {
    Main.innerHTML = "Kelebihan berat badan";
    desc.innerHTML = "Anda memiliki berat badan berlebih"; 
    BMI.innerHTML = hasil;
  } else if (a >= 30) {
    Main.innerHTML = "Kegemukan (Obesitas)";
    desc.innerHTML = "Anda termasuk kedalam obesitas"; 
    BMI.innerHTML = hasil;
  }
}


// function untuk menampilkan pilihan input bertype radio
function getRadio() {
  var radio = document.getElementsByName("jenis-kelamin");
  var i;
  for (i = 0; i <= radio.length; i++) {
    if (radio[i].checked) {
      document.getElementById("radio-output").innerHTML =
        radio[i].value + "<br>Usia " + document.getElementById("usia").value + " Thn" + "<br>Berat " + document.getElementById("berat").value + " Kg" + "<br>Tinggi " + document.getElementById("tinggi").value + " Cm";
    }
  }
}

let cek1 = document.getElementById("cek2");
let BMI = document.getElementById("resBMI");
let desc = document.getElementById("resDesc");


function cek() {
  cek1.innerHTML = "Hello";
  desc.innerHTML = "World"; 
  BMI.innerHTML = 505;
}