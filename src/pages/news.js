import React, {Component} from "react";
import { Form, Col, Row, Container, Button } from "react-bootstrap";

class news extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:3001/News")
            .then(res => res.text())
            .then(res => this.setState({apiResponse: res}))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        const listItems = this.state.apiResponse.split(',').map((data) =>
            <li key={data.endpoint}>{data.endpoint}</li>
        );
        console.log(this.state.apiResponse.split(','));
        return (
            <div>
                <Container id="mainDiv" style={{ "margin-top": "5%", "margin-bottom": "5%" }}>
                    <ul>
                        {listItems}
                    </ul>
                    <p className="App-intro">{this.state.apiResponse}</p>
                </Container>
            </div>

        );
    }
}

export default news;
