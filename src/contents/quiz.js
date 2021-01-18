import React from 'react';

class Quiz extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			option: this.props.options
			
		}
	} 
/*
selectAnswer = ()	=> {
	this.setState({option: [text]})
}
*/	
	render() {
		const optionDetail = this.state.option.map((text, index) => {
			return (
			<div>
			<button key={index} className='ansButton' 
			onClick={() => {
				this.setState({option: [text]})
				this.props.choosen(text)
     }	}>{text}</button>
			</div>
			)
		})	
		return (
		 <div>
		   <h4>{this.props.question}</h4>
		   {optionDetail}
		   
		 </div>
		)
	}
}

export default Quiz;