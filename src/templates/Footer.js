import download from '../assets/img/download.svg'

const Footer = () => {
  const view = `
    <div id="install-app">
      <img src="${download}" alt="download" width="24">
      <a href="/">Install App</a>
    </div>
  `;
  return view;
};

export default Footer;