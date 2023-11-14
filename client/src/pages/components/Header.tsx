import Link from "next/link";
import React, { useState } from "react";


export default function Header() {
  /**
   * The initial state of the hamburger menu is closed
   */
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    /**
     * Toggle the menuIsOpen state when the hamburger icon is clicked
     */
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <header className="topHeader">
      <nav className="topNav">
        {/* Hamburger menu icon */}
        <div className="hamburger" onClick={toggleMenu}>
        </div>
        
        {/* Conditional class for the ul element */}
        <ul className={`topUl ${menuIsOpen ? 'open' : ''}`}>
          <li className="topHome">
            <Link href="/">Home</Link>
          </li>
          {/* <li className="topAbout">
            <Link href="/about">About</Link>
          </li> */}
          <li className="topContact">
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
