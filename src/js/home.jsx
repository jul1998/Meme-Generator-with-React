import React from "react";
import Header from "./component/Header.jsx"
import Meme from "./component/Meme.jsx"
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<>
		<Header/>
		<Meme/>
		</>
	);
};

export default Home;
