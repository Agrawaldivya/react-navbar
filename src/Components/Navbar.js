import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "../Styles/main.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>REACT</h3>
			<nav ref={navRef}>
			<NavLink className="nav-link" to="/" exact>
			Home
		    </NavLink> 
			<NavLink className="nav-link" to="/about" exact>
			About
		    </NavLink> 
			<NavLink className="nav-link" to="/education" exact>
			Education
		    </NavLink> 
			<NavLink className="nav-link" to="/certificates" exact>
			Certificates
		    </NavLink> 
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars	 />
			</button>
		</header>
	);
}

export default Navbar;
