import React,{Component} from 'react';
import Cardlist from "./Cardarray";
import "./App.css"
import Searchbox from "./searchbox";
import Scroll from "./Scroll";

class App extends Component{
	constructor(){
		super();
		 this.state={
			robots:[],
			searchfield:'',
		}
		
	};
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=>response.json())
			.then(user => this.setState({robots:user}));
			;
		console.log("mount");
	};
  	OnChangeSearch= (event)=>{
		this.setState({searchfield:event.target.value});
		console.log('change');
		
	};

	render(){
		const {robots,searchfield}=this.state;
		const filterarray=robots.filter((user,i)=>{
			return( user.name.toLowerCase().includes(searchfield.toLowerCase()))
	

		});
		
		return !robots.length
		?
			
			<div className="tc">
				<h1 className="f2 dark-green">loading..</h1>
			</div>
		:
		
			
			<div className="tc">
				<h1 className="f2 dark-green"> robofriends</h1>
				<Searchbox search={this.OnChangeSearch}/>
				<Scroll >
				<Cardlist className="in"robots={filterarray}/>
				</Scroll>
			</div>
		
};}


export default App;