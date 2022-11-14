/** @format */

import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import UnsplashCont from "../include/UnsplashCont";
import UnsplashSearch from "../include/UnsplashSearch";
import UnsplashSlider from "../include/UnsplashSlider";
import UnsplashBtn from "../include/UnsplashBtn";
import Contact from "../layout/Contact";
const Unsplash = () => {
	const [images, setImages] = useState([]);
	const [random, setRandom] = useState([]);

	const search = async (query) => {
		await fetch(
			`https://api.unsplash.com/search/photos?client_id=ARu1VkatUtWaDHDwjkYnEyEK_OAVZ-LOCf-cTrHBtQg&per_page=30&query=${query}`
		)
			.then((response) => response.json())
			.then((result) => setImages(result.results))
			.catch((error) => console.log("error", error));
	};
	useEffect(() => {
		fetch(
			"https://api.unsplash.com/photos/random?client_id=ARu1VkatUtWaDHDwjkYnEyEK_OAVZ-LOCf-cTrHBtQg&count=30&query=wallpaper"
		)
			.then((response) => response.json())
			.then((result) => setImages(result))
			.catch((error) => console.log(error));
	}, []);
	useEffect(() => {
		fetch(
			"https://api.unsplash.com/photos/random?client_id=ARu1VkatUtWaDHDwjkYnEyEK_OAVZ-LOCf-cTrHBtQg&count=10"
		)
			.then((response) => response.json())
			.then((result) => setRandom(result))
			.catch((error) => console.log(error));
	}, []);
	return (
		<>
			<Header />
			<Contents>
				<Title title={["unsplash", "referece api"]} />
				<UnsplashSlider random={random} />
				<UnsplashSearch onSearch={search} />
				<UnsplashBtn />
				<UnsplashCont images={images} />
				<Contact />
			</Contents>
			<Footer />
		</>
	);
};
export default Unsplash;
