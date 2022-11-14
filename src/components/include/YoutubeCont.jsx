/** @format */

import React from "react";
const YoutubeItem = ({ youtube }) => {
	return (
		<li>
			<a
				href={`https://www.youtube.com/watch?v=${youtube.id.videoId}`}
				target="blank"
			>
				<img
					src={youtube.snippet.thumbnails.medium.url}
					alt={youtube.etag}
				/>
				<p className="you__title">{youtube.snippet.title}</p>
			</a>
		</li>
	);
};
const YoutubeCont = ({ youtubes }) => {
	console.log(youtubes);
	return (
		<section className="youtube__slider">
			<div className="container">
				<div className="movie__inner">
					<ul>
						{youtubes.map((youtube, index) => (
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
