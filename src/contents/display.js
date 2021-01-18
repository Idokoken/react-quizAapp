import React from 'react';
import './Display.css';

class Display extends React.Component {
	
	render() {
		return (
		  <div>
		    <h3 className='score'>You scored {this.props.score} / 5</h3>
		    <button className='playBtn' onClick={this.props.playAgain}>Play Again</button>
		  </div>
		)
	}
}

export default Display;