import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter, Row } from "reactstrap";
import PokemonCard from "./pokemon-card.component";
import PokemonModal from "./pokemon-modal.component";

export default class PokemonList extends Component {
    constructor() {
        super();
        this.state = {
            modal: false,
            setModal: false,
            selectedData: [],
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal,
        });
    }
    render() {
        return (
            <>
                {this.props.pokemons ? (
                    <div></div>
                ) : (
                    <div>
                        <p>Waiting</p>
                    </div>
                )}
                <div>
                    <Row className="pokemon-card">
                        {this.props.pokemons.map((pokemon, index) => (
                            <a
                                href={`#${pokemon.name}`}
                                className="col-md-3 col-lg-2 col-sm-4"
                                onClick={() => {
                                    this.setState({
                                        selectedData: pokemon,
                                    });
                                    this.toggle();
                                }}
                                key={index}
                            >
                                <PokemonCard pokemon={pokemon} />
                            </a>
                        ))}
                    </Row>
                    <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggle}
                        className={`${this.props.className} modal-lg`}
                    >
                        <ModalBody>
                            {this.state.selectedData && (
                                <PokemonModal
                                    pokemon={this.state.selectedData}
                                />
                            )}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggle}>
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </>
        );
    }
}
