import APIController from '../API/APIController.js'

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

function randomColor() {
  return Math.floor(Math.random()*16777215).toString(16);
}

const getCookie = name => {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

function generatorCards(tracks) {
  let block = ''
  // console.log(tracks)
  for (let i of tracks) {
    // console.log(i.track.album.artists[0].name)
    block = block + '\n' +
    `
        <div class="card-recently">
          <div class="card-img" style="background-color:#${randomColor()};">
            <img src="${i.track.album.images[1].url}" alt="img" width="160">
          </div>
          <h1>${i.track.name}</h1>
          <p>By ${i.track.album.artists[0].name}</p>
        </div>
    `
  }

  return `
  <div class="container__recently">
    ${block}
  </div>
  `
}

const cardGeneratorList = async (playlist) => {
  let n = playlist.length
  let blockSection = ''

  for(let i = 1; i < n / 2; i++) {
    let endPoint = playlist[i].tracks.href
    let tracks = await APIController.getTracks(getCookie('BearerToken'), endPoint)
    blockSection = blockSection + '\n' +
    `
    <section class="recently-played">
      <h2>${playlist[i].name}</h2>
      ${generatorCards(tracks)}
    </section>
    `
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
    ${await cardGeneratorList(playlist)}
  `;
  return view;
};

export default Main;