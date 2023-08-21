import React, { useState } from 'react';

const Location = ({ id, image, info, name, price, removeLocation }) => { 
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-location">
      <img src={image} alt={name} />
      <footer>
        <div className="location-info">
          <h4>{name}</h4>
          <h4 className="location-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeLocation(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Location;
