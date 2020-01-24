import React, { useState, useEffect } from "react";
import axios from "axios";
import PeopleCard from "./PeopleCard";

function PeoplePage() {
    const [char, setChar] = useState([]);

    useEffect(() => {
        axios
            .get("https://swapi.co/api/people/")
            .then(response => {
                console.log(response.data.results);
                setChar(response.data.results);
            })
            .catch(error => {
                console.log("data was not returned", error);
            });
    }, []);

    return (

        <section>
            {char.map(item => {
                return (
                    <PeopleCard
                        key={item.url}
                        name={item.name}
                        gender={item.gender}
                        height={item.height}
                        mass={item.mass}
                        hair={item.hair_color}
                        skin={item.skin_color}
                        eye={item.eye_color}
                        year={item.birth_year}
                    />
                );
            })}
        </section>

    );

}



export default PeoplePage;
