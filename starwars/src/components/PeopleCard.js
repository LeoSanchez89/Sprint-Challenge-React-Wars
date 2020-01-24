import React from "react";

function PeopleCard(props) {
	return (
		<div>
			<h2>{props.name}</h2>
			<h3>Stats</h3>
			<div>
				<p>{props.gender}</p>
				<p>{props.year}</p>
				<p>{props.height}</p>
				<p>{props.mass}</p>
				<p>{props.hair}</p>
				<p>{props.skin}</p>
				<p>{props.eye}</p>
			</div>
		</div>
	);
}

export default PeopleCard;
