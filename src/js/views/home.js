import React, { useEffect,useState } from "react";
import "../../styles/home.css";
import { Card, Card2 } from "../component/card";

export const Home = () => {
	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);
	
	useEffect(() => {
	  fetch('https://swapi.dev/api/people')
		.then(response => {
		  if (!response.ok) {
			throw Error(response.statusText);
		  }
		  return response.json();
		})
		.then(responseAsJson => {
		  setCharacters(responseAsJson.results);
		})
		.catch(error => {
		  console.log('Looks like there was a problem: \n', error);
		});
	}, []);

	useEffect(() => {
		fetch('https://swapi.dev/api/planets')
		  .then(response => {
			if (!response.ok) {
			  throw Error(response.statusText);
			}
			return response.json();
		  })
		  .then(responseAsJson => {
			setPlanets(responseAsJson.results);
		  })
		  .catch(error => {
			console.log('Looks like there was a problem: \n', error);
		  });
	  }, []);
  
	  
	return (
	  <>
		<div class="d-flex flex-col flex-nowrap">
		<div className="row card-container">
				{characters.map((character, index) => (
					<Card
						key={index}
						uid={index + 1}
						name={character.name}
						gender={character.gender}
						hair_color={character.hair_color}
						eye_color={character.eye_color}
					/>
				))}
			</div><div className="row card-container">
				{planets.map((planet, index) => (
					<Card2
						key={index}
						uid={index + 1}
						name={planet.name}
						population={planet.population}
						terrain={planet.terrain}
						/>
				))}
			</div>
			</div></>
	  
	);
  };
