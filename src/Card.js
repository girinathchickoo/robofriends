import React from 'react';
import './card.css';



const card=(props)=>{
	
		
			return(
		<div className="tc dib bg-light-green pa2 ma2  ba4 shadow-2 grow" >
			<img alt="robo"  src={`https://robohash.org/${props.id}`} />
			<div >
				<h2>{props.name}</h2>
				<h3>{props.email}</h3>
			</div>
		</div>
	
);
}


export default card;