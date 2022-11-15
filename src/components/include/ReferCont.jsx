/** @format */

import React from "react";

// const referInfo = [
// 	{
// 		num: 1,
// 		name: "backgorund",
// 		desc: "배경색상을 지정합니다.",
// 		star: "★★★★★",
// 	},
// 	{
// 		num: 2,
// 		name: "backdrop-filter",
// 		desc: "뒤 영역의 흐림이나 색상 시프트 등 그래픽 효과를 설정합니다.",
// 		star: "★★★★☆",
// 	},
// 	{
// 		num: 3,
// 		name: "border",
// 		desc: "테두리 속성을 일괄적으로 설정합니다.",
// 		star: "★★★★★",
// 	},
// 	{
// 		num: 4,
// 		name: "background-repeat",
// 		desc: "백그라운드 이미지 반복 여부를 설정합니다.",
// 		star: "★★★★☆",
// 	},
// 	{
// 		num: 5,
// 		name: "border-bottom",
// 		desc: "아래쪽 속성을 일괄적으로 설정합니다.",
// 		star: "★★★★★",
// 	},
// 	{
// 		num: 6,
// 		name: "border-inline",
// 		desc: "테두리 인라인의 속성을 설정합니다.",
// 		star: "★☆☆☆☆",
// 	},
// 	{
// 		num: 7,
// 		name: "border-color",
// 		desc: "테두리의 색상을 일괄적으로 설정합니다.",
// 		star: "★★☆☆☆",
// 	},
// 	{
// 		num: 8,
// 		name: "border-image",
// 		desc: "테두리에 이미지를 설정합니다.",
// 		star: "★★★☆☆",
// 	},
// 	{
// 		num: 9,
// 		name: "border-left",
// 		desc: "테두리 왼쪽을 일괄적으로 설정합니다.",
// 		star: "★★★★★",
// 	},
// 	{
// 		num: 10,
// 		name: "border-radius",
// 		desc: "테두리의 경계의 꼭짓점을 둥글게 설정합니다.",
// 		star: "★★★★★",
// 	},
// ];
// const ReferText = ({ num, name, desc, star }) => {
// 	return (
// 		<li>
// 			<a href="/">
// 				<span className="num">{num}</span>
// 				<span className="name">{name}</span>
// 				<span className="desc">{desc}</span>
// 				<span className="star">{star}</span>
// 			</a>
// 		</li>
// 	);
// };

const ReferText = ({ num, title, desc, star }) => {
	return (
		<li>
			<a href="/">
				<span className="num">{num}</span>
				<span className="name">{title}</span>
				<span className="desc">{desc}</span>
				<span className="star">{star}</span>
			</a>
		</li>
	);
};

const ReferCont = ({ references }) => {
	// console.log({references}); 데이터 확인
	return (
		<section className="cont__refer">
			<div className="container">
				<div className="refer__inner">
					<h2>CSS</h2>
					<ul className="refer__list">
						{references.map((refer, idx) => (
							<ReferText
								key={idx}
								num={refer.num}
								title={refer.title}
								desc={refer.desc}
								star={refer.descStar}
							/>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default ReferCont;
