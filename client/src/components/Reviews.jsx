import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Reviews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uuid: null,
            reviews: [{stars: 0, user: '', date: '', text: '', avatar: ''}],
        }
    }

    componentDidMount() {
        axios.get('/reviews')
        .then((response) => {
            console.log(response.data.review);
            this.setState({
                reviews: response.data.review
            });
        })
        .catch((error) => {
            console.log(error); 
        })
    }

    render() {
        return(
            <div>
                <img src={this.state.reviews[0].avatar}/>
                <div>{this.state.reviews[0].name}</div>
                <div>{this.state.reviews[0].date}</div>
                <div>{this.state.reviews[0].stars}{this.state.reviews[0].text}</div>
            </div>
        )
    }
}

export default Reviews;

