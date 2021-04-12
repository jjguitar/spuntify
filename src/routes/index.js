import NavRight from '../templates/NavRight.js'
import Header from '../templates/Header.js'
import Main from '../templates/Main.js'
import Footer from '../templates/Footer.js'
import APIController from '../API/APIController.js'

const getCookie = name => {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const router = async () => {
  await APIController.getToken()
  const genres = await APIController.getGenres(getCookie('BearerToken'))
  let gen =[]
  genres.forEach(element => gen.push({
    id: element.id,
    name: element.name,
  }));
  // console.log(genres)
  // console.log(gen[0].id)
  let playlist = await APIController.getPlaylistByGenre(getCookie('BearerToken'), gen[0].id)
  // console.log(playlist[0].tracks.href)
  let tracks = await APIController.getTracks(getCookie('BearerToken'), playlist[0].tracks.href)
  // console.log(tracks[0].track.name)
  const header = null || document.getElementById('header')
  const navRight = null || document.getElementById('nav-right')
  const main = null || document.getElementById('content')
  const footer = null || document.getElementById('player')
  header.innerHTML = await Header()
  navRight.innerHTML = await NavRight()
  main.innerHTML = await Main(playlist)
  footer.innerHTML = await Footer()
  // console.log(playlist)

}

export default router;