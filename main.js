const eH1 = document.querySelector('h1');
eH1.textContent = "Ola mundo"

const eTabuleiro = criaTabuleiro();
document.body.appendChild(eTabuleiro);

function criaTabuleiro() {
  const novoTabuleiro = document.createElement('div');
  novoTabuleiro.classList.add('tabuleiro');
  return novoTabuleiro;
}