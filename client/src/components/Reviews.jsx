import React from 'react';
import axios from 'axios';
import ReactStars from 'react-stars';
import ReadMoreAndLess from 'react-read-more-less';

class Reviews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uuid: 50,
            reviews: [{stars: 0, user: '', date: '', text: '', avatar: ''}],
        }
    }

    componentDidMount() {
        axios.get('http://ec2-3-19-61-244.us-east-2.compute.amazonaws.com', {params: { uuid: this.state.uuid }})
        .then((response) => {
            console.log(response.data);
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
                <div className='avg-stars-container'>
                    <div className='avg-title'>AVERAGE RATING</div>
                    <div className='avg-num'>{this.avgStar()}</div>
                    <ReactStars  className='avg-stars' count={5} size={24} color1={'#E8E8E8'} color2={'#101820'} value={  this.avgStar()} edit={false} />
                </div>
                {this.state.reviews.map((review) => {
                    return(
                        <div className='one-review'>
                            <img src={review.avatar} alt="Avatar" className="images"/>
                            <div className='review-data'>
                                <div className='names'>{review.user}</div>
                                <div className='dates'>{this.dateChanger(review.date)}</div>
                                <div className='star-text'>
                                    <ReactStars className='inline-stars' count={5} size={18} color1={'#E8E8E8'} color2={'#101820'} value={review.stars} edit={false} />
                                    <ReadMoreAndLess className='read-more' ref={this.ReadMore} className='text' readLessText='...See Less' readMoreText='See More'>{review.text}</ReadMoreAndLess>
                                </div>
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

