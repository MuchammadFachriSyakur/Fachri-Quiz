//Fungsi mencetak Nama Yang sudah dimasukan user
const username = JSON.parse(sessionStorage.getItem('username'));
document.querySelector(".nama").textContent = username;

const form = document.querySelector(".question");
const wadahSemuaSoal = document.querySelectorAll(".question .ques");
const soal = document.querySelectorAll(".question .ques input");
const wlabel = document.querySelector(".question .soal1 .coba");
const label = document.querySelectorAll(".question .ques label");
const wrappScore = document.querySelector(".skor");
const labelOf = document.querySelectorAll(".question .ques .soal_body");

let skor = 0;
let skor2 = 0;
let skor3 = 0;
let skor4 = 0;
let skor5 = 0;
let skor6 = 0;
let skor7 = 0;
let skor8 = 0;
let skor9 = 0;
let skor10 = 0;
let hasil = 0;
let counter = 0;

soal.forEach((e,i)=>{
  e.addEventListener("click", e =>{
    e.target.parentElement.parentElement.setAttribute("data-value",e.target.value);
    const valueBody =
    e.target.parentElement.parentElement.getAttribute("data-soal");
    if(e.target.parentElement.parentElement.getAttribute("data-value") ==
    e.target.parentElement.parentElement.parentElement.getAttribute("data-value")){
      if(valueBody == "soal1"){
        skor = 1;
      }else if(valueBody == "soal2"){
        skor2 = 1;
      }else if(valueBody == "soal3"){
        skor3 = 1;
      }else if(valueBody == "soal4"){
        skor4 = 1;
      }else if(valueBody == "soal5"){
        skor5 = 1;
      }else if(valueBody == "soal6"){
        skor6 = 1;
      }else if(valueBody == "soal7"){
        skor7 = 1;
      }else if(valueBody == "soal8"){
        skor8 = 1;
      }else if(valueBody == "soal9"){
        skor9 = 1;
      }else if(valueBody == "soal10"){
        skor10 = 1;
      }
    }else{
      if(valueBody == "soal1"){
        skor = 0;
      }else if(valueBody == "soal2"){
        skor2 = 0;
      }else if(valueBody == "soal3"){
        skor3 = 0;
      }else if(valueBody == "soal4"){
        skor4 = 0;
      }else if(valueBody == "soal5"){
        skor5 = 0;
      }else if(valueBody == "soal6"){
        skor6 = 0;
      }else if(valueBody == "soal7"){
        skor7 = 0;
      }else if(valueBody == "soal8"){
        skor8 = 0;
      }else if(valueBody == "soal9"){
        skor9 = 0;
      }else if(valueBody == "soal10"){
        skor10 = 0;
      }
    }
  });
});

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  labelOf.forEach((e,i)=>{
    const attribute = labelOf[i].getAttribute("data-value");
    const parentValue = labelOf[i].parentElement.getAttribute("data-value");
    if(attribute){
      hasil = skor + skor2 + skor3 + skor4 +skor5 + skor6 + skor7 + skor8 +
      skor9 + skor10;
      hasilAkhir = (hasil * 100) / 10;
      sessionStorage.setItem("nilai",hasilAkhir);
      window.location.href = "hasil.html";
    }else{
      alert("Kamu Perlu Mengisi Soal");
    }
  });
});