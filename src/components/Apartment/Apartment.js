import React from 'react';
import './Apartment.css'
import logo from '../../images/map-marker-alt-solid 1.png';
import image1 from '../../images/bed 1.png';
import image2 from '../../images/bath 1.png';
import { Button } from 'react-bootstrap';

const Apartment = ({ place }) => {
    const { name, image, price } = place;
    return (
        <div>
            <div className=" card box   mt-5  ml-5 ">
                <div class="card" style={{ width: "18rem" }}>
                    <img src={image} class="card-img-top" alt="..." />
                    <div class="card-body" >
                        <h5 style={{ color: 'black', fontWeight:"bold" }} class="card-title">{name}</h5>
                        <div>
                            <span className="fontSize"><img src={logo} width="10px" alt="" /> Nasirabad H/S, Chattogram</span>
                        </div>
                        <div>
                            <span className="fontSize"><img src={image1} width="20px" alt="" /> 3 bedrooms</span>
                            <span className="fontSize"><img src={image2} className="left" width="20px" height="15px" alt="" /> 2 bathroom</span>
                        </div>
                        <div className="bottom" >
                            <span className="price">${price}</span>
                            <Button  className="Buttons">View details</Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apartment;