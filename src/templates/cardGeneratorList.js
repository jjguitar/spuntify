const generatorCards = (playlist) => {
  let block = ''

  for (let i of playlist) {
    // console.log(i)
    block = block + '\n' +
    `
    <a href="#/${i.id}/">
      <div class="card-recently">
        <div class="card-img">
          <img loading="lazy" src="${i.images[0].url}" alt="img" width="160">
        </div>
        <h1 class="card-recently__tittle">${i.name}</h1>
        <p class"card-recently__artist">By ${i.owner.display_name}</p>
      </div>
    </a>
    `
  }

  return `
  <div class="container__recently">
    ${block}
  </div>
  `
}

const cardGeneratorList = async (playListTop) => {
  let blockSection = '';

  for(let i = 1; i < 4 ; i++) {
    let playlist = playListTop[i]
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

export default cardGeneratorList
