import AppController from '../API/AppController.js'

function cardGenerator(playlist) {
  let n = playlist.length
  let block1 = ''
  let block2 = ''
  // console.log(playlist)

  for(let i = 0; i < n; i++) {
    if (i < n / 2) {
      block1 = block1 + '\n' +
    `<div class="cards__top-item">
      <div>
        <img src="${playlist[i].images[0].url}" width="80">
      </div>
      <p>${playlist[i].name}</p>
    </div>`
    } else {
      block2 = block2 + '\n' +
    `<div class="cards__top-item">
      <div>
        <img src="${playlist[i].images[0].url}" width="80">
      </div>
      <p>${playlist[i].name}</p>
    </div>`
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

function generatorCards(tracks) {
  let block = ''
  // console.log(tracks)
  for (let i of tracks) {
    // console.log(i.track.album.artists[0].name)
    block = block + '\n' +
    `
        <div class="card-recently">
          <div class="card-img">
            <img src="${i.track.album.images[1].url}" alt="img" width="160">
          </div>
          <h1 class="card-recently__tittle">${i.track.name}</h1>
          <p class"card-recently__artist">By ${i.track.album.artists[0].name}</p>
        </div>
    `
  }

  return `
  <div class="container__recently">
    ${block}
  </div>
  `
}

const cardGeneratorList = async () => {
  let playlist = await AppController.playlist()
  let genre = playlist[0]
  playlist = playlist[1]
  let n = playlist.length
  let blockSection = ''
  console.log(playlist)
  console.log(genre)

  const cardGenerator = async (n) => {
    for(let i = 1; i < n ; i++) {
      let endPoint = playlist[i].tracks.href
      let tracks = await AppController.getTracks(endPoint)
      blockSection = blockSection + '\n' +
      `
      <section class="recently-played">
        <h2>${playlist[i].name}</h2>
        ${generatorCards(tracks)}
      </section>
      `
    }
  }

  if (n < 2) {
    await cardGenerator(n)
  } else {
    await cardGenerator(n / 2)
  }

  return blockSection
}

const Main = async (playlist) => {
  const view = `
  <div class="container-main">
    <section class="greetings">
      <h1 class="content__tittle-top">Good evening</h1>
      <div class="container__greeting">
        ${cardGenerator(playlist)}
      </div>
    </section>
    ${await cardGeneratorList()}
  `;
  return view;
};

export default Main;