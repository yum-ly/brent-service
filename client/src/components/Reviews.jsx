import React from 'react';
import axios from 'axios';


class Reviews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uuid: null,
            reviews: [{stars: 0, user: '', date: '', text: '', avatar: ''}, {stars: 0, user: '', date: '', text: '', avatar: ''}],
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

    avgStar() {
        let array = this.state.reviews.map((review) => {
            return Number(review.stars);
        });
        let num = array.reduce((acc, cur) => {
            return acc + cur;
        });
        return num / 5;
    }


    render() {
        return(
            <div>
                <div>{this.avgStar()}</div>
                {this.state.reviews.map( (review, index) => {
                    return(
                        <div>
                            <img key={index} src={review.avatar} alt="Avatar" className="images"/>
                            <div key={index} className='names'>{review.user}</div>
                            <div key={index} className='dates'>{review.date.slice(0, 10)}</div>
                            <div className='startext'>
                                <span key={index} className='rating'>{review.stars}</span>
                                <span key={index} className='text'>{review.text}</span>
                            </div>
                        </div>
                    )
                }
            )}
            </div>
        )
    }
}
                    

export default Reviews;

