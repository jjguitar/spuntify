function cardGenerator(n) {
  let block = ''

  for(let i = 0; i < n; i++) {
    block = block + '\n' +
    `<div class="cards__top-item">
      <div style="background-color:#${randomColor()};"></div>
      <p>Easter/Día de Resurrección</p>
    </div>`
  }
  return block
}

function randomColor() {
  return Math.floor(Math.random()*16777215).toString(16);
}

function cardGeneratorList(n) {
  let block = ''

  for(let i = 0; i < n; i++) {
    block = block + '\n' +
    `<div class="card__list">
      <h2>Recently played</h2>
      <div class="test">
        <div style="background-color:#${randomColor()};">
        </div>
        <h1>Release Radar</h1>
        <p>Catch all the latest music from artists you follow, plus mew...</p>
      </div>
    </div>`
  }
  return block
}

const Main = () => {
  const view = `
  <h1 class="content__tittle-top">Good evening</h1>
  <div class="cards__top">
    ${cardGenerator(4)}
  </div>
  <div class="cards__top">
    ${cardGenerator(6)}
  </div>
  <div class="cards__container-list">
    ${cardGeneratorList(3)}
  </div>
  `;
  return view;
};

export default Main;