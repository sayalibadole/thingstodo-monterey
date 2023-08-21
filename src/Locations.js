import React from 'react';
import Location from './Location';
const Locations = ({ locations, removeLocation }) => {
  return (
    <section>
      <div className="title">
        <h2>things to do in monterey</h2>
        <div className="underline"></div>
      </div>
      <div>
        {locations.map((location) => {
          return <Location key={location.id} {...location} removeLocation={removeLocation} />;
        })}
      </div>
    </section>
  );
};

export default Locations;
