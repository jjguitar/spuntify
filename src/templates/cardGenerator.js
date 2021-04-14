const cardGenerator = async (playlist) => {
  let n;
  let block1 = '';
  let block2 = '';
  playlist = playlist[1]
  n = playlist.length

  for(let i = 0; i < n; i++) {
    if (i < n / 2) {
      // console.log(playlist[i])
      block1 = block1 + '\n' +
    `<a href="#/${playlist[i].id}/">
    <div class="cards__top-item">
      <div>
        <img loading="lazy" src="${playlist[i].images[0].url}" width="80" height="80" alt="capture">
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
        <img loading="lazy" src="${playlist[i].images[0].url}" width="80" height="80" alt="capture">
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

export default cardGenerator
