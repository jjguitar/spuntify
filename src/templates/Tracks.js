import getHash from '../utils/getHash'
import AppController from '../API/AppController.js'

const timeTotal = (playlist) => {
  let tracks = playlist.tracks.items
  let time = 0;
  tracks.map((track) => {
    time = time + track.track.duration_ms
  })

  return msToTime(time)
}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? hours : hours;
  minutes = (minutes < 10) ? minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + " hr " + minutes + " min" ;
}

const Tracks = async () => {
  const id = getHash();
  // console.log(id)
  let playlist = await AppController.getPlaylistById(id)
  console.log(playlist)
  let time = timeTotal(playlist)
  let songs = playlist.tracks.items
  // console.log(songs)
  return `
  <div class="container-main">
  <div class="main-container__playlist">
    <div class="playlist__capture">
      <img src="${playlist.images[0].url}" width="64" height="64">
    </div>
    <div class="playlist__info">
      <h5>PLAYLIST</h5>
      <h1>${playlist.name}</h1>
      <p>${playlist.description}</p>
      <div class="playlist__info">
        <h6>${playlist.owner.display_name}</h6>
        <p>${playlist.tracks.total}</p>
        <p>${time}</p>
        <p>${playlist.followers.total.toLocaleString('en-US')} followers</p>
      </div>
    </div>
  </div>
  ${songs.map((track) =>
    `
      <div>${track.track.name}</div>
    `
    ).join('')
  }
  </div>
  `
}

export default Tracks
