import React from "react";
//'http://www.omdbapi.com/?apikey=2e1e970c&s=*'+variable_from_html_search+'*&page='+i
import {Observer} from "../helpers/intersectionObserver";

const observer = new Observer();

export const Movie = (props)=>{
	let {Title,Year,Poster,Type} = props;
	const ref = React.useRef(null);

	if (!Poster || Poster==NaN || Poster==="N/A") 
		Poster = "./images/placeholder.png";

	React.useEffect(()=>{
		observer.observe(ref.current);
	},[]);

	return(
	<article ref = {ref} className="movie" 
		style={{"background-image":"url("+Poster+")"}}>
		<div className="movie-body">
			<h2 className="movie-title">{Title}</h2>
			<div className="movie-text">
				<p className="movie-year">Year: {Year}</p>
				<p className="movie-type">Type: {Type}</p>
			</div>
		</div>
	</article>
	);
}

