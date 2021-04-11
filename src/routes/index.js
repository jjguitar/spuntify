import NavRight from '../templates/NavRight.js'
import Header from '../templates/Header.js'
import Main from '../templates/Main.js'
import Footer from '../templates/Footer.js'

const router = async () => {
  const header = null || document.getElementById('header')
  const navRight = null || document.getElementById('nav-right')
  const main = null || document.getElementById('content')
  const footer = null || document.getElementById('player')
  header.innerHTML = await Header()
  navRight.innerHTML = await NavRight()
  main.innerHTML = await Main()
  footer.innerHTML = await Footer()

}

export default router;