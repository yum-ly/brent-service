import React from 'react';
import axios from 'axios';
import ReactStars from 'react-stars';
import ReadMoreAndLess from 'react-read-more-less';

class Reviews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uuid: 1,
            reviews: [{stars: 0, user: '', date: '', text: '', avatar: ''}],
        }
    }

    componentDidMount() {
        axios.get('http://ec2-3-19-61-244.us-east-2.compute.amazonaws.com/reviews', {params: { uuid: this.state.uuid }})
        .then((response) => {
            this.setState({
                reviews: response.data.review
            });
        })
        .catch((error) => {
            console.log(error); 
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.uuid !== prevProps.uuid) {
            axios.get('http://ec2-3-19-61-244.us-east-2.compute.amazonaws.com/reviews', {params: { uuid: this.props.uuid }})
            .then((response) => {
                this.setState({
                    reviews: response.data.review
                });
            })
            .catch((error) => {
                console.log(error); 
            })
        }
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
            <div className='container-reviews'>
                <div className='avg-stars-container-reviews'>
                    <div className='avg-title-reviews'>AVERAGE RATING</div>
                    <div className='avg-num-reviews'>{this.avgStar()}</div>
                    <ReactStars  className='avg-stars-reviews' count={5} size={24} color1={'#E8E8E8'} color2={'#101820'} value={  this.avgStar()} edit={false} />
                </div>
                {this.state.reviews.map((review, index) => {
                    return(
                        <div className='one-review-reviews' key={index}>
                            <img src={review.avatar[0]} alt="Avatar-reviews" className="images-reviews"/>
                            <div className='review-data-reviews'>
                                <div className='names-reviews'>{review.user}</div>
                                <div className='dates-reviews'>{this.dateChanger(review.date)}</div>
                                <div className='star-text-reviews'>
                                    <ReactStars className='inline-stars-reviews' half={true} count={5} size={18} color1={'#E8E8E8'} color2={'#101820'} value={review.stars} edit={false} />
                                    <ReadMoreAndLess ref={this.ReadMore} className='text-reviews' readLessText='...See Less' readMoreText='See More'>{review.text}</ReadMoreAndLess>
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

