import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

function Home() {
	// We have to know that the changes of the states are going to be reflected all across our application
	//  not just the searchExercises.
	const [bodyPart, setBodyPart] = useState("all");
	const [exercises, setExercises] = useState([]);

	return (
		<Box>
			<HeroBanner />
			<SearchExercises
				setExercises={setExercises}
				bodyPart={bodyPart}
				setBodyPart={setBodyPart}
			/>
			<Exercises
				setExercises={setExercises}
				bodyPart={bodyPart}
                exercises={exercises}
			/>
		</Box>
	);
}

export default Home;
