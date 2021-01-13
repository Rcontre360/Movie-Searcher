import React from "react";

import "../css/navbar.css";

const items = [
	{text:"Search"},
	{text:"More"},
	{text:"About"}
]

const ListItem = (props)=>{
	if (!props.text)
		props.text = "default"

	return(
	<li className="navbar-li">
		<a className="navbar-link">{props.text}</a>
	</li>
	);
}

export const Navbar = ()=>{
	return(
		<nav className="navbar">
			<h1 className="navbar-title"> Movie Searcher </h1>

			<div className="navbar-list">
				<ul className="navbar-ul">
				{
					items.map((i,id)=>
						<ListItem key={id}{...i}/>)
				}
				</ul>
			</div>
		</nav>
	);
}

