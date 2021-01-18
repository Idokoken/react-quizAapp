import React from 'react';
import './App.css';
import quizApi from './contents/quizApi'
import Quiz from './contents/quiz'
import Display from './contents/display'
//import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {
	state = {
		quizStore: [],
		score: 0, 
		response: 0
		
	}
	getQuestion = () => {
		quizApi()
		.then(result => this.setState({quizStore: result}))
		 
	}
	
	playAgain = () => {
		this.getQuestion();
		this.setState({
			score: 0, 
		response: 0
		})
	}
	
	componentDidMount() {
		this.getQuestion();
	}
	
	quizAnswer = (userAnswer, correctAnswer) => {
		if (userAnswer === correctAnswer) {
			this.setState({score: this.state.score + 1})
		}
		this.setState({response: this.state.response < 5 ? this.state.response + 1 : 5 })
	}
	
  render() {
  	const apiDetails = this.state.response < 5 && this.state.quizStore.length && this.state.quizStore.map(({question, options, answer, Id}) => {
  		
  		 return (
  		<div>
  	   	<Quiz question={question} options={options} key={Id} choosen={ userAnswer => this.quizAnswer(userAnswer, answer)} />
  		</div> 
  		)
  	})
  	  return (
  	  <div className='quiz'>
  	   <h2>A simple React Quiz</h2>
  	   {apiDetails}	
  	   {this.state.response ? (<Display score={this.state.score} playAgain={this.playAgain} />) : null}
  	   
  	  </div>
  );  
}
}

export default App; 