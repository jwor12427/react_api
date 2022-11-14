/** @format */

import React from "react";

const YoutubeBtn = ({ onSearch }) => {
	const handleSearch = (tag) => {
		onSearch(tag);
	};
	const btnClick = (e) => {
		handleSearch(e.target.innerText);
	};
	return (
		<div className="youtube__btn">
			<div className="container">
				<button
					type="button"
					className="btn"
					onClick={btnClick}
				>
					animal
				</button>
				<button
					type="button"
					className="btn"
					onClick={btnClick}
				>
					소녀시대
				</button>
				<button
					type="button"
					className="btn"
					onClick={btnClick}
				>
					브이로그
				</button>
				<button
					type="button"
					className="btn"
					onClick={btnClick}
				>
					리엑트
				</button>
			</div>
		</div>
	);
};

export default YoutubeBtn;
