import { v4 as uuidv4 } from 'uuid';

const quizApi = [
 {
 	question: "who is the president of Nigeria",
 	options: ["Buhari", "Atiku", "EroFile", "Peter Obi"], 
 	answer: "Buhari",
 	Id: uuidv4()
 },
 {
 question: "which of the following is not a country in Africa",
 	options: ["Nigeria", "Kenya", "Spain", "Tunisia"], 
 	answer: "Spain",
 	Id: uuidv4()
 },
 {
 question: "which of the following is not a city America",
 	options: ["Washington", "Texas", "London", "Califonia"], 
 	answer: "London",
 	Id: uuidv4()
 },
 {
 question: "Who is the richest man in the world",
 	options: ["Jeef Bezos", "Bill gate", "Dangote", "Slim Carlos"], 
 	answer: "Jeef Bezos",
 	Id: uuidv4()
 	},
 	{
 	question: "Which year did Nigeria get her independence",
 	options: ["1955", "1999", "1960", "1962"], 
 	answer: "1960",
 	Id: uuidv4()
 	}
]

export default (n = 5) => Promise.resolve(quizApi.sort(() => 0.5 - Math.random()).slice(0, n));