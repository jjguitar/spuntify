import getHash from '../utils/getHash'
import AppController from '../API/AppController.js'
import play from '../assets/img/play.svg'
import heart from '../assets/img/heart.svg'
import clock from '../assets/img/time.svg'

const timeTotal = (playlist) => {
  let tracks = playlist.tracks.items
  let time = 0;
  tracks.map((track) => {
    time = time + track.track.duration_ms
  })

  return msToTime(time)
}

function msToTime(duration, option) {
  var seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? hours : hours;
  minutes = (minutes < 10) ? minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  if (option) {
    return minutes + ':' + seconds
  } else {
    return hours + " hr " + minutes + " min" ;
  }
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

  // console.log(songs)
  let numberOfTrack = 1;
  return `
  <div class="container-main">
    <div class="main-container__playlist">
    <div class="playlist__capture">
      <img src="${playlist.images[0].url}" width="64" height="64">
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
}

export default Tracks
