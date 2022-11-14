/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

function YoutubeSliderItem({ random }) {
	return (
		<a
			href={`https://www.youtube.com/watch?v=${random.videoId}`}
			target="blank"
		>
			<img
				className="youtube__img"
				src={random.snippet.thumbnails.medium.url}
				alt={random.etag}
			/>
			<em>
				<span className="youtube__title">{random.snippet.title}</span>
			</em>
		</a>
	);
}

const YoutubeSlider = ({ random }) => {
	// console.log(popularMovies);

	return (
		<div className="youtube__slider">
			<div className="container">
				<Swiper
					slidesPerView={3}
					centeredSlides={true}
					spaceBetween={30}
					pagination={{
						type: "fraction",
					}}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					initialSlide="3"
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					className="mySwiper"
				>
					{random.map((random, index) =>
						index < 10 ? (
							<SwiperSlide key={index}>
								<YoutubeSliderItem
									key={index}
									random={random}
								/>
							</SwiperSlide>
						) : null
					)}
				</Swiper>
			</div>
		</div>
	);
};

export default YoutubeSlider;
