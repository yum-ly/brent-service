import React from 'react';
import axios from 'axios';
import ReactStars from 'react-stars'


class Reviews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uuid: 50,
            reviews: [{stars: 0, user: '', date: '', text: '', avatar: ''}],
        }
    }

    componentDidMount() {
        axios.get('/reviews', {params: { uuid: this.state.uuid }})
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

    dateChanger(date) {
        let month = date.slice(5, 7);

        if (month === '01') {
            return 'January ' + date.slice(8, 10) + ', ' + date.slice(0, 4);
        }
        if (month === '02') {
            return 'February ' + date.slice(8, 10) + ', ' + date.slice(0, 4);
        }
        if (month === '03') {
            return 'March ' + date.slice(8, 10) + ', ' + date.slice(0, 4);
        }
        if (month === '04') {
            return 'April ' + date.slice(8, 10) + ', ' + date.slice(0, 4);
        }
        if (month === '12') {
            return 'May ' + date.slice(8, 10) + ', ' + date.slice(0, 4);
        }
        if (month === '05') {
            return 'June ' + date.slice(8, 10) + ', ' + date.slice(0, 4);
        }
        if (month === '07') {
            return 'July ' + date.slice(8, 10) + ', ' + date.slice(0, 4);
        }
        if (month === '08') {
            return 'August ' + date.slice(8, 10) + ', ' + date.slice(0, 4);
        }
        if (month === '09') {
            return 'September ' + date.slice(8, 10) + ', ' + date.slice(0, 4);
        }
        if (month === '10') {
            return 'October ' + date.slice(8, 10) + ', ' + date.slice(0, 4);
        }
        if (month === '11') {
            return 'November ' + date.slice(8, 10) + ', ' + date.slice(0, 4);
        }
        if (month === '12') {
            return 'December ' + date.slice(8, 10) + ', ' + date.slice(0, 4);
        }
    }


    render() {
        return(
            <div className='container'>
                <div>
                <ReactStars count={5} size={24} color1={'#E8E8E8'} color2={'#101820'} value={this.avgStar()} edit={false} />
                </div>
                {this.state.reviews.map( (review, index) => {
                    return(
                        <div className='one-review'>
                            <img key={index} src={review.avatar} alt="Avatar" className="images"/>
                            <div className='review-data'>
                                <div key={index} className='names'>{review.user}</div>
                                <div key={index} className='dates'>{this.dateChanger(review.date)}</div>
                                <span className='star-text'>
                                    <ReactStars className='inline-stars' count={5} size={24} color1={'#E8E8E8'} color2={'#101820'} value={review.stars} edit={false} />
                                    <div key={index} className='text'>{review.text}</div>
                                </span>
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

