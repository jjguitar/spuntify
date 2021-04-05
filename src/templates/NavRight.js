import logo from '../assets/img/spotify.svg'

const NavRight = () => {
  const view = `
  <div class="nav-right__logo">
    <img src="${logo}" alt="logo">
  </div>
  <ul>
    <li>Home</li>
    <li>Search</li>
    <li>Your Library</li>
  </ul>
  <ul>
    <li><span></span>Create Playlist</li>
    <li><span></span>Liked Songs</li>
  </ul>
  <ul>
    <li>Franca Pizarra</li>
    <li>Top Songs</li>
    <li>E-Worship</li>
    <li>This is Don</li>
    <li>Favoritas de la radio</li>
    <li>Discovery Weekly</li>
  </ul>
  <a href="/"><span></span>Install App</a>
  `;
  return view;
};

export default NavRight;