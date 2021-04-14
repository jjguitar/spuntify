import router from './routes'

window.addEventListener('load', router)
window.addEventListener('hashchange', router)

window.onbeforeunload = function() {
  localStorage.removeItem('playList');
};