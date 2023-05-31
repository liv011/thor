var btn = document.querySelector(".no");
var position
btn.addEventListener("click", function() {
position ? (position = 0) : (position = 150);
btn.style.transform = `translate(${position}px,0px)`;
btn.style.transition = "all 0.2s ease";
});

var btn = document.querySelector(".no");
var position
btn.addEventListener("mouseover", function() {
position ? (position = 0) : (position = 150);
btn.style.transform = `translate(${position}px,0px)`;
btn.style.transition = "all 0.2s ease";
});

const sim = document.getElementById('yes');

sim.addEventListener("click", () => {

let timerInterval
Swal.fire({
  title: 'Obrigada por aceitar! Eu vou te amar',
  html: 'em formas que nunca te amaram por razões que nunca te falaram, por mais tempo que você pensa que merece e mais do que você alguma vez pensou que existisse dentro de mim.', 
  timer: 2000000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      showPage();
    }
  });
  
  function showPage() {
    var page = document.querySelector("body");
    page.style.display = "block";
  }

});
