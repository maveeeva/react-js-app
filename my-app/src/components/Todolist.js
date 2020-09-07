import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
class Todolist extends Component {

	
	render() {

		return this.props.todolist.map((todo) =>(
				<TodoItem key= {todo.id} todo ={todo} markComplete = {
						this.props.markComplete}  deltodo ={this.props.deltodo}/>
		));
	}
}

//protypes
Todolist.propTypes = {
		todolist: PropTypes.array.isRequired,
		markComplete: PropTypes.func.isRequired,
		deltodo: PropTypes.func.isRequired
}
export default Todolist
