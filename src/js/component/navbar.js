import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [isOpen, setIsOpen] = useState();
	const handleClick = () => {};

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="ml-auto">
				{/* //setIsOpen is passing a callback function !isOpen so it can perform the opposite of its current state  */}
				<button className="btn btn-primary" onClick={() => setIsOpen(!isOpen)}>
					Favorites
				</button>

				{/* //ternary condition (if dropdown is open then d-block if not d-none) */}
				<div className={isOpen ? "d-block" : "d-none"}>
					{store.favorites.map((item, index) => {
						return (
							<li key={index}>
								{item}
								<button onClick={() => actions.deleteFavorite(index)}>
									<i className="fas fa-times" />
								</button>
							</li>
						);
					})}
				</div>
			</div>
		</nav>
	);
};
