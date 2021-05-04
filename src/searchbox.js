import React from 'react';


const Searchbox=({search})=>{
	return(
		<div className="pa2 ma2">
		<input 
		className="bg-lightest-blue pa2 ba"
		type="search" 
		placeholder="search friends"
		onChange={search}/>
		</div>);
}


export default Searchbox;