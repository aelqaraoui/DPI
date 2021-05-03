import React from 'react';
import './style.css';

class Card extends React.Component {
	render() 
	{
		return (
			<div className="card">
				<div className="skill-level">
					<span></span>
				<h2>{this.props.title}</h2>
				</div>
	
				<div className="skill-meta">
					<span>{this.props.text}</span>
				</div>
			</div>
			);
	}
    	
}

export default Card;