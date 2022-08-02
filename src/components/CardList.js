import React from "react";
import Card from "./Card";
import "./CardList.css";

const CardList = ({ robots }) => {
	return (
		<div className="card-list">
			{robots.map(({ id, name, email }) => (
				<Card id={id} name={name} email={email} key={id} />
			))}
		</div>
	);
};

export default CardList;
