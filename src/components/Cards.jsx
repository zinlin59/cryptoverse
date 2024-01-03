import React from 'react'

const Cards = ({ card,setSelectedCards, selectedCards }) => {
    const handleClick=(()=> {
        console.log("clicked me")
        setSelectedCards ([...selectedCards, card])
    })
    return (
        <div>
            <div className='card' onClick={handleClick} >
                <div className='front'>
                    <img src={card.img} alt="" />
                </div>
                <div className='back'></div>
            </div>
        </div>
    )
}

export default Cards