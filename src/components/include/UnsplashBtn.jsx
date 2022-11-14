/** @format */

import React from "react";

const unsplashTag = [
	{ name: "Sea" },
	{ name: "Animal" },
	{ name: "Happy" },
	{ name: "color" },
];

const UnsplashTagList = ({ tag }) => {
	return <span>{tag}</span>;
};

const UnsplashBtn = ({ onSearch }) => {
	const handleSearch = (tag) => {
		onSearch(tag);
	};
	const btnClick = (e) => {
		handleSearch(e.target.innerText);
	};
	return (
		<div className="unsplash__btn">
			<div className="container">
				{unsplashTag.map((tag, index) => (
					<button
						type="button"
						className="btn"
						onClick={btnClick}
						key={index}
					>
						<UnsplashTagList tag={tag.name} />
					</button>
				))}
			</div>
		</div>
	);
};

export default UnsplashBtn;
