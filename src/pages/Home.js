import AppController from '../API/AppController.js'
import cardGenerator from '../templates/cardGenerator.js'
import cardGeneratorList from '../templates/cardGeneratorList.js'

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const Home = async () => {

  let playListTop = localStorage.getItem('playList');

  if (!(playListTop != null && playListTop != "" && playListTop != false && playListTop != undefined)){
    console.log('consumió')
    playListTop = []
    playListTop.push(await AppController.playlist(0))
    playListTop.push(await AppController.playlist(getRandomInt(1, 20)))
    playListTop.push(await AppController.playlist(getRandomInt(1, 20)))
    playListTop.push(await AppController.playlist(getRandomInt(1, 20)))
    localStorage.setItem('playList', JSON.stringify(playListTop))
  } else {
    console.log('no consumió')
    playListTop = JSON.parse(playListTop)
  }
  console.log(playListTop)
  const view = `
  <div class="container-main">
    <section class="greetings">
      <h1 class="content__tittle-top">Good evening</h1>
      <div class="container__greeting">
        ${await cardGenerator(playListTop[0])}
      </div>
    </section>
    ${await cardGeneratorList(playListTop)}
  </div>
  `;
  return view;
};

export default Home;