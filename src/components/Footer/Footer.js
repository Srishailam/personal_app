import React, { Component } from 'react';

import './../Footer/Footer.scss';

class Footer extends Component {
	render() {
		return (
			<footer className="Footer">
				<div className="Footer__container">Made with love. {new Date().getFullYear()}</div>
			</footer>
		);
	}
}

export default Footer;
