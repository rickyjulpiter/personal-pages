import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from "reactstrap";
import NavBar from "../component/Navbar";
import axios from "axios";
import LoginImage from "../assets/login.svg";

class Login extends Component {
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
            <>
                <NavBar />
                <Container>
                    <Row>
                        <Col lg="6" md="6" className="mx-auto">
                            <Card>
                                <CardImg
                                    top
                                    width="100%"
                                    src={LoginImage}
                                    alt="Card image cap"
                                    className="pt-3 pr-3 pl-3"
                                />
                                <CardBody>
                                    <Form>
                                        <FormGroup>
                                            <Label for="exampleEmail">
                                                Email
                                            </Label>
                                            <Input
                                                type="email"
                                                name="email"
                                                id="email"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="examplePassword">
                                                Password
                                            </Label>
                                            <Input
                                                type="password"
                                                name="password"
                                                id="password"
                                            />
                                        </FormGroup>
                                        <Button
                                            color="primary"
                                            size="lg"
                                            block
                                            className="btn-login-form"
                                        >
                                            Login
                                        </Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Login;
