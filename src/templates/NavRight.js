import logo from '../assets/img/spotify.svg'
import home from '../assets/img/home.svg'
import library from '../assets/img/library.svg'
import search from '../assets/img/search.svg'
import plus from '../assets/img/plus.svg'
import heart from '../assets/img/heart.svg'
import AppController from '../API/AppController.js'

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const listGenerator = async () => {
  let block = ''
  let playlist = await AppController.playlist(getRandomInt(0,19))

  playlist = playlist[1]
  for  (let i of playlist) {
    block = block + '\n' +
    `
      <a href="#/${i.id}/"><li>${i.name}</li></a>
    `
  }

  return block
}

const NavRight = async () => {
  const view = `
  <div>
    <a href="/index.html"/ ><div class="nav-right__logo">
      <img src="${logo}" alt="logo" width="120" height="36">
    </div></a>
    <div class="menu__container">
      <ul class="nav-right__home">
      <a href="/index.html"/ ><li class="gray__push"><img src="${home}" class="icon__home" width="20" height="20">Home</li></a>
        <li><img src="${search}" class="icon__home" width="20" height="20">Search</li>
        <li><img src="${library}" class="icon__home" width="20" height="20">Your Library</li>
      </ul>
      <ul class="nav-right__create-playlist">
        <li><img src="${plus}" alt="plus" class="icon__home plus" width="20" height="20">Create Playlist</li>
        <li><img src="${heart}" alt="heart" class="icon__home heart" width="20" height="20">Liked Songs</li>
      </ul>
    </div>
    <div class="list__container">
      <ul class="nav-right__top-list" id="nav-right__top-list">
        ${await listGenerator()}
      </ul>
    </div>
  </div>
  `;
  return view;
};

export default NavRight;