import React, { Component } from 'react';

import './../Main/Main.scss';

const MyImage = () => {
	return <div className="MyImage" />;
};

class Main extends Component {
	render() {
		return (
			<div className="Main">
				<MyImage />
			</div>
		);
	}
}

export default Main;
