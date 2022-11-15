/** @format */

import React from "react";

const MovieBtn = ({ onSearch }) => {
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
					Marvel
				</button>
				<button
					type="button"
					className="btn"
					onClick={btnClick}
				>
					drama
				</button>
				<button
					type="button"
					className="btn"
					onClick={btnClick}
				>
					Animation
				</button>
				<button
					type="button"
					className="btn"
					onClick={btnClick}
				>
					romance
				</button>
        <button
					type="button"
					className="btn"
					onClick={btnClick}
				>
					mystery
				</button>
			</div>
		</div>
	);
};

export default MovieBtn;
