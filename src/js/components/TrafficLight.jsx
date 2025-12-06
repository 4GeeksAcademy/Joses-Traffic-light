import React, { useState } from "react";

const TrafficLight = () => {

	const [colors, setColors] = useState(["#FF0000", "#FFFF00", "#00FF00"]);
	const [active, setActive] = useState(0); // index of the active light


	const changeLight = () => {
		setActive((prev) => (prev + 1) % colors.length);
	};


	const addPurple = () => {

		if (!colors.includes("#800080")) {
			setColors([...colors, "#800080"]);
		}
	};

	return (
		<div className="d-flex flex-column align-items-center mt-5">
			{/* Vertical black line */}
			<div className="bg-dark" style={{ width: "50px", height: "50px" }}></div>

			{/* Traffic light box */}
			<div className="d-flex flex-column align-items-center p-4 bg-dark rounded">
				{colors.map((color, index) => (
					<div
						key={index}
						className="rounded-circle mb-3"
						style={{
							width: "80px",
							height: "80px",
							backgroundColor: active === index ? color : "#6c757d",
							// active = color,
							//  inactive = gray
						}}
					></div>
				))}

				{/* Buttons */}
				<div className="d-flex flex-column gap-2 mt-2">
					<button onClick={changeLight} className="btn btn-dark rounded-pill">
						Cycle Light
					</button>
					<button onClick={addPurple} className="btn btn-dark rounded-pill">
						Add Purple
					</button>
				</div>
			</div>
		</div>
	);
};

export default TrafficLight;
