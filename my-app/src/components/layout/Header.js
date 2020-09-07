import React from 'react';
import {Link} from 'react-router-dom'; 
function Header() {
	return (
			<header style = {headerStyle}>
			<h1 style = {{ align : 'center'}}>My React Working list</h1>
			<Link  style ={{color:'red',font:'bold' }} to="/"> Home</Link>|
			<Link style ={{color:'red',font:'bold' }} to="/about">About</Link>
			</header>		
	)
}

const headerStyle ={
		background:'teal',
		color: '#fff',
		textAligh:'center',
		width:'auto'
}


export default Header;