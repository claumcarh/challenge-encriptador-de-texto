import logo from "@/assets/images/logo.svg";
import "@/assets/styles/components/header.scss";
import "@/assets/styles/components/textVisualizer.scss";
import "@/assets/styles/components/textArea.scss";

function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="/">
        <img className="header__logo-img" src={logo} alt="" />
      </a>
    </header>
  );
}

export default Header;