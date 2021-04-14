import getHash from '../utils/getHash'
import AppController from '../API/AppController.js'
import play from '../assets/img/play.svg'
import heart from '../assets/img/heart.svg'
import clock from '../assets/img/time.svg'
import timeTotal from '../utils/timeTotal.js'
import msToTime from '../utils/msToTime.js'

const drawImage = (source) => {
  const canvas = document.getElementById('canvas')
  const main = document.getElementById('main-container__playlist')
  const header = document.getElementById('header')
  const ctx = canvas.getContext('2d')
  const img = new Image
  img.setAttribute('crossOrigin', 'anonymous')
  img.setAttribute('src', source)
  img.addEventListener('load', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    let color = getColorPlaylist(ctx)
    // console.log(getColorPlaylist(ctx))
    main.style.background = `linear-gradient(180deg, rgba(${color[0]},${color[1]},${color[2]},1) 0%, rgba(0,0,0,1) 100%)`
    header.style.background = `rgb(${color[0]},${color[1]},${color[2]})`

  })
}

const getColorPlaylist = (ctx) => {
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const quality = 20
  const colors = []
  let red = 0
  let blue = 0
  let green = 0
  let count = 0
  for (let i = 0; i < canvas.width * canvas.height; i = i + quality) {
    const offset = i + 4
    const alpha = imgData.data[offset + 3]
    if (alpha > 0) {
      ++count
      red += imgData.data[offset]
      green += imgData.data[offset + 1]
      blue += imgData.data[offset + 2]
      // colors.push({red, green, blue})
      // console.log('%c color', `background: rgba(${red}, ${green}, ${blue}, ${alpha})`)
    }
  }
  red= ~~(red/count);
  green = ~~(green/count);
  blue = ~~(blue/count);
  // console.log('%c color', `background: rgb(${red}, ${green}, ${blue})`)
  return [red, green, blue]
}

const Tracks = async () => {
  const home = null || document.getElementById('content')
  home.innerHTML = ''
  const id = getHash();
  // console.log(id)
  let playlist = await AppController.getPlaylistById(id)
  let time = timeTotal(playlist)
  let songs = playlist.tracks.items
  if (songs.length > 31) songs = songs.slice(0, 30)
  let sourceImg = playlist.images[0].url
  
  // console.log(songs)
  let numberOfTrack = 1;
  let block=  `
  <div class="container-main">
    <div class="main-container__playlist" id="main-container__playlist">
      <div class="playlist__capture">
        <canvas id="canvas" width="200" height="200"></canvas>
      </div>
      <div class="playlist__info">
        <h5>PLAYLIST</h5>
        <h1>${playlist.name}</h1>
        <p class="description">${playlist.description}</p>
        <div class="playlist__info-social-media">
          <p>${playlist.owner.display_name}
          <span>${playlist.followers.total.toLocaleString('en-US')} followers</span>
          <span>${playlist.tracks.total} songs, ${time}</span></p>
        </div>
      </div>
    </div>
  <div class="playlist__controls">
    <div class="playlist__play">
      <img src="${play}" alt="play" width="30" height="30">
    </div>
    <img class="playlist__heart" src="${heart}" alt="heart" width="30" height="30">
    <div class="playlist__continue">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <div class="playlist__table-container title__table">
    <span>#</span>
    <span>TITLE</span>
    <span class="playlist-title__plays">ALBUM</span>
    <span class="playlist-plays">
      <img src="${clock}" width="16">
    </span>
  </div>
  ${songs.map((track) =>
    `
      <div class="playlist__table-container track__height">
        <span>${numberOfTrack++}</span>
        <span class="track-container">
          <span><img src="${track.track.album.images[0].url}" width="40"></span>
          <span class="track-detail">
            <span>${track.track.name}</span>
            <span class="artist">${track.track.artists[0].name}</span>
          </span>
        </span>
        <span class="playlist__album-name">${track.track.album.name}</span>
        <span class="playlist-plays">${msToTime(track.track.duration_ms, true)}</span>
      </div>
    `
    ).join('')
  }
  </div>
  `

  document.getElementById('content').innerHTML = block
  await drawImage(sourceImg)
}

export default Tracks
