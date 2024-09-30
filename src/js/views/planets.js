import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = () => {
	const { uid } = useParams();
    const [planet, setPlanet] = useState(null);
	
	useEffect(() => {
        fetch(`https://swapi.dev/api/planets/${uid}`)
            .then(response => response.json())
            .then(data => setPlanet(data))
            .catch(error => console.log("Error fetching planet details:", error));
    }, [uid]);

    if (!planet) {
        return <div>Loading...</div>;
    }


	
	return (
		<div className="jumbotron">
			<h1 className="display-4">{planet.name}</h1>
			<p><strong>Climate:</strong> {planet.climate}</p>
			<p><strong>Orbital Period:</strong> {planet.orbital_period}</p>
			<p><strong>Population:</strong> {planet.population}</p>
            <p><strong>Terrain:</strong> {planet.terrain}</p>
			<hr />
			<a href="/" className="btn btn-primary btn-lg" role="button">
				Back home
			</a>
		</div>
	);
};