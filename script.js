const dino = document.getElementById("dino");
const mina = document.getElementById("mina");
const score = document.getElementById("score");

function jump() {
  dino.classList.add("jump-animation");
  setTimeout(() =>
    dino.classList.remove("jump-animation"), 500);
}

document.addEventListener('keypress', (event) => {
  if (!dino.classList.contains('jump-animation')) {
    jump();
  }
})

setInterval(() => {
  const dinoTop = parseInt(window.getComputedStyle(dino)
    .getPropertyValue('top'));
  const minaLeft = parseInt(window.getComputedStyle(mina)
    .getPropertyValue('left'));
  score.innerText++;

  if (minaLeft < 0) {
    mina.style.display = 'none';
  } else {
    mina.style.display = ''
  }

  if (minaLeft < 50 && minaLeft > 0 && dinoTop > 150) {
    alert("Você perdeu score: " + score.innerText +
      "\n\nJogar Novamente?");
    location.reload();
  }
}, 50);