import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
	state = {
		width: window.innerWidth
		};
	
	handleResize = this.handleResize.bind(this);		
	
	handleResize(){
		this.setState({width:window.innerWidth});
		}
	componentDidMount() {
			window.addEventListener('resize', this.handleResize);
			fetch("images.json").then(res => res.json()).then(
						(result) => {
							this.setState({
							isLoaded: true,
							items: result
							});
						},
						(error) => {
							this.setState({
								isLoaded: true,
								error
							});
						}
					)
			}
	componentWillUnmount() {
			window.removeEventListener('resize', this.handleResize);
		}
	render() {
		const { error, isLoaded, items } = this.state;
    if (error)return (<div>error</div>);
	else if(!isLoaded)return (<div>loading...</div>);
	else
		{
			if(this.state.width < 500)
				return (<div className="column">
						{items.map((ob, a) => (
							<div key={a}><img src={ob['url']} alt=""></img></div>
							))}
					</div>	
					);
			else if(this.state.width < 820)
				return (<React.Fragment>
					<div className="column">
						{items.map((ob, a) => {if(a%2===0)return (
							<div key={a}><img src={ob['url']} alt=""></img></div>
							)})}
					</div>
					<div className="column">
						{items.map((ob, a) => {if(a%2===1)return (
							<div key={a}><img src={ob['url']} alt=""></img></div>
							)})}
					</div>
				</React.Fragment>	
				);
			else
				return (<React.Fragment>
					<div className="column">
						{items.map((ob, a) => {if(a%3===0)return (
							<div key={a}><img src={ob['url']} alt=""></img></div>
							)})}
					
					</div>
					<div className="column">
						{items.map((ob, a) => {if(a%3===1)return (
							<div key={a}><img src={ob['url']} alt=""></img></div>
							)})}
					</div>
					<div className="column">
						{items.map((ob, a) => {if(a%3===2)return (
							<div key={a}><img src={ob['url']} alt=""></img></div>
							)})}
					</div>
				</React.Fragment>
					);
	}
				}
		}
export default App;
