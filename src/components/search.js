import React from "react";
import axios from "axios";

import {Movie} from "./movie";
import json from "../auxJson";

import "../css/search.css";

const Search = (props)=>{
	const {fetchMovies} = props;
	const [loaded,setLoaded] = React.useState(false);

	React.useEffect(()=>{
		setInterval(()=>{
			setLoaded(true);
		},500);
	},[]);

	return(
	<div className="search">
		<h1 className={"search-title"+(loaded?"":"-unvisible")}> Search Movie </h1>
		<div className="search-input-container">
		<label>
			<input className={"search-input"+(loaded?"":"-unvisible")} type="text" onKeyDown={fetchMovies} placeholder="Type its name"/>
			<i className={"fa fa-search search-icon"+(loaded?"":"-unvisible")}></i>
		</label>
		</div>
	</div>
	);
}

const Results = (props)=>{
	let {loading,show} = props;
	const [loaded,setLoaded] = React.useState(false);

	React.useEffect(()=>{
		setInterval(()=>{
			setLoaded(true);
		},500);
	},[]);

	return(
	<div className={"search-results"+(loaded?"":"-unvisible")}>
		<h2 className="search-results-header"> 
		{show?"Loading...":loading.length+" Results"}</h2>

		<div className="search-results-body">
		{
			loading.map((movie,id)=>{
				return <Movie key={id} {...movie}/>
			})
		}
		</div>
	</div>
	);
}

const MainSearch = ()=>{
	const [loading,setLoading] = React.useState([]);
	const [showData,setShowData] = React.useState(false);

	const fetchMovies = (e)=>{
		if (e.key==="Enter"){
			const movie = e.target.value;
			setShowData(true);
			axios({
			  method: 'get',
			  url: 'http://www.omdbapi.com/?apikey=475f09ed&s='+movie
			})
			.then((response)=>{
				setLoading([...response.data.Search]);
				setShowData(false);
			})
			.catch((err)=>{
				console.log(err.message)
				setLoading([...json.Search]);
			});
		}
	}

	return(
	<div className="search-container">
		<Search fetchMovies={fetchMovies.bind(this)}/>
		<Results show={showData} loading={loading}/>
	</div>
	);
}

export default MainSearch;