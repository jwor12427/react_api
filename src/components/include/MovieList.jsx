/** @format */

import React from "react";

function MoviePopular(props) {
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

const MovieList = (props) => {
	return (
		<section className="cont__movie">
			<div className="container">
				<div className="movie__inner">
					<ul>
						{props.popularMovie.map((movie, idx) => (
							<MoviePopular
								key={idx}
								movie={movie}
							/>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default MovieList;
