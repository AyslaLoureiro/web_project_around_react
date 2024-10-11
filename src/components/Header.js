import Logo from "../images/Vector.png";
import Line from "../images/Line.png";

export default function Header() {
  return (
    <>
      <header className="header">
        <img src={Logo} alt="logo" className="header__logo" />
        <img src={Line} alt="line" className="header__line" />
      </header>
    </>
  );
}
