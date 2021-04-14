import arrow from '../assets/img/left-arrow.svg'

const Header = () => {
  const view = `
  <a href="javascript: history.go(-1)" class="header__arrow-back">
    <img src="${arrow}" alt="arrow" width="16" height="16">
  </a>
  <div class="header__avatar">
    <img width="28" height="28" src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10203764242125371&height=300&width=300&ext=1620131731&hash=AeTKkPhZ3vUCxI9Kw-k" alt="avatar">
  </div>
  `;
  return view;
};

export default Header;