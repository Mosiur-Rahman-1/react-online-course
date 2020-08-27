import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {
    const {price, title, url} = props.courseDetails;
    return (
        <div className = "main-container">
            <div className="card card-width">
                <img src={url} className="card-img-top img-size" alt="courseImage"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-title">${price}</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button onClick = {() => props.handleBuyCourse(props.courseDetails)} className="btn btn-primary"><FontAwesomeIcon className = "icon-white pr-2" icon={faShoppingCart}/>Buy now</button>
            </div>
            </div>
        </div>
    );
};

export default Course;