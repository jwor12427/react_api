/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function MoviePopular(props) {
	return (
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
	);
}

const MovieList = (props) => {
	// console.log(popularMovies);
	return (
		<div className="popular__movie">
			<div className="container">
				<h2 className="tit">Best Movie</h2>
				<div className="movie__inner">
					<div className="container">
						<Swiper
							effect={"coverflow"}
							grabCursor={true}
							centeredSlides={true}
							slidesPerView={"auto"}
							coverflowEffect={{
								rotate: 50,
								stretch: 0,
								depth: 100,
								modifier: 1,
								slideShadows: true,
							}}
							autoplay={{
								delay: 2500,
								disableOnInteraction: false,
							}}
							initialSlide="3"
							pagination={true}
							modules={[Autoplay, EffectCoverflow, Pagination]}
							className="mySwiper"
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieList;
