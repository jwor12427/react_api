/** @format */

import React from "react";
import { useState, useEffect } from "react";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Title from "../layout/Title";
import YoutubeCont from "../include/YoutubeCont";
import YoutubeSlider from "../include/YoutubeSlider";
import YoutubeSearch from "../include/YoutubeSearch";
import Contact from "../layout/Contact";

export const Youtube = () => {
	const [youtubes, setYoutubes] = useState([]);
	const [random, setRandom] = useState([]);

	const search = async (query) => {
		await fetch(
			`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyC87T5BNU0OPSsPAjb42R-Wb4Fd3GAFxDg&regionCode=KR&maxResults=20&type=video`
		)
			.then((response) => response.json())
			// .then((result) => console.log(result))
			.then((result) => setYoutubes(result.items))
			.catch((error) => console.log("error", error));
	};

	useEffect(() => {
		fetch("https://jwor12427.github.io/react_api/src/utils/youtube.json")
			.then((response) => response.json())
			// .then((result) => console.log(result.items))
			.then((result) => setRandom(result.items))
			.catch((error) => console.log("error", error));
	}, []);
	useEffect(() => {
		fetch("https://jwor12427.github.io/react_api/src/utils/youtube.json")
			.then((response) => response.json())
			// .then((result) => console.log(result.items))
			.then((result) => setYoutubes(result.items))
			.catch((error) => console.log("error", error));
	}, []);

	return (
		<>
			<Header />
			<Contents>
				<Title title={["Youtube", "referce api"]} />
				<YoutubeSlider random={random} />
				<YoutubeSearch onSearch={search} />
				<YoutubeCont youtubes={youtubes} />
				<Contact />
			</Contents>
			<Footer />
		</>
	);
};
export default Youtube;
