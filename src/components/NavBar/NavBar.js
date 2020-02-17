import React, { Component } from 'react';

import './../NavBar/NavBar.scss';

class NavBar extends Component {
	render() {
		return (
			<header className="NavBar">
				<div className="NavBar__container">
					<div className="NavBar__container-logo">
						<div className="NavBar__logo">Srishailam Dasari</div>
					</div>
					<div className="NavBar__nav-items">
						<div className="">About</div>
						<div className="">Work</div>
						<div className="">Contact Me</div>
					</div>
				</div>
			</header>
		);
	}
}

export default NavBar;
