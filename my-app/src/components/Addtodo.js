import React, {Component} from 'react';
import PropTypes from 'prop-types'; 

class Addtodo extends Component {
	state ={
			name:'',
			id:''
	}
	onChange= (e)=> this.setState({[e.target.name]:e.target.value,[e.target.id]:e.target.value});

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addtodo(this.state.name,this.state.id);
		this.setState({name:'',id:''});
	}
	render() {

  return (
	<form onSubmit={this.onSubmit} style ={{display:'flex'}}>
	<input type = "text" name= "name" 
		style ={{flex:'1'}}
		placeholder ="Add to do..."
			value = {this.state.name}
	onChange = {this.onChange}/>
	
	<input type ="submit"
		value ="submit" 
			className ="btn"
				style ={{flex:'1'}}/>
	</form>
  )
}
}

Addtodo.propTypes = {
		addtodo: PropTypes.func.isRequired
		
}

export default Addtodo
