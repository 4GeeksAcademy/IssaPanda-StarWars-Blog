import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

export const Characters = () => {
	const { uid } = useParams();
    const [character, setCharacter] = useState(null);
	
	useEffect(() => {
        fetch(`https://swapi.dev/api/people/${uid}`)
            .then(response => response.json())
            .then(data => setCharacter(data))
            .catch(error => console.log("Error fetching character details:", error));
    }, [uid]);

    if (!character) {
        return <div>Loading...</div>;
    }


	
	return (
		<div className="jumbotron">
			<h1 className="display-4">{character.name}</h1>
			<p><strong>Height:</strong> {character.height}</p>
			<p><strong>Mass:</strong> {character.mass}</p>
			<p><strong>Gender:</strong> {character.gender}</p>
			<hr />
			<a href="/" className="btn btn-primary btn-lg" role="button">
				Back home
			</a>
		</div>
	);
};
