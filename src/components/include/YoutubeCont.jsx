/** @format */

import React from "react";
const YoutubeItem = ({ youtube }) => {
	return (
		<li>
			<a href="https://www.youtube.com/">
				<img
					src={youtube.snippet.thumbnails.medium.url}
					alt=""
				/>
			</a>
		</li>
	);
};
const YoutubeCont = ({ youtube }) => {
	return (
		<section className="cont__unsplash">
			<div className="container">
				<div className="unsplash__inner">
					<ul>
						{youtube.map((youtube, index) => (
							<YoutubeItem
								key={index}
								youtube={youtube}
							/>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};
export default YoutubeCont;
