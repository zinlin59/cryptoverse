import React from 'react'

const Cards = ({ card }) => {
    console.log(card);
    return (
        <div>
            <div className='card'>
                <div className='front'>
                    <img src={card.img} alt="" />
                </div>
                <div className='back'></div>
            </div>
        </div>
    )
}

export default Cards