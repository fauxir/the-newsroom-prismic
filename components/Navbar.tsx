import { useState } from "react";
import Logo from "/home/michael/Desktop/Training/Training/the-newsroom/components/Logo";
import IconMenuClose from "/home/michael/Desktop/Training/Training/the-newsroom/components/IconMenuClose";
import MenuIcon from "/home/michael/Desktop/Training/Training/the-newsroom/components/MenuIcon";

function NavBar() {
  const [showNavigation, setShowNavigation] = useState(false);

  return (
    <div>
        <nav className="navigation">
        <div className="container">
          <Logo />

          <div className={`menu ${showNavigation && "show"}`}>
            <ul>
              <button className="icon" onClick={() => setShowNavigation(false)}>
                <IconMenuClose />
              </button>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#new">New</a>
              </li>
              <li>
                <a href="#popular">Popular</a>
              </li>
              <li>
                <a href="#trending">Trending</a>
              </li>
              <li>
                <a href="#categories">Categories</a>
              </li>
            </ul>
          </div>
          <button className="icon" onClick={() => setShowNavigation(true)}>
            <MenuIcon />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
