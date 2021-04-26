import React from "react";
import PokemonCard from "./pokemon-card";

const PokemonCardList = (props) => {
    return (
        <>
            {props.pokemons.map((pokemon) => (
                <PokemonCard pokemon={pokemon} />
            ))}
        </>
    );
};

export default PokemonCardList;
