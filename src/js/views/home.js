import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
//import { Context } from "../store/appContext";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import { Context } from "../store/appContext";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {}

	render() {
		return (
			<div>
				<Context.Consumer>
					{({ actions, store }) => {
						return (
							<>
								{store.characters.map((item, index) => {
									return <CharacterCard key={index} character={item.name} index={index} />;
								})}
								{store.planets.map((item, index) => {
									return <PlanetCard key={index} planet={item.name} index={index} />;
								})}
							</>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

//Example with Hooks

//Hooks in line 10 sets characters with the values inside the useState ([""]) and useState gives us the initial value that were working with
//setCharacters updates the value
// export const Home = () => {
// 	const [characters, setCharacters] = useState(["Luke Skywalker", "CP3PO", "Darth Vader"]);
// 	const [planets, setPlanets] = useState(["Tatooine", "Planet Boom", "Another Weird Planet"]);

// 	// useEffect(()=>{
// 	// }, []);
// 	//syntax for useEffect the empty brackets makes the function run only once when the page renders
// 	//use lesson on BreatheCode as a reference as well

// 	useEffect(() => {
// 		fetch("https://swapi.dev/api/planets/")
// 			.then(function(response) {
// 				if (!response.ok) {
// 					throw Error(response.statusText);
// 				}
// 				// Read the response as json.
// 				return response.json();
// 			})
// 			.then(function(responseAsJson) {
// 				// Do stuff with the JSON
// 				console.log("responseAsJson", responseAsJson);
// 				setPlanets(responseAsJson.results);
// 			})
// 			.catch(function(error) {
// 				console.log("Looks like there was a problem: \n", error);
// 			});

// 		fetch("https://swapi.dev/api/people/")
// 			.then(function(response) {
// 				if (!response.ok) {
// 					throw Error(response.statusText);
// 				}
// 				// Read the response as json.
// 				return response.json();
// 			})
// 			.then(function(responseAsJson) {
// 				// Do stuff with the JSON
// 				console.log("responseAsJson", responseAsJson);
// 				setCharacters(responseAsJson.results);
// 				//.results specifies the location of our array inside of the fetch object in our API - same in line 30
// 			})
// 			.catch(function(error) {
// 				console.log("Looks like there was a problem: \n", error);
// 			});
// 	}, []);

// 	// const { store, actions } = useContext(Context);
// 	return (
// 		<div>
// 			{characters.map((item, index) => {
// 				return <CharacterCard key={index} character={item} index={index} />;
// 			})}
// 			{planets.map((item, index) => {
// 				return <PlanetCard key={index} planet={item} index={index} />;
// 			})}
// 		</div>
// 	);
//}
