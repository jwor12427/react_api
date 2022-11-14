/** @format */

import React from "react";
// import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import YoutubeSlider from "../include/AboutCont";
import YoutubeSearch from "../include/AboutCont";
import YoutubeCont from "../include/AboutCont";
import Contact from "../layout/Contact";

const Youtube = () => {
	// const [youtubes, setYoutubes] = useState([]);

	// const search = async (query) => {
	// 	await fetch(
	// 		`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyDU_h81MBf9V3NAnkXNKe0XmlFyu1crk-U&regionCode=KR&maxResults=20&type=video`
	// 	)
	// 		.then((response) => response.json())
	// 		// .then((result) => console.log(result.results))
	// 		.then((result) => setYoutubes(result.items))
	// 		.catch((error) => console.log("error", error));
	// };

	// useEffect(() => {
	// 	fetch("")
	// 		.then((response) => response.json())
	// 		// .then((result) => console.log(result.items))
	// 		.then((result) => setYoutubes(result.items))
	// 		.catch((error) => console.log("error", error));
	// });
	return (
		<>
			<Header />
			<Contents>
				<Title title={["youtube", "referece api"]} />
				<YoutubeSlider />
				<YoutubeSearch />
				<YoutubeCont />
				<Contact />
			</Contents>
			<Footer />
		</>
	);
};

export default Youtube;
