/** @format */

import React from "react";
import { useState, useEffect } from "react"; //변수
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import ReferCont from "../include/ReferCont";
import Contact from "../layout/Contact";

//클래스형 컴퍼넌트 / 함수형 컴퍼넌트 --> 리액트 훅

const Referece = () => {
	const [references, setReferences] = useState([]);

	useEffect(() => {
		fetch("https://jwor12427.github.io/react_api/src/utils/reference.json")
			.then((response) => response.json())
			// .then((result) => console.log(result.data.htmlRefer)) //객체까지 불러올지 배열까지 불러올지 확인
			.then((result) => setReferences(result.cssRefer))
			.catch((error) => console.log("error", error));
	}, []);

	return (
		<>
			<Header />
			<Contents>
				<Title title={["Reference", "book"]} />
				<ReferCont references={references} />
				<Contact />
			</Contents>
			<Footer />
		</>
	);
};
export default Referece;
