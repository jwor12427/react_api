/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

function UnsplashSliderItem({ random }) {
	return (
		<a href={`https://unsplash.com/photos/${random.id}`}>
			<img
				className="unsplash__img"
				src={random.urls.regular}
				alt={random.urls.alt_description}
			/>
		</a>
	);
}

const UnsplashSlider = ({ random }) => {
	// console.log(popularMovies);
	return (
		<div className="unsplash__slider">
			<div>
				<Swiper
					slidesPerView={3}
					spaceBetween={30}
					freeMode={true}
					pagination={{
						clickable: true,
					}}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					initialSlide="3"
					modules={[Autoplay, FreeMode, Pagination]}
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
	);
};

export default UnsplashSlider;
