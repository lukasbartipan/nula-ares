import React, { useState, useEffect } from "react";
import "./App.css";

import { Search, DisplayData } from "./components";
import { fetchData } from './api';

function App() {
	const [data, setData] = useState({});
	const [searchData, setSearchData] = useState("");

	useEffect(() => {
		if (searchData === "") return;
		const fetch = async() => {
			const res = await fetchData(searchData);
			setData(res.data);
		};

		fetch();
	}, [searchData]);

	return (
		<div className="App">
			<header>
				<h1>ARES - IČO Vyhledávání</h1>
				<Search setSearchData={setSearchData} />
			</header>
			<section className='data'>
				<DisplayData data={data} />
			</section>
		</div>
	);
}

export default App;
