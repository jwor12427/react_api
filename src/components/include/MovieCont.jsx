/** @format */

import React from "react";

function MovieItem(props) {
	return (
		<li>
			<a href={`https://www.themoviedb.org/movie/${props.movie.id}`}>
				<img
					src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
					alt={props.movie.title}
				/>
				<em>
					<span className="title">{props.movie.title}</span>
					<span className="star">{props.movie.vote_average}</span>
				</em>
			</a>
		</li>
	);
}

const MovieCont = (props) => {
	// console.log(movies);
	return (
		<section className="cont__movie">
			<div className="container">
				<h2 className="tit">Movie List</h2>
				<div className="movie__inner">
					<ul>
						{props.movies.map((movies, index) => (
							<MovieItem
								key={index}
								movie={movies}
							/>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default MovieCont;
