const btnStartQuiz = document.querySelector(".fullcontainer .page .formulirNama");
btnStartQuiz.addEventListener("submit", e =>{
  e.preventDefault();
  const inputUsername = document.querySelector(".fullcontainer .page .formulirNama #username");
  if(inputUsername.value == ''){
    alert("Anda Perlu Memasukan Nama");
    return;
  }else{
    window.location.href = "quiz.html";
    sessionStorage.setItem('username', JSON.stringify(inputUsername.value));
  }
});