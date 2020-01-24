import React, { useState, useEffect } from "react";
import './App.css';

const App = () => {
  
  const [char, setChar] = useState([]);

	useEffect(() => {
		axios
			.get(
				""
			)
			.then(response => {
				console.log(response.data);
				setChar(response.data);
			})
			.catch(error => {
				console.log("data was not returned", error);
			});
	}, []);




  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
