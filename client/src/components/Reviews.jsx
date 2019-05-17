import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Reviews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uuid: null,
            reviews: []
        }
    }

    componentDidMount() {
        axios.get('/reviews')
        .then((response) => {
            console.log(response);
            this.setState({
                reviews: response.data.reviews
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return(
            <div>
                <p1>hello</p1>
            </div>
        )
    }
}

export default Reviews;

