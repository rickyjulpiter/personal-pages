import React from "react";
import { Col, Card, CardImg, CardBody, CardTitle } from "reactstrap";

const PokemonCard = (props) => (
    <Col md="1" lg="2" sm="1" className="mb-2">
        <Card>
            <CardImg
                top
                width="100%"
                src={`https://pokeres.bastionbot.org/images/pokemon/${
                    props.pokemon.url.split("/")[
                        props.pokemon.url.split("/").length - 2
                    ]
                }.png`}
                alt="Card image cap"
                className="pt-3 pr-3 pl-3"
            />

            <CardBody>
                <CardTitle tag="h5" className="text-center">
                    {props.pokemon.name}
                </CardTitle>
            </CardBody>
        </Card>
    </Col>
);

export default PokemonCard;
