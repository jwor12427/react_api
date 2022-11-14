/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function UnsplashSliderItem({ random }) {
	return (
		<a href={`https://unsplash.com/photos/${random.id}`}>
			<img
				src={random.urls.regular}
				alt={random.urls.alt_description}
			/>
		</a>
	);
}

const UnsplashSlider = ({ random }) => {
	// console.log(popularMovies);
	return (
		<div className="popular__movie">
			<div className="container">
				<h2 className="tit">Random Image</h2>
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
							{random.map((random, index) =>
								index < 10 ? (
									<SwiperSlide key={index}>
										<UnsplashSliderItem
											key={index}
											random={random}
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

export default UnsplashSlider;
