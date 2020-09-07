import React, {Component} from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {

	getStyle =() => {

		return {
			background:'#f4f4f4',
			padding:'10px',
			borderBottom :'1px #ccc dotted',
			textDecoration : this.props.todo.completed?
					'line-through':'none'

		}
	}

	

	render() {
const {id, title} = this.props.todo;
		
  return (
		  
<div style= {this.getStyle()}>
<p>
<input type = "checkbox"  onChange = {this.props.markComplete.bind
		(this, id)}/>{''}
{title}
<button onClick={this.props.deltodo.bind(this, id)} style = {btnstyle}> x</button>
</p>
</div>
)
}
}

const btnstyle ={
		background :'#ff0000',
		color:'#fff',
		padding:'5px 9px',
		border:'none',
		borderRadius: '50%',
		cursor:'pointer',
		float:'right'
}
//TodoItem.propTypes = {
//		todo: PropTypes.object.isRequired
//}

TodoItem.propTypes = {
		todo: PropTypes.object.isRequired,
		markComplete: PropTypes.func.isRequired,
		deltodo: PropTypes.func.isRequired
}


export default TodoItem
