import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

//import { CharacterCard } from "./component/characterCard";

export const Home = () => {
	return (
		<div>
			<div className="card">
				<img className="card-img-top" src="#" alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};
