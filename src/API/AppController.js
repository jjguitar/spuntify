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

const AppController = (() => {

  const _playlist = async (genre) => {
    let gen =[]
    await APIController.getToken()
    const genres = await APIController.getGenres(getCookie('BearerToken'))
    genres.forEach(element => gen.push({
      id: element.id,
      name: element.name,
    }));
    return [gen[genre], await APIController.getPlaylistByGenre(getCookie('BearerToken'), gen[genre].id)]
  }

  const _getTracks = async (endPoint) => {
    return await APIController.getTracks(getCookie('BearerToken'), endPoint)
  }

  const _getPlaylistById = async (id) => {
    return await APIController.getPlaylistById(getCookie('BearerToken'), id)
  }

  return {
    playlist(genre) {
        return _playlist(genre);
    },
    getTracks(endPoint) {
      return _getTracks(endPoint);
    },
    getPlaylistById(id) {
      return _getPlaylistById(id);
    },
  }
})();

export default AppController