import React from "react";
import { useNavigate } from "react-router-dom";





export const Card = ({ name, gender, hair_color, eye_color, uid}) => {
    const navigate = useNavigate();
    return(
        <>  
            <div className="card" style={{ width: "18rem", margin: "10px"  }}>
            <img src="https://dz2cdn1.dzone.com/storage/temp/13989969-400x200" class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Gender: {gender}</p>
                <p className="card-text">Hair Color: {hair_color}</p>
                <p className="card-text">Eye Color: {eye_color}</p>
                <button onClick={() => navigate(`/character/${uid}`)} className="btn btn-primary">
                        View Details
                    </button>
            </div>
        </div>
        </>
    );
};

export const Card2 = ({ name, population, terrain, uid}) => {
    const navigate = useNavigate();
    return(
        <>
            <div className="card" style={{ width: "18rem", margin: "10px"  }}>
            <img src="https://dz2cdn1.dzone.com/storage/temp/13989969-400x200" class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Population: {population}</p>
                <p className="card-text">Terrain: {terrain}</p>
                <button onClick={() => navigate(`/planet/${uid}`)} className="btn btn-primary">
                        View Details
                    </button>
            </div>
        </div>
        </>
    );
};