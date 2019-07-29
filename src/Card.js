import React from 'react';
import './Card.css';

function Cards(props) {
  return (
    <div className="Card">
      <button 
        type="button"
        onClick={() => props.handleDeleteButton(props.id)}>
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}

Cards.propTypes = {
  handleDeleteButton: () => {}
}


export default Cards;
