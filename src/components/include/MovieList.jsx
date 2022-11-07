/** @format */

import React from "react";

// function ListItem(props) {
// 	return (
// 		<li>
// 			<a href={`https://www.themoviedb.org/movie/${props.popular.id}`}>
// 				<img
// 					src={`https://image.tmdb.org/t/p/w500/${props.popular.poster_path}`}
// 					alt={props.popular.title}
// 				/>
// 				<em>
// 					<span className="title">{props.popular.title}</span>
// 					<span className="star">{props.popular.vote_average}</span>
// 				</em>
// 			</a>
// 		</li>
// 	);
// }

const MovieList = (props) => {
	return (
		<section className="cont__movie">
			<div className="container">
				<div className="movie__inner">
					<ul></ul>
				</div>
			</div>
		</section>
	);
};

export default MovieList;
