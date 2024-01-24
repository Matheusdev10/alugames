function alterarStatus(id) {
  const pegarJogo = document.getElementById(`game-${id}`);
  const pegarDiv = pegarJogo.querySelector('.dashboard__item__img');
  const pegarBotao = pegarJogo.querySelector('.dashboard__item__button');

  pegarBotao.classList.toggle('dashboard__item__button--return');
  pegarDiv.classList.toggle('dashboard__item__img--rented');

  if (pegarBotao.textContent === 'Alugar') {
    pegarBotao.textContent = 'Devolver';
  } else {
    pegarBotao.textContent = 'Alugar';
  }
}
