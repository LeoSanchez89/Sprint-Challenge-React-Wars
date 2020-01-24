import React from "react";
import styled from "styled-components";
import {
	Card,
	CardHeader,
	CardBody,
	CardTitle,
	CardText,
	Row,
	Col
} from "reactstrap";

const CardLayout = styled.div`
	width: 25%;
	margin: 3%;
`;

function PeopleCard(props) {
	return (
		<CardLayout>
			<Card
				body
				inverse
				style={{ backgroundColor: "#333", borderColor: "#fac927" }}
			>
				<CardHeader body inverse style={{ borderColor: "#fac927" }}>
					<h2>{props.name}</h2>
				</CardHeader>
				<CardTitle>
					<h3 className="text-info">-STATS-</h3>
				</CardTitle>
				<CardBody>
					<CardText>
						<p>Gender: {props.gender}</p>
						<p>Birth Year: {props.year}</p>
						<p>Height: {props.height}cm</p>
						<p>Weight: {props.mass}kg</p>
						<p>Hair Color: {props.hair}</p>
						<p>Skin Color: {props.skin}</p>
						<p>Eye Color: {props.eye}</p>
					</CardText>
				</CardBody>
			</Card>
		</CardLayout>
	);
}

export default PeopleCard;
