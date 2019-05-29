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
                <img className='images' src={this.state.reviews[0].avatar}/>
                <div className='names'>{this.state.reviews[0].name}</div>
                <div className='dates'>{this.state.reviews[0].date}</div>
                <div>
                    <div className='stars'>{this.state.reviews[0].stars}></div>
                    <div className='text'>{this.state.reviews[0].text}</div>
                </div>
            </div>
        )
    }
}

export default Reviews;

