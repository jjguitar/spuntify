import NavRight from '../templates/NavRight.js'
import Header from '../templates/Header.js'

const router = async () => {
  const header = null || document.getElementById('header')
  const navRight = null || document.getElementById('nav-right')
  header.innerHTML = await Header()
  navRight.innerHTML = await NavRight()

}

export default router;