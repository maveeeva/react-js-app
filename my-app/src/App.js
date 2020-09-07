import React, {Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Header from './components/layout/Header';
import Addtodo from './components/Addtodo';
import Todolist from './components/Todolist';
import About from './components/pages/About';

import axios from 'axios';
import './App.css';

class App extends Component {

state = {
todolist: []
}

componentDidMount(){
	axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
	.then(res => this.setState({todolist:res.data}))
	
}

markComplete= (id) =>{
	this.setState({todolist:this.state.todolist.map(todo => {
		if(todo.id === id) {
			todo.complete = !todo.complete
		}
		return todo;
	})})
	console.log(id)
}

deltodo= (id) =>{
	axios.delete('http://jsonplaceholder.typicode.com/todos/${id}')
	.then(res=>this.setState
			({todolist: [...this.state.todolist.filter(todo => todo.id !==id)]})
		);
	
}
addtodo =(title) => {
	axios.post('https://jsonplaceholder.typicode.com/todos',{title:title,
		compeleted:false}).then(res=>this.setState({
			todolist:[...this.state.todolist,res.data]
		}));
	//this.setState({todolist:[...this.state.todolist, newtodo]})
}

render() {

	return (

			<Router>
			<div className="App">
			<div className = "container">
			<Header/>
			<Route exact path ="/" render ={ props =>(
					<React.Fragment>
					
					<Addtodo addtodo={this.addtodo}/>
					<Todolist todolist ={this.state.todolist} 
					markComplete = {this.markComplete}
					deltodo = {this.deltodo}/>
					</React.Fragment>
			)}/>
			
			<Route path ="/about" component={About}/>
			</div>
			</div>
			</Router>
	);
}
}

export default App;
