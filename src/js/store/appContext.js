import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		//this will be passed as the contenxt value
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			fetch("https://swapi.dev/api/people/")
				.then(function(response) {
					if (!response.ok) {
						throw Error(response.statusText);
					}
					// Read the response as json.
					return response.json();
				})
				.then(function(responseAsJson) {
					let { store, actions } = state;
					// Do stuff with the JSON
					console.log("responseAsJson.results", responseAsJson.results);
					setState({ store: { ...store, characters: responseAsJson.results }, actions });
					//.results specifies the location of our array inside of the fetch object in our API - same in line 30
				})
				.catch(function(error) {
					console.log("Looks like there was a problem: \n", error);
				});

			fetch("https://swapi.dev/api/planets/")
				.then(function(response) {
					if (!response.ok) {
						throw Error(response.statusText);
					}
					return response.json();
				})
				.then(function(responseAsJson) {
					let { store, actions } = state;
					console.log("responseAsJson", responseAsJson);
					setState({ store: { ...planets, planets: responseAsJson.results }, actions });
				})
				.catch(function(error) {
					console.log("Looks like there was a problem: \n", error);
				});
		}, []);

		// The initial value for the context is not null anymore, but the current state of this component,
		// the context will now have a getStore, getActions and setStore functions available, because they were declared
		// on the state of this component
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
