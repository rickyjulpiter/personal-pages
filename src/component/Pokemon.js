import React, { Component } from "react";
import axios from "axios";
import { Row, Col, Card, CardImg, CardBody, CardTitle } from "reactstrap";

export default class Pokemon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataPokemon: null,
        };
    }
    getPokemonData = () => {
        let url = `https://pokeapi.co/api/v2/pokemon/?limit=18`;
        axios.get(url).then(({ data }) => {
            let dataPokemon = data.results;
            this.setState({ dataPokemon });
        });
    };

    searchPokemonName = (event) => {
        let search = event.target.value;
        if (search !== "") {
            const searchResult = this.state.dataPokemon.filter((pokemon) =>
                pokemon.name.includes(search)
            );
            this.setState({
                dataPokemon: searchResult,
            });
        } else {
            this.getPokemonData();
        }
    };

    componentDidMount() {
        this.getPokemonData();
    }
    render() {
        return (
            <div>
                <div
                    className="container-fluid p-4"
                    style={{ backgroundColor: "#f4f4f4" }}
                >
                    <h4 className="mx-auto text-right monts1 ">
                        Not curious about me ? How about Pokemon ?
                    </h4>
                    <p className="mx-auto text-right monts1 ">
                        <input
                            type="search"
                            className="search"
                            placeholder="Search pokemon name ..."
                            onChange={this.searchPokemonName}
                        />
                    </p>
                    <hr />
                    <Row className="m-1">
                        {this.state.dataPokemon &&
                            this.state.dataPokemon.map((data, index) => (
                                <Col
                                    md="1"
                                    lg="2"
                                    sm="1"
                                    className="mb-2"
                                    key={index}
                                >
                                    <Card>
                                        <CardImg
                                            top
                                            width="100%"
                                            src={`https://pokeres.bastionbot.org/images/pokemon/${
                                                data.url.split("/")[
                                                    data.url.split("/").length -
                                                        2
                                                ]
                                            }.png`}
                                            alt="Card image cap"
                                            className="pt-3 pr-3 pl-3"
                                        />

                                        <CardBody>
                                            <CardTitle
                                                tag="h5"
                                                className="text-center"
                                            >
                                                {data.name}
                                            </CardTitle>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}
                    </Row>
                </div>
            </div>
        );
    }
}
