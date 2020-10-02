import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class CharacterCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="card">
				<Context.Consumer>
					{({ actions, store }) => {
						return (
							<>
								<img className="card-img-top" src="#" alt="Card image cap" />
								<div className="card-body">
									<h5 className="card-title">Character: {this.props.character}</h5>
									<p className="card-text">
										Some quick example text to build on the card title and make up the bulk of the
										cards content.
									</p>
									<Link to={`/details/${this.props.index + 1}`}>
										<button href="#" className="btn btn-primary">
											Details
										</button>
									</Link>
									<button onClick={() => actions.addFavorite(this.props.character)}>
										<i className="far fa-heart" />
									</button>
								</div>
							</>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

CharacterCard.propTypes = {
	character: PropTypes.string,
	index: PropTypes.number
};
