import NavRight from '../templates/NavRight.js'
import Header from '../templates/Header.js'
import Home from '../pages/Home.js'
import Tracks from '../pages/Tracks.js'
import Footer from '../templates/Footer.js'
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
  "/spuntify": Home,
  "/:id": Tracks,
  "/contact": "Contact",
  '/:pages': Home,
};

const router = async () => {
  const header = null || document.getElementById('header')
  const navRight = null || document.getElementById('nav-right')
  const navList = null || document.getElementById('nav-right__top-list')
  const home = null || document.getElementById('content')
  const footer = null || document.getElementById('player')

  if (navList !== null && navList.hasChildNodes()) {
    //console.log('children')
  } else {
    header.innerHTML = await Header()
    navRight.innerHTML = await NavRight()
    footer.innerHTML = await Footer()
  }

  let hash = getHash();
  console.log(hash)
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Home;

  home.innerHTML = await render()

}

export default router;