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
    `<div class="card-recently">
      <div class="card-img" style="background-color:#${randomColor()};">
      </div>
      <h1>Tittle of list</h1>
      <p>By Erick Lugo</p>
    </div>`
  }
  return block
}

const Main = () => {
  const view = `
  <div class="container-main">
    <section class="greetings">
      <h1 class="content__tittle-top">Good evening</h1>
      <div class="container__greeting">
        <div class="row__1">
          ${cardGenerator(4)}
        </div>
        <div class="row__1">
          ${cardGenerator(4)}
        </div>
      </div>
    </section>
    <section class="recently-played">
      <h2>Recently played</h2>
      <div class="container__recently">
        ${cardGeneratorList(5)}
      </div>
    </section>
    <section class="recently-played">
      <h2>Recently played</h2>
      <div class="container__recently">
        ${cardGeneratorList(5)}
      </div>
    </section>
  </div>
  `;
  return view;
};

export default Main;