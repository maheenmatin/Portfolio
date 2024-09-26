import "./index.scss";

const BurgerMenu = ({ onClick }) => {
  return (
    <svg viewBox="1 1 22 22" xmlns="http://www.w3.org/2000/svg" id="burgermenu-svg" onClick={onClick}>
      <path className="burgermenu-outline" d="M4 18L20 18" />
      <path className="burgermenu-outline" d="M4 12L20 12" />
      <path className="burgermenu-outline" d="M4 6L20 6" />

      <path className="burgermenu-line" d="M4 18L20 18" />
      <path className="burgermenu-line" d="M4 12L20 12" />
      <path className="burgermenu-line" d="M4 6L20 6" />
    </svg>
  );
};

export default BurgerMenu;
