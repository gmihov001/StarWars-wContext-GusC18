import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const PlanetCard = props => {
	return (
		<div className="card">
			<img className="card-img-top" src="#" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</p>
				<Link to="/details">
					<button href="#" className="btn btn-primary">
						Details
					</button>
				</Link>
			</div>
		</div>
	);
};

//validation
PlanetCard.propTypes = {
	name: PropTypes.string
};

//comments
//line 9 - makes the name dynamic and youre running props as an argument on line 4
//we also have to import the proptypes
