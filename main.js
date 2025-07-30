import { getTabuleiro } from "./discos.js";

const eH1 = document.querySelector("h1");
eH1.textContent = "Ola mundo";

const eTabuleiro = criaTabuleiro();
document.body.appendChild(eTabuleiro);

const tabuleiro = getTabuleiro();
for (let i = 0; i < 7; i++) {
  const eDisco = criaDisco(tabuleiro[i]);
  eTabuleiro.appendChild(eDisco);
}

function criaDisco(cor) {
  const novoDisco = document.createElement("div");
  novoDisco.classList.add("disco");
  novoDisco.dataset.cor = cor;
  return novoDisco;
}

function criaTabuleiro() {
  const novoTabuleiro = document.createElement("div");
  novoTabuleiro.classList.add("tabuleiro");
  return novoTabuleiro;
}
