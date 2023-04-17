import { useState } from "react";
import Logo from "./Logo";
import IconMenuClose from "./IconMenuClose";
import MenuIcon from "./MenuIcon";
import Link from "next/link";

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
                <Link href="/">Home</Link>
              </li>
              <li>
                <a href="#new">New</a>
              </li>
              <li>
                <Link href="/popular-articles">Popular</Link>
              </li>
              <li>
                <Link href="/trending-articles">Trending</Link>
              </li>
              <li>
                <Link href="/article-categories">Categories</Link>
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
