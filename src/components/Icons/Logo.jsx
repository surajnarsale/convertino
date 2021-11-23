import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function Logo(props) {
	return (
		<Svg
			width={110}
			height={110}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Rect
				y={55}
				width={77.782}
				height={77.782}
				rx={10}
				transform="rotate(-45 0 55)"
				fill="#F6FAFF"
			/>
			<Path
				d="M69.48 40.668L55.175 54.973l-1.397-5.124a26.48 26.48 0 016.853-25.616l-2.396-2.395-16.367 16.368a19.758 19.758 0 00-4.658 20.493l3.726 10.645L55.241 55.04l1.398 5.123a26.48 26.48 0 01-6.854 25.616l2.396 2.396 16.367-16.368a19.758 19.758 0 004.658-20.493L69.48 40.668z"
				fill="#000"
			/>
		</Svg>
	);
}

export default Logo;
