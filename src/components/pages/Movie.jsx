/** @format */

import React from "react";
import { useState, useEffect } from "react"; //변수
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MoiveCont from "../include/MoiveCont";
import Contact from "../layout/Contact";

const Movie = () => {
	const [movies, setMoives] = useState([]);

	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/search/movie?api_key=dab7e73d4b52c62b1d206d7f6bd38ec0&query=marble&page=1"
		)
			.then((response) => response.json())
			.then((result) => setMoives(result))
			.catch((error) => console.log("error", error));
	}, []);

	return (
		<>
			<Header />
			<Contents>
				<Title title={["movie", "referece api"]} />
				<MoiveCont movies={movies} />
				<Contact />
			</Contents>
			<Footer />
		</>
	);
};
export default Movie;
