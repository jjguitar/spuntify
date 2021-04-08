function cardGenerator(n) {
  let block = ''

  for(let i = 0; i < n; i++) {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    block = block + '\n' +
    `<div class="cards__top-item">
      <div style="background-color:#${randomColor};"></div>
      <p>Easter/Día de Resurrección</p>
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
    ${cardGenerator(2)}
  </div>
  `;
  return view;
};

export default Main;