import NavRight from '../templates/NavRight.js'
import Header from '../templates/Header.js'
import Home from '../templates/Home.js'
import Tracks from '../templates/Tracks.js'
import Footer from '../templates/Footer.js'
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
  "/": Home,
  "/:id": Tracks,
  "/contact": "Contact",
  '/:pages': Home,
};

const router = async () => {
  const header = null || document.getElementById('header')
  const navRight = null || document.getElementById('nav-right')
  const home = null || document.getElementById('content')
  const footer = null || document.getElementById('player')

  header.innerHTML = await Header()
  navRight.innerHTML = await NavRight()
  footer.innerHTML = await Footer()
  let hash = getHash();
  // console.log(hash)
  let route = await resolveRoutes(hash);
  // console.log(route)
  let render = routes[route] ? routes[route] : Home;
  home.innerHTML = await render()

}

export default router;