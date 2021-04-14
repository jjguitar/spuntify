import getHash from '../utils/getHash'
import AppController from '../API/AppController.js'
import play from '../assets/img/play.svg'
import heart from '../assets/img/heart.svg'
import clock from '../assets/img/time.svg'
import timeTotal from '../utils/timeTotal.js'
import msToTime from '../utils/msToTime.js'
import broken from '../assets/img/broken.png'
import drawImageTracks from '../utils/drawImageTracks.js'

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
        <img loading="lazy" src="${play}" alt="play" width="30" height="30">
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
        <img loading="lazy" src="${clock}" width="16">
      </span>
    </div>
    ${songs.map((track) =>
    `
    <div class="playlist__table-container track__height">
      <span>${numberOfTrack++}</span>
      <span class="track-container">
        <span><img src="${track.track !== null ? track.track.album.images[0].url : broken}" width="40"></span>
        <span class="track-detail">
          <span>${track.track !== null ? track.track.name : 'Unknown'}</span>
          <span class="artist">${track.track !== null ? track.track.artists[0].name : 'Unknown'}</span>
        </span>
      </span>
      <span class="playlist__album-name">${track.track !== null ? track.track.album.name : 'Unknown'}</span>
      <span class="playlist-plays">${msToTime(track.track !== null ? track.track.duration_ms : 0, true)}</span>
    </div>
    `
    ).join('')
  }
  </div>
  `

  document.getElementById('content').innerHTML = block
  await drawImageTracks(sourceImg)
}

export default Tracks
