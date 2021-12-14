import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) { //takes the properties as a parameter and sets the values according to them
    return (
        <>
            <li className='cards--item'>
                <Link className='cards--item--link' to={props.path}>
                    <figure className='cards--item--pic--wrap' data-category={props.label}>
                        <img src={props.src} alt='Fitness Image' className='cards--item--img'/>
                    </figure>
                    <div className='cards--item--info'>
                        <h5 className='cards--item--text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
