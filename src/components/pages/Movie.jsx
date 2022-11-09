/** @format */

import React from "react";
import { useState, useEffect } from "react"; //변수
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieCont from "../include/MovieCont";
import Contact from "../layout/Contact";
import MovieSearch from "../include/MovieSearch";
import MovieList from "../include/MovieList";

const Movie = () => {
	const [movies, setMovies] = useState([]);
	const [listMovie, setMoviesList] = useState([]);

	const search = (query) => {
		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=dab7e73d4b52c62b1d206d7f6bd38ec0&query=${query}`
		)
			.then((response) => response.json())
			// .then((result) => console.log(result.results))
			.then((result) => setMovies(result.results))
			.catch((error) => console.log("error", error));
	};

	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/search/movie?api_key=dab7e73d4b52c62b1d206d7f6bd38ec0&query=marvel&page=1"
		)
			.then((response) => response.json())
			// .then((result) => console.log(result.results))
			.then((result) => setMovies(result.results))
			.catch((error) => console.log("error", error));
	}, []);
	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/movie/popular?api_key=dab7e73d4b52c62b1d206d7f6bd38ec0&language=ko"
		)
			.then((response) => response.json())
			// .then((result) => console.log(result.results))
			.then((result) => setMoviesList(result.results))
			.catch((error) => console.log("error", error));
	}, []);

	return (
		<>
			<Header />
			<Contents>
				<Title title={["movie", "referece api"]} />
				<MovieList popularMovie={listMovie} />
				<MovieSearch onSearch={search} />
				<MovieCont movies={movies} />
				<Contact />
			</Contents>
			<Footer />
		</>
	);
};
export default Movie;
