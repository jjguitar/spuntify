
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

const AppController = (function() {

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const _playlist = async () => {
    let gen =[]
    await APIController.getToken()
    const genres = await APIController.getGenres(getCookie('BearerToken'))
    genres.forEach(element => gen.push({
      id: element.id,
      name: element.name,
    }));
    console.log(gen)
    let listRandom = getRandomInt(0, gen.length)
    // console.log(gen[listRandom])
    return [gen[listRandom], await APIController.getPlaylistByGenre(getCookie('BearerToken'), gen[listRandom].id)]
  }

  const _getTracks = async (endPoint) => {
    return await APIController.getTracks(getCookie('BearerToken'), endPoint)
  }

  return {
    playlist() {
        return _playlist();
    },
    getTracks(endPoint) {
      return _getTracks(endPoint);
    },
  }
})();

export default AppController