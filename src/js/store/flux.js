const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: ["Jedi 1", "jedi 2", "jedi 3"],
			characters: [{ name: "Luke Skywalker" }, { name: "CP3PO" }, { name: "Darth Vader" }],
			planets: [{ name: "Tatooine" }, { name: "Planet Boom" }, { name: "Another Weird Planet" }]
			//array of objects or items with hardcoded information from swapi
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadPeople: () => {
				fetch("https://swapi.dev/api/people/")
					.then(response => response.json())
					.then(data => {
						console.log("data", data);
						setStore({ people: data.results });
					});
			},
			loadPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(response => response.json())
					.then(data => {
						console.log("data", data);
						setStore({ planets: data.results });
					});
			},
			deleteFavorite: () => {},
			addFavorite: name => {
				const newStore = getStore();
				newStore.favorites.push(name);
				setStore({ newStore });
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
