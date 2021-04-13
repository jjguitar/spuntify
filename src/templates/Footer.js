import download from '../assets/img/download.svg'
import heart from '../assets/img/heart.svg'
import max from '../assets/img/max.svg'
import back from '../assets/img/back-song.svg'
import play from '../assets/img/play.svg'
import random from '../assets/img/random.svg'
import broken from '../assets/img/broken.png'
import repeat from '../assets/img/repeat.svg'
import expand from '../assets/img/expand.svg'
import micro from '../assets/img/micro.svg'
import playlist from '../assets/img/playlist.svg'
import sync from '../assets/img/sync.svg'
import volume from '../assets/img/volume.svg'
import AppController from '../API/AppController.js'

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const getSong = async () => {
  let playlist;
  playlist = await AppController.playlist(getRandomInt(0,19))
  playlist = playlist[1]
  let tracks = playlist[getRandomInt(0, playlist.length - 1)]
  let endPoint = tracks.id
  console.log(endPoint)
  let songs = await AppController.getTracks(endPoint)
  songs = songs[0].track
  let song = songs === null ? 'Unknown' : songs.name
  let cover = songs === null ? broken : songs.album.images[2].url
  let artist = songs === null ? 'Unknown' : songs.artists[0].name

  return [song, cover, artist]
}

const Footer = async () => {

  let dataSong = await getSong()

  const view = `
    <div id="install-app">
      <img src="${download}" alt="download" width="24">
      <a href="/">Install App</a>
    </div>
    <div class="player-control">
      <div class="player__song">
        <div class="player__song-actual">
          <img src="${dataSong[1]}" width="64" height="64" alt="cover">
        </div>
        <div class="player__song-tittle">
          <h4>${dataSong[0]}</h4>
          <p>${dataSong[2]}</p>
        </div>
        <img class="heart__actual-song"src="${heart}" alt="heart" width="16">
        <img src="${max}" alt="max">
      </div>
      <div class="player__controls-1">
        <div class="controls">
          <img src="${random}" width="16">
          <img src="${back}" width="16">
          <div class="play">
            <img src="${play}" width="16">
          </div>
          <img class="next" src="${back}" width="16">
          <img src="${repeat}" width="16">
        </div>
        <div class="progress-bar">
          <p>0:30</p>
          <div class="bar-1">
            <div class="bar-2"></div>
          </div>
        </div>
      </div>
      <div class="player__controls-2">
        <img src="${micro}" alt="icon" width="16">
        <img src="${playlist}" alt="icon" width="16">
        <img src="${sync}" alt="icon" width="16">
        <img src="${volume}" alt="icon" width="16">
        <div class="bar-1">
          <div class="bar-2"></div>
        </div>
        <img src="${expand}" alt="icon" width="16">
      </div>
    </div>
  `;
  return view;
};

export default Footer;