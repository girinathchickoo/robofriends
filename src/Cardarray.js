import React from 'react';

import Card from "./Card";



		

const Cardlist=({robots})=>{
 
	
	return( 
		<div>
			{robots.map((user,i)=>{
				

			 return(
			 	<div className="in" key={i}>
			 	<Card key={i} id={user.id} email={user.email} name={user.name} />
                 {console.log(user.name)}
			 	</div> ) })}
		</div>
		);
	
	};	





export default Cardlist;