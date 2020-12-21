import React, {Component} from "react";
import { Card, Container, Button } from "react-bootstrap";

class news extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    /* Get: data from backend server (from database)*/
    callAPI() {
        fetch("http://localhost:3001/News")
            .then(res => res.text())
            .then(res => this.setState({apiResponse: res}))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    parseData(){
        /* Parse data from string to JSON object */
        var str = this.state.apiResponse.replace('[', '');
        str = str.replace(']', '');
        var mylist = "", offset = 0;
        for(var i=0; i< str.length; i++){
            if (offset) {offset = 0; continue;}
            if (str[i] === '}' && i+1 !== str.length){mylist += '}`';offset = 1;}
            else{mylist += str[i];}
        }
        var final = mylist.split('`'); var myf = [];
        for(var i=0; i < final.length; i++){
            var committee ="", title="", desc="", date="";

            var pos = final[i].indexOf('committee');
            var post = final[i].indexOf('title');
            var posd = final[i].indexOf('description')
            var posda = final[i].indexOf('date');

            for(var j=pos+12; j< final[i].length; j++){
                if (final[i][j] === '"') break;
                else committee += final[i][j];
            }

            for(var j=post+8; j< final[i].length; j++){
                if (final[i][j] === '"') break;
                else title += final[i][j];
            }

            for(var j=posd+14; j< final[i].length; j++){
                if (final[i][j] === '"') break;
                else desc += final[i][j];
            }

            for(var j=posda+7; j< final[i].length; j++){
                if (final[i][j] === '"') break;
                else date += final[i][j];
            }

            var obj = {
                "comm": committee,
                "title": title,
                "desc": desc,
                "date": date
            }
            myf.push(obj);
        }
        return myf;
    }

    render() {

        /* Get the parsed data for news (list) */
        var parsedData = this.parseData();
        console.log(parsedData);

        /* Create the cards for each news in the database */
        const elements = parsedData.map((data) =>
            <div>
                <Card className="text-center">
                    <Card.Header>{data.comm}</Card.Header>
                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>
                            {data.desc}
                        </Card.Text>
                        <Button variant="primary">Learn more!</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">{data.date}</Card.Footer>
                </Card>
                <br/>
            </div>
        );

        /* Render the news */
        return (
            <div>
                <Container id="mainDiv" style={{ "margin-top": "5%", "margin-bottom": "5%" }}>
                    <ul>
                        {elements}
                    </ul>
                </Container>
            </div>

        );
    }
}

export default news;