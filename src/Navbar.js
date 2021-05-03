import './navbar.css';
import './style.css';

function Navbar() {
  return (
    <div className="Navbar">

        <nav>
            <ul class="menuItems">
            <li><a className="card" href='' data-item='Home'>Home</a></li>
            <li><a className="card" href='' data-item='About'>About</a></li>
            <li><a className="card" href='' data-item='Contact'>Contact us</a></li>
            </ul>
        </nav>
    </div>
  );
}

export default Navbar;
