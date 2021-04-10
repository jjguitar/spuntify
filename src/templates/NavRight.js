import logo from '../assets/img/spotify.svg'
import home from '../assets/img/home.svg'
import library from '../assets/img/library.svg'
import search from '../assets/img/search.svg'
import plus from '../assets/img/plus.svg'
import heart from '../assets/img/heart.svg'

const NavRight = () => {
  const view = `
  <div class="container__nav-right">
    <div class="nav-right__logo">
      <img src="${logo}" alt="logo">
    </div>
    <ul class="nav-right__home">
      <li class="gray__push"><img src="${home}" class="icon__home" width="20" height="20">Home</li>
      <li><img src="${search}" class="icon__home">Search</li>
      <li><img src="${library}" class="icon__home">Your Library</li>
    </ul>
    <ul class="nav-right__create-playlist">
      <li><img src="${plus}" alt="plus" class="icon__home plus">Create Playlist</li>
      <li><img src="${heart}" alt="heart" class="icon__home heart">Liked Songs</li>
    </ul>
    <ul class="nav-right__top-list">
      <li>Franca Pizarra</li>
      <li>Top Songs</li>
      <li>E-Worship</li>
      <li>This is Don</li>
      <li>Favoritas de la radio</li>
      <li>Discovery Weekly</li>
    </ul>
  </div>
  <a href="/"><span></span>Install App</a>
  `;
  return view;
};

export default NavRight;