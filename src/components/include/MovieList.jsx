/** @format */

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function MoviePopular(props) {
	return (
		<li className="card">
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
	// console.log(popularMovies);
	return (
			<div className='popular__movie'>
					<div className='container'>
							<h2 className="tit">Best Movie</h2>
							<div className='movie__inner'>
								<ul>
									<Swiper
											slidesPerView={3}
											autoplay={{
													delay: 3000,
													disableOnInteraction: false,
											}}
											pagination={{ clickable: true }}
											navigation={true}
											modules={[Navigation, Pagination, Autoplay]}
											className='mySwiper'
									>
									{props.popularMovie.map((movie, index) =>
										index < 10 ? (
										<SwiperSlide key={index}>
											<MoviePopular
												key={index}
												movie={movie}
											/>
										</SwiperSlide>
									) : null
									)}
									</Swiper>
								</ul>
							</div>
					</div>
			</div>
	);
};

export default MovieList;
