import AppController from '../API/AppController.js'

const cardGenerator = async () => {
  let playlist;
  let n;
  let block1 = '';
  let block2 = '';

  playlist = await AppController.playlist(0)
  playlist = playlist[1]
  n = playlist.length

  for(let i = 0; i < n; i++) {
    if (i < n / 2) {
      console.log(playlist[i])
      block1 = block1 + '\n' +
    `<a href="#/${playlist[i].id}/">
    <div class="cards__top-item">
      <div>
        <img src="${playlist[i].images[0].url}" width="80" height="80" alt="capture">
      </div>
      <p>${playlist[i].name}</p>
    </div>
    </a>
    `
    } else {
      block2 = block2 + '\n' +
    `<a href="#/${playlist[i].id}/">
    <div class="cards__top-item">
      <div>
        <img src="${playlist[i].images[0].url}" width="80" height="80" alt="capture">
      </div>
      <p>${playlist[i].name}</p>
    </div>
    </a>`
    }
  }

  return `
    <div class="row__1">
      ${block1}
    </div>
    <div class="row__1">
      ${block2}
    </div>
  `
}

const generatorCards = (playlist) => {
  let block = ''

  for (let i of playlist) {
    block = block + '\n' +
    `
        <div class="card-recently">
          <div class="card-img">
            <img src="${i.images[0].url}" alt="img" width="160">
          </div>
          <h1 class="card-recently__tittle">${i.name}</h1>
          <p class"card-recently__artist">By ${i.owner.display_name}</p>
        </div>
    `
  }

  return `
  <div class="container__recently">
    ${block}
  </div>
  `
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const cardGeneratorList = async () => {
  let blockSection = '';

  for(let i = 1; i < 8 ; i++) {
    let generatorGenre = getRandomInt(1, 20)
    let playlist = await AppController.playlist(generatorGenre)
    let genre = playlist[0]

    playlist = playlist[1]
    blockSection = blockSection + '\n' +
    `
    <section class="recently-played">
      <h2>${genre.name}</h2>
      ${generatorCards(playlist)}
    </section>
    `
  }

  return blockSection
}

const Main = async () => {
  const view = `
  <div class="container-main">
    <section class="greetings">
      <h1 class="content__tittle-top">Good evening</h1>
      <div class="container__greeting">
        ${await cardGenerator()}
      </div>
    </section>
    ${await cardGeneratorList()}
  `;
  return view;
};

export default Main;