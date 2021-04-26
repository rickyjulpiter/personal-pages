import React, { Component } from "react";
import axios from "axios";
import { Row } from "reactstrap";

import PokemonSearch from "./pokemon-search.component";
import PokemonCardList from "./pokemon-list";

export default class Pokemon extends Component {
    constructor() {
        super();

        this.state = {
            pokemons: [],
            searchField: "",
        };
    }
    getPokemonData = () => {
        let url = `https://pokeapi.co/api/v2/pokemon/?limit=18`;
        axios.get(url).then(({ data }) => {
            let pokemons = data.results;
            this.setState({ pokemons });
        });
    };

    handleChange = (e) => {
        this.setState({ searchField: e.target.value });
    };

    componentDidMount() {
        this.getPokemonData();
    }

    render() {
        const { pokemons, searchField } = this.state;
        const filteredPokemon = pokemons.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <>
                <div>
                    <div
                        className="container-fluid p-4"
                        style={{ backgroundColor: "#f4f4f4" }}
                    >
                        <h4 className="mx-auto text-right monts1 ">
                            Not curious about me ? How about Pokemon ?
                        </h4>
                        <p className="mx-auto text-right monts1 ">
                            <PokemonSearch handleChange={this.handleChange} />
                        </p>
                        <hr />
                        <Row className="m-1">
                            <PokemonCardList pokemons={filteredPokemon} />
                        </Row>
                    </div>
                </div>
            </>
        );
    }
}
