import React from "react";

const PokemonSearch = ({ handleChange }) => (
    <input
        type="search"
        className="search"
        placeholder="Search pokemon name ..."
        onChange={handleChange}
    />
);

export default PokemonSearch;
